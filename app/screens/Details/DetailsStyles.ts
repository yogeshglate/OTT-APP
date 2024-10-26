import { StyleSheet } from 'react-native';
import { ThemeColors } from 'types';

export const getStyles = (themeColors?: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: themeColors?.background || '#121212',
    },
    appBar: {
      height: 56,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      borderBottomColor: themeColors?.border || 'rgba(0, 0, 0, 0.25)',
      borderBottomWidth: 4,
      width: '100%',
      backgroundColor: themeColors?.background,
    },
    title: {
      flex: 1,
      textAlign: 'center',
      fontWeight: '700',
      fontFamily: 'Inter-Bold',
      fontSize: 18,
      color: themeColors?.text,
    },
    bannerImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    detailsContainer: {
      padding: 15,
      backgroundColor: themeColors?.background || '#121212',
    },
    showTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: 'Inter-Bold',
      color: themeColors?.text || '#ffffff',
      marginBottom: 5,
    },
    showInfo: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      fontWeight: '500',
      color: themeColors?.secondaryText || '#969696',
      marginBottom: 10,
    },
    showDescription: {
      fontSize: 14,
      color: themeColors?.text || '#ddd',
      fontFamily: 'Inter-Regular',
      marginBottom: 10,
    },
    showAdditionalInfo: {
      fontSize: 14,
      color: themeColors?.secondaryText || '#aaa',
      fontFamily: 'Inter-Medium',
      marginBottom: 5,
    },
    boldText: {
      fontWeight: 'bold',
      fontFamily: 'Inter-Bold',
    },
  });
