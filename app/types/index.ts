import { GestureResponderEvent } from 'react-native';
import { colors } from 'styles';

interface ButtonProps {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  type?: 'contained' | 'outlined';
}

type RootStackParamList = {
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

interface User {
  email: string;
  password: string;
  username: string;
}

type ThemeContextType = {
  isDarkMode: boolean;
  themeColors: typeof colors.light;
  toggleTheme: (isDark: boolean) => void;
  user: User | null;
} | null;

export type { ButtonProps, RootStackParamList, ThemeContextType, User };
