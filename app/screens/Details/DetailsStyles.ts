import { StyleSheet } from 'react-native';
import { fontSize, moderateScale, scale, verticalScale } from 'services';
import { ThemeColors } from 'types';

export const getStyles = (themeColors?: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: verticalScale(20),
      backgroundColor: themeColors?.background || '#121212',
    },
    appBar: {
      height: verticalScale(56),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: scale(16),
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
      fontSize: fontSize.largeVariant,
      color: themeColors?.text,
    },
    bannerImage: {
      width: '100%',
      height: verticalScale(200),
      resizeMode: 'cover',
    },
    detailsContainer: {
      padding: moderateScale(15),
      backgroundColor: themeColors?.background || '#121212',
    },
    showTitle: {
      fontSize: fontSize.xLarge,
      fontWeight: 'bold',
      fontFamily: 'Inter-Bold',
      color: themeColors?.text || '#ffffff',
      marginBottom: verticalScale(5),
    },
    showInfo: {
      fontSize: fontSize.smallVariant,
      fontFamily: 'Inter-Medium',
      fontWeight: '500',
      color: themeColors?.secondaryText || '#969696',
      marginBottom: verticalScale(10),
    },
    showDescription: {
      fontSize: fontSize.smallVariant,
      color: themeColors?.text || '#ddd',
      fontFamily: 'Inter-Regular',
      marginBottom: verticalScale(10),
    },
    showAdditionalInfo: {
      fontSize: fontSize.smallVariant,
      color: themeColors?.secondaryText || '#aaa',
      fontFamily: 'Inter-Medium',
      marginBottom: verticalScale(5),
    },
    boldText: {
      fontWeight: 'bold',
      fontFamily: 'Inter-Bold',
    },
  });
