import { NavigationContainer } from '@react-navigation/native';
import { NoInternet } from 'components';
import { useAuth, useDarkMode, useNetworkStatus } from 'hooks';
import { AuthNavigator } from 'navigation';
import React, { createContext } from 'react';
import { colors } from 'styles';
import { ThemeContextType } from 'types';

export const ThemeContext = createContext<ThemeContextType>(null);

const AppContent = () => {
  const { isDarkMode, setColorTheme } = useDarkMode();

  const themeColors = isDarkMode ? colors.dark : colors.light;
  const toggleTheme = (isDark: boolean) => setColorTheme(isDark);
  const { user } = useAuth();
  const isConnected = useNetworkStatus();

  return (
    <NavigationContainer>
      <ThemeContext.Provider
        value={{ isDarkMode, themeColors, toggleTheme, user }}>
        {isConnected ? <AuthNavigator /> : <NoInternet />}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;
