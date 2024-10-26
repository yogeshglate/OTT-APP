import { StyleSheet } from 'react-native';
import { ThemeColors } from 'types';

const getStyles = (themeColors?: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: themeColors?.background,
    },
    appBar: {
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: themeColors?.border || 'rgba(0, 0, 0, 0.25)',
      borderBottomWidth: 4,
      width: '100%',
    },
    title: {
      fontWeight: '700',
      fontFamily: 'Inter-Bold',
      fontSize: 18,
      color: themeColors?.text,
    },
    searchBarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
      paddingHorizontal: 8,
      margin: 26,
      backgroundColor: themeColors?.inputBackground,
    },
    searchBar: {
      flex: 1,
      height: 60,
      padding: 8,
      color: themeColors?.text,
    },
    movieCard: {
      flex: 1,
      margin: 4,
      backgroundColor: themeColors?.background || '#222',
      borderRadius: 8,
      overflow: 'hidden',
    },
    movieImage: {
      width: '100%',
      height: 150,
    },
    movieTitle: {
      padding: 8,
      textAlign: 'center',
      color: themeColors?.text,
    },
    loadingIndicator: {
      padding: 16,
    },
  });

export default getStyles;
