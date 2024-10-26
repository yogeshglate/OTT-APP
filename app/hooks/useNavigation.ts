import {
  useNavigation as nativeUseNavigation,
  NavigationProp,
} from '@react-navigation/native';
import { RootStackParamList } from 'types';

export const useNavigation = () => {
  return nativeUseNavigation<NavigationProp<RootStackParamList>>();
};
