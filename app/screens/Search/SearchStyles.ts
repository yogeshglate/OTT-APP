import { StyleSheet } from 'react-native';
import { fontSize, moderateScale, scale, verticalScale } from 'services';
import { ThemeColors } from 'types';

const getStyles = (themeColors?: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: moderateScale(16),
      backgroundColor: themeColors?.background,
    },
    appBar: {
      height: verticalScale(56),
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: themeColors?.border || 'rgba(0, 0, 0, 0.25)',
      borderBottomWidth: verticalScale(4),
      width: '100%',
    },
    title: {
      fontWeight: '700',
      fontFamily: 'Inter-Bold',
      fontSize: fontSize.largeVariant,
      color: themeColors?.text,
    },
    searchBarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: moderateScale(8),
      paddingHorizontal: scale(8),
      margin: moderateScale(26),
      backgroundColor: themeColors?.inputBackground,
    },
    searchBar: {
      flex: 1,
      height: verticalScale(60),
      padding: moderateScale(8),
      color: themeColors?.text,
    },
    movieCard: {
      flex: 1,
      margin: moderateScale(4),
      backgroundColor: themeColors?.background || '#222',
      borderRadius: moderateScale(8),
      overflow: 'hidden',
    },
    movieImage: {
      width: '100%',
      height: verticalScale(150),
    },
    movieTitle: {
      padding: moderateScale(8),
      textAlign: 'center',
      color: themeColors?.text,
    },
    loadingIndicator: {
      padding: moderateScale(16),
    },
  });

export default getStyles;
