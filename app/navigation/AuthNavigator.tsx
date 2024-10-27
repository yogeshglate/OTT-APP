import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from 'app';
import React from 'react';
import { Details, Landing, Login, SignUp } from 'screens';
import { RootStackParamList } from 'types';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = () => {
  const { user } = React.useContext(ThemeContext) || {};

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
      <Stack.Screen name="Detail" component={Details} />
    </Stack.Navigator>
  );
};

export default AuthStack;
