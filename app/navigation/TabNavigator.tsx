import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useColorScheme } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Favorites, Home, Search, Settings } from 'screens';

const Tab = createBottomTabNavigator();

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
        component={Home}
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
        component={Favorites}
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
