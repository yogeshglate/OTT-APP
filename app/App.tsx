import { NavigationContainer } from '@react-navigation/native';
import { Loader, NoInternet } from 'components';
import { colors } from 'constant';
import { useAuth, useDarkMode, useNetworkStatus } from 'hooks';
import 'intl-pluralrules';
import { AuthNavigator } from 'navigation';
import React, { createContext } from 'react';
import { I18nextProvider } from 'react-i18next';
import Toast from 'react-native-toast-message';
import { i18n } from 'services';
import { ThemeContextType } from 'types';

export const ThemeContext = createContext<ThemeContextType>(null);

const AppContent = () => {
  const { isDarkMode, setColorTheme } = useDarkMode();
  const themeColors = isDarkMode ? colors.dark : colors.light;
  const toggleTheme = (isDark: boolean) => setColorTheme(isDark);

  const { user, loading } = useAuth();
  const isConnected = useNetworkStatus();

  if (loading) {
    return <Loader isLoading />;
  }

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, themeColors, toggleTheme, user }}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          {isConnected ? <AuthNavigator /> : <NoInternet />}
          <Toast />
        </NavigationContainer>
      </I18nextProvider>
    </ThemeContext.Provider>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;
