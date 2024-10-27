import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Config from 'react-native-config';
import { showError } from 'services';
import { MovieDetail } from 'types';

export const useFetchMovieDetails = (id: string) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${Config.API_BASE_URL}${id}`, {
          params: { api_key: Config.API_KEY, language: 'en-US' },
        });
        setMovieDetails(response.data);
      } catch (error) {
        showError(`${t('MOVIE_DETAILS_FETCH_ERROR')}`);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return { movieDetails, loading };
};
