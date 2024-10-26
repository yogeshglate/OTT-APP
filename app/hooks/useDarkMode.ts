import { useState, useEffect } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

export const useDarkMode = () => {
  const getCurrentColorScheme = (): boolean => {
    const colorScheme: ColorSchemeName = Appearance.getColorScheme();
    return colorScheme === 'dark';
  };

  const [isDarkMode, setIsDarkMode] = useState(getCurrentColorScheme());

  const setColorTheme = (isDark: boolean) => setIsDarkMode(isDark);

  useEffect(() => {
    const listener = (preferences: { colorScheme: ColorSchemeName }) => {
      if (preferences.colorScheme) {
        setIsDarkMode(preferences.colorScheme === 'dark');
      }
    };

    const subscription = Appearance.addChangeListener(listener);
    return () => subscription.remove();
  }, []);

  return { isDarkMode, setColorTheme };
};
