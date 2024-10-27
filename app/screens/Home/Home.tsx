import { ThemeContext } from 'app';
import { AppConstants } from 'constant';
import { useFetchMovies, useNavigation } from 'hooks';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Category } from 'types';
import getStyles from './HomeStyles';

const Home: React.FC = () => {
  const { navigation } = useNavigation();
  const { themeColors } = React.useContext(ThemeContext) || {};
  const styles = getStyles(themeColors);
  const { t } = useTranslation();

  const categories: Category[] = [
    { title: t('POPULAR'), moviesHook: useFetchMovies('popular') },
    {
      title: t('NOW_PLAYING'),
      moviesHook: useFetchMovies('now_playing'),
    },
    { title: t('UPCOMING'), moviesHook: useFetchMovies('upcoming') },
    { title: t('TOP_RATED'), moviesHook: useFetchMovies('top_rated') },
  ];

  const handleNavigateToDetails = (movieId: number) => {
    navigation.navigate('Detail', { id: movieId.toString() });
  };

  const renderCategory = (
    title: string,
    { movies, loading, loadMore, hasMore }: Category['moviesHook'],
  ) => (
    <View style={styles.section} key={title}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => handleNavigateToDetails(item.id)}>
            <Image
              source={{
                uri: `${AppConstants.BASE_IMAGE_PATH}${item.poster_path}`,
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
          if (hasMore) {loadMore();}
        }}
        ListFooterComponent={
          loading && hasMore ? (
            <ActivityIndicator
              size="large"
              color={themeColors?.text}
              style={styles.loadingIndicator}
            />
          ) : null
        }
      />
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image source={AppConstants.LANDING_IMAGE} style={styles.headerImage} />
      </View>
      {categories.map(({ title, moviesHook }) =>
        renderCategory(title, moviesHook),
      )}
    </ScrollView>
  );
};

export default Home;
