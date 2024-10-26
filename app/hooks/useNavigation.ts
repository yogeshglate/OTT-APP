import {
  useNavigation as nativeUseNavigation,
  useRoute as nativeUseRoute,
  NavigationProp,
  RouteProp,
  useFocusEffect,
} from '@react-navigation/native';
import { RootStackParamList } from 'types';

export const useNavigation = () => {
  const navigation = nativeUseNavigation<NavigationProp<RootStackParamList>>();
  const route = nativeUseRoute<RouteProp<RootStackParamList>>();

  return { navigation, route, useFocusEffect };
};
