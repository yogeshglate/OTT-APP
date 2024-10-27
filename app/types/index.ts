import { colors } from 'constant';
import { GestureResponderEvent } from 'react-native';
import { TextInputProps } from 'react-native-paper';

export interface ButtonProps {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  type?: 'contained' | 'outlined';
}

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Favorites: undefined;
  Settings: undefined;
  Detail: { id: string };
  Landing: undefined;
  Login: undefined;
  SignUp: undefined;
  HomeTab: undefined;
};

export interface User {
  email: string;
  password: string;
  username: string;
}

export type ThemeContextType = {
  isDarkMode: boolean;
  themeColors: typeof colors.light;
  toggleTheme: (isDark: boolean) => void;
  user: User | null;
  loadUser: () => Promise<void>;
} | null;

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export interface MovieDetail {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  genres: { id: number; name: string }[];
  runtime: number;
  vote_average: number;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
}

export type Category = {
  title: string;
  moviesHook: {
    movies: Movie[];
    loading: boolean;
    loadMore: () => void;
    hasMore: boolean;
  };
};

export type ToastOptions = {
  visibilityTime?: number;
  swipeable?: boolean;
};

export type ThemeColors = typeof colors.light;

export interface Credentials {
  email: string;
  password: string;
}

export interface SignUpCredentials extends Credentials {
  username: string;
}

export interface InputFieldProps extends TextInputProps {
  label: string;
  icon: string;
  themeColors?: ThemeColors;
}
