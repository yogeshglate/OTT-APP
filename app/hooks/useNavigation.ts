import {
  useNavigation as nativeUseNavigation,
  useRoute as nativeUseRoute,
  RouteProp,
  useFocusEffect,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'types';

export const useNavigation = () => {
  const navigation =
    nativeUseNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = nativeUseRoute<RouteProp<RootStackParamList>>();

  return {
    navigation,
    route,
    useFocusEffect,
  };
};
