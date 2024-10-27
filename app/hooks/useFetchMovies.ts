import axios from 'axios';
import { useEffect, useState } from 'react';
import Config from 'react-native-config';
import { showError } from 'services';
import { Movie } from 'types';

export const useFetchMovies = (category: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!hasMore) {
        return;
      }

      setLoading(true);
      try {
        const response = await axios.get(`${Config.API_BASE_URL}${category}`, {
          params: { api_key: Config.API_KEY, language: 'en-US', page },
        });

        setMovies(prevMovies => {
          const existingIds = new Set(prevMovies.map(movie => movie.id));
          const newMovies = response.data.results.filter(
            (movie: Movie) => !existingIds.has(movie.id),
          );
          return [...prevMovies, ...newMovies];
        });

        setHasMore(response.data.page < response.data.total_pages);
      } catch (error) {
        showError(`Error fetching ${category} movies: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category, page, hasMore]);

  const loadMore = () => {
    if (hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return { movies, loading, loadMore, hasMore };
};
