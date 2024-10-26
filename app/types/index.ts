import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GestureResponderEvent } from 'react-native';
import { colors } from 'styles';

interface ButtonProps {
  text: string;
  onPress: (event: GestureResponderEvent) => void; // Type for onPress
  type?: 'contained' | 'outlined'; // Limiting type prop to 'contained' or 'outlined'
}

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Favorites: undefined;
  Settings: undefined;
  Detail: { id: number };
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

export type { ButtonProps, RootStackParamList, User, ThemeContextType };
