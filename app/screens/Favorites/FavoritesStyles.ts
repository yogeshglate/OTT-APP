import { StyleSheet } from 'react-native';
import { ThemeColors } from 'types';

const getStyles = (themeColors?: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: themeColors?.background || '#121212',
    },
    listContainer: {
      paddingHorizontal: 16,
      paddingVertical: 10,
    },
    movieCard: {
      flexDirection: 'row',
      backgroundColor: themeColors?.inputBackground || '#1f1f1f',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
    },
    posterIcon: {
      width: 60,
      height: 80,
      borderRadius: 4,
    },
    movieInfoContainer: {
      flex: 1,
      marginLeft: 10,
    },
    movieTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    movieTitle: {
      fontSize: 16,
      fontWeight: '700',
      fontFamily: 'Inter-Bold',
      color: themeColors?.text,
    },
    movieYear: {
      fontSize: 14,
      color: themeColors?.secondaryText || '#969696',
      fontFamily: 'Inter-Medium',
      fontWeight: '500',
    },
    badgeWrapper: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 5,
    },
    badge: {
      backgroundColor: '#eaffe7',
      borderRadius: 4,
      borderColor: '#7bbb71',
      borderWidth: 1,
      paddingVertical: 2,
      paddingHorizontal: 8,
    },
    badgeText: {
      color: '#7bbb71',
      fontSize: 12,
      textAlign: 'center',
    },
    appBar: {
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: themeColors?.border || 'rgba(0, 0, 0, 0.25)',
      borderBottomWidth: 4,
      width: '100%',
      backgroundColor: themeColors?.background,
    },
    title: {
      fontWeight: '700',
      fontFamily: 'Inter-Bold',
      fontSize: 18,
      color: themeColors?.text,
    },
    emptyListContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    emptyListText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: themeColors?.text,
    },
    emptyListSubText: {
      fontSize: 14,
      textAlign: 'center',
      color: themeColors?.text,
    },
  });

export default getStyles;
