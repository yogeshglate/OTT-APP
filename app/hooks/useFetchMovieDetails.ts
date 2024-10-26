import { useEffect, useState } from 'react';
import axios from 'axios';
import Config from 'react-native-config';
import { MovieDetail } from 'types';

export const useFetchMovieDetails = (id: string) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: { api_key: Config.API_KEY, language: 'en-US' },
          },
        );
        setMovieDetails(response.data);
      } catch (error) {
        setError('Failed to fetch movie details');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return { movieDetails, loading, error };
};
