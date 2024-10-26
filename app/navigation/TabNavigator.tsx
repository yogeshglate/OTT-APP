import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Details, Favorites, Home, Search, Settings } from 'screens';
import React from 'react';
import { useColorScheme } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeTab" component={Home} />
    <Stack.Screen name="DetailTab" component={Details} />
  </Stack.Navigator>
);

const FavoriteStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="FavoriteTab" component={Favorites} />
    <Stack.Screen name="DetailTab" component={Details} />
  </Stack.Navigator>
);

export const TabNavigator = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  const TabIcon = ({
    iconName,
    color,
    size,
  }: {
    iconName: string;
    color: string;
    size: number;
  }) => <MaterialCommunityIcon name={iconName} size={size} color={color} />;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#121212' : '#FFFFFF',
          borderTopColor: isDarkMode ? '#121212' : '#E0E0E0',
        },
        tabBarInactiveTintColor: isDarkMode ? '#8E8E93' : '#8E8E93',
        tabBarActiveTintColor: isDarkMode ? '#00C853' : '#00C853',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabIcon iconName="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabIcon iconName="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabIcon iconName="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabIcon iconName="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
