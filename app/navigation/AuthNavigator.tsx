import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing, Login, SignUp } from 'screens';
import React from 'react';
import TabNavigator from './TabNavigator';
import { RootStackParamList } from 'types';
import { useAuth } from 'hooks';

const Stack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      initialRouteName={user ? 'HomeTab' : 'Landing'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTab" component={TabNavigator} />
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
