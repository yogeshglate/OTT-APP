import { useFavorites, useNavigation } from 'hooks';
import React, { useCallback } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MovieDetail } from 'types';
import { ThemeContext } from '../../App';
import styles from './FavoritesStyles';

const Favorites = () => {
  const { themeColors } = React.useContext(ThemeContext) || {};
  const { getFavorites, favorites } = useFavorites();
  const { navigation, useFocusEffect } = useNavigation();

  useFocusEffect(
    useCallback(() => {
      getFavorites();
    }, [getFavorites]),
  );

  const handleNavigateToDetails = (movieId: number) => {
    navigation.navigate('Detail', { id: movieId.toString() });
  };

  const renderMovieCard = ({ item }: { item: MovieDetail }) => (
    <Pressable
      style={[
        styles.movieCard,
        { backgroundColor: themeColors?.inputBackground },
      ]}
      onPress={() => handleNavigateToDetails(item.id)}>
      <Image
        style={styles.posterIcon}
        resizeMode="cover"
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
      />
      <View style={styles.movieInfoContainer}>
        <View style={styles.movieTitleContainer}>
          <View>
            <Text style={[styles.movieTitle, { color: themeColors?.text }]}>
              {item.title}
            </Text>
            <Text style={styles.movieYear}>{item.release_date}</Text>
          </View>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color={themeColors?.text}
          />
        </View>
        <View style={styles.badgeWrapper}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Downloaded</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );

  const renderEmptyListMessage = () => (
    <View style={styles.emptyListContainer}>
      <Text style={[styles.emptyListText, { color: themeColors?.text }]}>
        No favorites added yet!
      </Text>
      <Text style={[styles.emptyListSubText, { color: themeColors?.text }]}>
        Add some movies to your favorites list to see them here.
      </Text>
    </View>
  );

  return (
    <View
      style={[styles.container, { backgroundColor: themeColors?.background }]}>
      <View
        style={[styles.appBar, { backgroundColor: themeColors?.background }]}>
        <Text style={[styles.title, { color: themeColors?.text }]}>
          Favorites
        </Text>
      </View>
      <FlatList
        data={favorites}
        renderItem={renderMovieCard}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyListMessage}
      />
    </View>
  );
};

export default Favorites;
