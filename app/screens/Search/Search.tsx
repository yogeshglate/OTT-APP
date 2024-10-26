import { useFetchMovies, useNavigation } from 'hooks';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../../App';
import { styles } from './SearchStyles'; // Make sure to have a styles file similar to HomeStyles

const Search = () => {
  const { themeColors } = React.useContext(ThemeContext) || {};
  const { navigation } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const {
    movies: popularMovies,
    loading: popularLoading,
    loadMore: loadMorePopular,
    hasMore: hasMorePopular,
  } = useFetchMovies('popular'); // Fetch popular movies initially

  const handleNavigateToDetails = (movieId: number) => {
    navigation.navigate('Detail', { id: movieId.toString() });
  };

  const renderMovieItem = ({ item }: any) => (
    <Pressable
      style={styles.movieCard}
      onPress={() => handleNavigateToDetails(item.id)}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.movieImage}
      />
      <Text style={[styles.movieTitle, { color: themeColors?.text }]}>
        {item.title}
      </Text>
    </Pressable>
  );

  const renderCategory = (
    title: string,
    data: any[],
    loading: boolean,
    loadMore: () => void,
    hasMore: boolean,
  ) => (
    <FlatList
      data={data}
      renderItem={renderMovieItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2} // Display two columns
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        if (hasMore) loadMore(); // Load more movies when the end of the list is reached
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
  );

  return (
    <View
      style={[styles.container, { backgroundColor: themeColors?.background }]}>
      <View
        style={[styles.appBar, { backgroundColor: themeColors?.background }]}>
        <Text style={[styles.title, { color: themeColors?.text }]}>Search</Text>
      </View>

      <View
        style={[
          styles.searchBarContainer,
          { backgroundColor: themeColors?.inputBackground },
        ]}>
        <TextInput
          style={[styles.searchBar, { color: themeColors?.text }]}
          placeholder="Search for a title..."
          placeholderTextColor={themeColors?.primary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <MaterialCommunityIcons
          name="magnify"
          size={24}
          color={themeColors?.primary}
        />
      </View>

      {renderCategory(
        'Popular Movies',
        popularMovies,
        popularLoading,
        loadMorePopular,
        hasMorePopular,
      )}
    </View>
  );
};

export default Search;
