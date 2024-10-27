import 'intl-pluralrules';
import { NavigationContainer } from '@react-navigation/native';
import { NoInternet } from 'components';
import { colors } from 'constant';
import { useAuth, useDarkMode, useNetworkStatus } from 'hooks';
import { AuthNavigator } from 'navigation';
import React, { createContext } from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n } from 'services';
import { ThemeContextType } from 'types';

export const ThemeContext = createContext<ThemeContextType>(null);

const AppContent = () => {
  const { isDarkMode, setColorTheme } = useDarkMode();

  const themeColors = isDarkMode ? colors.dark : colors.light;
  const toggleTheme = (isDark: boolean) => setColorTheme(isDark);
  const { user } = useAuth();
  const isConnected = useNetworkStatus();

  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <ThemeContext.Provider
          value={{ isDarkMode, themeColors, toggleTheme, user }}>
          {isConnected ? <AuthNavigator /> : <NoInternet />}
        </ThemeContext.Provider>
      </NavigationContainer>
    </I18nextProvider>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;
