import { useFetchMovies, useNavigation } from 'hooks';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Movie } from 'types';
import { ThemeContext } from '../../App';
import styles from './HomeStyles';

const MovieScreen = () => {
  const { navigation } = useNavigation();
  const { themeColors } = React.useContext(ThemeContext) || {};

  const {
    movies: popularMovies,
    loading: popularLoading,
    loadMore: loadMorePopular,
    hasMore: hasMorePopular,
  } = useFetchMovies('popular');
  const {
    movies: nowPlayingMovies,
    loading: nowPlayingLoading,
    loadMore: loadMoreNowPlaying,
    hasMore: hasMoreNowPlaying,
  } = useFetchMovies('now_playing');
  const {
    movies: upcomingMovies,
    loading: upcomingLoading,
    loadMore: loadMoreUpcoming,
    hasMore: hasMoreUpcoming,
  } = useFetchMovies('upcoming');
  const {
    movies: topRatedMovies,
    loading: topRatedLoading,
    loadMore: loadMoreTopRated,
    hasMore: hasMoreTopRated,
  } = useFetchMovies('top_rated');

  const handleNavigateToDetails = (movieId: number) => {
    navigation.navigate('Detail', { id: movieId.toString() });
  };

  const renderCategory = (
    title: string,
    data: Movie[],
    loading: boolean,
    loadMore: () => void,
    hasMore: boolean,
  ) => (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: themeColors?.text }]}>
        {title}
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => handleNavigateToDetails(item.id)}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
              style={styles.image}
            />
          </Pressable>
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (hasMore) loadMore();
        }}
        ListFooterComponent={
          loading && hasMore ? (
            <ActivityIndicator
              size="large"
              color={themeColors?.text}
              style={{ padding: 16 }}
            />
          ) : null
        }
      />
    </View>
  );

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: themeColors?.inputBackground },
      ]}
      showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image
          source={require('assets/landing.png')}
          style={styles.headerImage}
        />
      </View>

      {renderCategory(
        'Popular',
        popularMovies,
        popularLoading,
        loadMorePopular,
        hasMorePopular,
      )}
      {renderCategory(
        'Now Playing',
        nowPlayingMovies,
        nowPlayingLoading,
        loadMoreNowPlaying,
        hasMoreNowPlaying,
      )}
      {renderCategory(
        'Upcoming',
        upcomingMovies,
        upcomingLoading,
        loadMoreUpcoming,
        hasMoreUpcoming,
      )}
      {renderCategory(
        'Top Rated',
        topRatedMovies,
        topRatedLoading,
        loadMoreTopRated,
        hasMoreTopRated,
      )}
    </ScrollView>
  );
};

export default MovieScreen;
