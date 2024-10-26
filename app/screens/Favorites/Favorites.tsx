import { ThemeContext } from 'app';
import { AppConstants, AppIcons } from 'constant';
import { useFavorites, useNavigation } from 'hooks';
import React, { useCallback } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MovieDetail } from 'types';
import getStyles from './FavoritesStyles';

const Favorites: React.FC = () => {
  const { themeColors } = React.useContext(ThemeContext) || {};
  const styles = getStyles(themeColors);
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
      style={styles.movieCard}
      onPress={() => handleNavigateToDetails(item.id)}>
      <Image
        style={styles.posterIcon}
        resizeMode="cover"
        source={{ uri: `${AppConstants.BASE_IMAGE_PATH}${item.poster_path}` }}
      />
      <View style={styles.movieInfoContainer}>
        <View style={styles.movieTitleContainer}>
          <View>
            <Text style={styles.movieTitle}>{item.title}</Text>
            <Text style={styles.movieYear}>{item.release_date}</Text>
          </View>
          <MaterialCommunityIcons
            name={AppIcons.Options}
            size={24}
            color={themeColors?.text}
          />
        </View>
        <View style={styles.badgeWrapper}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {AppConstants.FAVORITES_DOWNLOAD_BADGE}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );

  const renderEmptyListMessage = () => (
    <View style={styles.emptyListContainer}>
      <Text style={styles.emptyListText}>
        {AppConstants.NO_FAVORITES_MESSAGE}
      </Text>
      <Text style={styles.emptyListSubText}>
        {AppConstants.NO_FAVORITES_SUB_MESSAGE}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.title}>{AppConstants.FAVORITES_TITLE}</Text>
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
