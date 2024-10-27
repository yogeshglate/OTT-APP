import { ThemeContext } from 'app';
import { AppConstants, AppIcons } from 'constant';
import { useFetchMovies, useNavigation } from 'hooks';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import getStyles from './SearchStyles';

const Search: React.FC = () => {
  const { themeColors } = React.useContext(ThemeContext) || {};
  const styles = getStyles(themeColors);
  const { navigation } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();

  const {
    movies: popularMovies,
    loading: popularLoading,
    loadMore: loadMorePopular,
    hasMore: hasMorePopular,
  } = useFetchMovies('popular');

  const handleNavigateToDetails = (movieId: number) => {
    navigation.navigate('Detail', { id: movieId.toString() });
  };

  const renderMovieItem = ({ item }: any) => (
    <Pressable
      style={styles.movieCard}
      onPress={() => handleNavigateToDetails(item.id)}>
      <Image
        source={{ uri: `${AppConstants.BASE_IMAGE_PATH}${item.poster_path}` }}
        style={styles.movieImage}
      />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </Pressable>
  );

  const renderCategory = (
    _title: string,
    data: any[],
    loading: boolean,
    loadMore: () => void,
    hasMore: boolean,
  ) => (
    <FlatList
      data={data}
      renderItem={renderMovieItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        if (hasMore) loadMore();
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
  );

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.title}>{t('SEARCH_TITLE')}</Text>
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder={t('SEARCH_PLACEHOLDER')}
          placeholderTextColor={themeColors?.primary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <MaterialCommunityIcons
          name={AppIcons.Search}
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
