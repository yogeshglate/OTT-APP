import { ThemeContext } from 'app';
import { Loader } from 'components';
import { AppConstants, AppIcons } from 'constant';
import { useFavorites, useFetchMovieDetails, useNavigation } from 'hooks';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MovieDetail } from 'types';
import { getStyles } from './DetailsStyles';

const Details = () => {
  const { themeColors } = React.useContext(ThemeContext) || {};
  const styles = getStyles(themeColors);
  const { navigation, route } = useNavigation();
  const { t } = useTranslation();
  const movieId = route.params?.id || '';

  const { movieDetails, loading } = useFetchMovieDetails(movieId);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

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
    <ScrollView style={styles.container}>
      <View style={styles.appBar}>
        <Pressable onPress={handleGoBack}>
          <Icon name="arrow-left" size={24} color={themeColors?.text} />
        </Pressable>
        <Text style={styles.title}>
          {movieDetails ? movieDetails.title : t('LOADING_TEXT')}
        </Text>
        <Pressable onPress={handleToggleFavorite}>
          <Icon
            name={
              isFavorite(movieDetails?.id)
                ? AppIcons.Favorite
                : AppIcons.Favorite_Outline
            }
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
              uri: `${AppConstants.BASE_IMAGE_PATH}${movieDetails?.backdrop_path}`,
            }}
            style={styles.bannerImage}
          />

          <View style={styles.detailsContainer}>
            <Text style={styles.showTitle}>{movieDetails?.title}</Text>
            <Text style={styles.showInfo}>
              {movieDetails?.release_date} | {movieDetails?.runtime} min
            </Text>
            <Text style={styles.showDescription}>{movieDetails?.overview}</Text>
            <Text style={styles.showAdditionalInfo}>
              <Text style={styles.boldText}>{t('CREATORS_LABEL')}</Text>
              {movieDetails?.production_companies
                ?.map(creator => creator.name)
                .join(', ')}
            </Text>
            <Text style={styles.showAdditionalInfo}>
              <Text style={styles.boldText}>{t('GENRES_LABEL')}</Text>
              {movieDetails?.genres?.map(genre => genre.name).join(', ')}
            </Text>
            <Text style={styles.showAdditionalInfo}>
              <Text style={styles.boldText}>{t('RATING_LABEL')}</Text>
              {movieDetails?.vote_average} / 10
            </Text>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default Details;
