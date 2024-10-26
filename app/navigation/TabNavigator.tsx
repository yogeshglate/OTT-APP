import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Favorites, Home, Search, Settings } from 'screens';
import { ThemeContext } from '../App';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { themeColors, isDarkMode } = React.useContext(ThemeContext) || {};

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
          backgroundColor: themeColors?.tabBarBackground,
          borderTopColor: themeColors?.tabBarBorderTop,
        },
        tabBarInactiveTintColor: themeColors?.tabBarInactive,
        tabBarActiveTintColor: themeColors?.tabBarActive,
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
