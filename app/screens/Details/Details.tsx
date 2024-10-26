import { Loader } from 'components';
import { useFavorites, useFetchMovieDetails, useNavigation } from 'hooks';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MovieDetail } from 'types';
import { ThemeContext } from '../../App';

const ShowDetailScreen = () => {
  const { themeColors } = React.useContext(ThemeContext) || {};
  const { navigation, route } = useNavigation();
  const movieId = route.params?.id || '';

  const { movieDetails, loading } = useFetchMovieDetails(movieId);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites(); // Use the custom hook

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleToggleFavorite = () => {
    if (isFavorite(movieDetails?.id)) {
      removeFavorite(movieDetails?.id);
    } else {
      addFavorite(movieDetails as MovieDetail);
    }
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: themeColors?.background }]}>
      <View
        style={[styles.appBar, { backgroundColor: themeColors?.background }]}>
        <Pressable onPress={handleGoBack}>
          <Icon name="arrow-left" size={24} color={themeColors?.text} />
        </Pressable>
        <Text style={[styles.title, { color: themeColors?.text }]}>
          {movieDetails ? movieDetails.title : 'Loading...'}
        </Text>
        <Pressable onPress={handleToggleFavorite}>
          <Icon
            name={isFavorite(movieDetails?.id) ? 'heart' : 'heart-outline'}
            size={24}
            color={themeColors?.text}
          />
        </Pressable>
      </View>

      {loading ? (
        <Loader isLoading />
      ) : (
        <>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}`,
            }}
            style={styles.bannerImage}
          />

          <View
            style={[
              styles.detailsContainer,
              { backgroundColor: themeColors?.background },
            ]}>
            <Text style={[styles.showTitle, { color: themeColors?.text }]}>
              {movieDetails?.title}
            </Text>
            <Text style={[styles.showInfo, { color: themeColors?.text }]}>
              {movieDetails?.release_date} | {movieDetails?.runtime} min
            </Text>
            <Text
              style={[styles.showDescription, { color: themeColors?.text }]}>
              {movieDetails?.overview}
            </Text>
            <Text
              style={[styles.showAdditionalInfo, { color: themeColors?.text }]}>
              <Text style={styles.boldText}>Genres:</Text>{' '}
              {movieDetails?.production_companies
                ?.map(creator => creator.name)
                .join(', ')}
            </Text>
            <Text
              style={[styles.showAdditionalInfo, { color: themeColors?.text }]}>
              <Text style={styles.boldText}>Genres : </Text>{' '}
              {movieDetails?.genres?.map(genre => genre.name).join(', ')}
            </Text>
            <Text
              style={[styles.showAdditionalInfo, { color: themeColors?.text }]}>
              <Text style={styles.boldText}>Rating : </Text>
              {movieDetails?.vote_average} / 10
            </Text>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 20,
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 15,
  },
  showTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  showInfo: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 10,
  },
  showDescription: {
    color: '#ddd',
    fontSize: 14,
    marginBottom: 10,
  },
  showAdditionalInfo: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  episodesTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  seasonTitle: {
    color: '#aaa',
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 10,
  },
  episodeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  episodeImage: {
    width: 70,
    height: 70,
    backgroundColor: '#555',
    borderRadius: 10,
  },
  episodeInfo: {
    marginLeft: 15,
    flex: 1,
  },
  episodeTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  episodeDuration: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 5,
  },
  episodeDescription: {
    color: '#ddd',
    fontSize: 14,
  },
  appBar: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomColor: 'rgba(0, 0, 0, 0.25)',
    borderBottomWidth: 4,
    width: '100%',
  },

  title: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
    fontSize: 18,
  },
  rating: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 5,
  },
});

export default ShowDetailScreen;
