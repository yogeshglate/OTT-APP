import { NavigationContainer } from '@react-navigation/native';
import { useDarkMode } from 'hooks';
import { AuthNavigator } from 'navigation';
import React, { createContext } from 'react';
import { colors } from 'styles';
import { ThemeContextType } from 'types';

export const ThemeContext = createContext<ThemeContextType>(null);

const AppContent = () => {
  const { isDarkMode, setColorTheme } = useDarkMode();

  const themeColors = isDarkMode ? colors.dark : colors.light;
  const toggleTheme = (isDark: boolean) => setColorTheme(isDark);

  return (
    <NavigationContainer>
      <ThemeContext.Provider value={{ isDarkMode, themeColors, toggleTheme }}>
        <AuthNavigator />
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;
