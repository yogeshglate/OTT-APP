import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Movie, MovieDetail } from 'types';

const FAVORITES_KEY = '@favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<MovieDetail[]>([]);

  const getFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Failed to load favorites', error);
    }
  };
  useEffect(() => {
    getFavorites();
  }, []);

  const addFavorite = async (movie: MovieDetail) => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  };

  const removeFavorite = async (movieId?: number) => {
    const updatedFavorites = favorites.filter(
      (movie: MovieDetail) => movie.id !== movieId,
    );
    setFavorites(updatedFavorites);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  };

  const isFavorite = (movieId?: number) => {
    return favorites.some(movie => movie.id === movieId);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite, getFavorites };
};
