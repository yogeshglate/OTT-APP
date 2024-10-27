import { StyleSheet } from 'react-native';
import { fontSize, moderateScale, scale, verticalScale } from 'services';
import { ThemeColors } from 'types';

const getStyles = (themeColors?: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: verticalScale(20),
      backgroundColor: themeColors?.background || '#121212',
    },
    listContainer: {
      paddingHorizontal: scale(16),
      paddingVertical: verticalScale(10),
    },
    movieCard: {
      flexDirection: 'row',
      backgroundColor: themeColors?.inputBackground || '#1f1f1f',
      borderRadius: moderateScale(8),
      padding: moderateScale(10),
      marginBottom: verticalScale(10),
    },
    posterIcon: {
      width: scale(60),
      height: verticalScale(80),
      borderRadius: moderateScale(4),
    },
    movieInfoContainer: {
      flex: 1,
      marginLeft: scale(10),
    },
    movieTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    movieTitle: {
      fontSize: fontSize.medium,
      fontWeight: '700',
      fontFamily: 'Inter-Bold',
      color: themeColors?.text,
    },
    movieYear: {
      fontSize: fontSize.medium,
      color: themeColors?.secondaryText || '#969696',
      fontFamily: 'Inter-Medium',
      fontWeight: '500',
    },
    badgeWrapper: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: verticalScale(5),
    },
    badge: {
      backgroundColor: '#eaffe7',
      borderRadius: moderateScale(4),
      borderColor: '#7bbb71',
      borderWidth: 1,
      paddingVertical: 2,
      paddingHorizontal: scale(8),
    },
    badgeText: {
      color: '#7bbb71',
      fontSize: fontSize.small,
      textAlign: 'center',
    },
    appBar: {
      height: verticalScale(56),
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: themeColors?.border || 'rgba(0, 0, 0, 0.25)',
      borderBottomWidth: verticalScale(4),
      width: '100%',
      backgroundColor: themeColors?.background,
    },
    title: {
      fontWeight: '700',
      fontFamily: 'Inter-Bold',
      fontSize: fontSize.largeVariant,
      color: themeColors?.text,
    },
    emptyListContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: moderateScale(20),
    },
    emptyListText: {
      fontSize: fontSize.largeVariant,
      fontWeight: 'bold',
      textAlign: 'center',
      color: themeColors?.text,
    },
    emptyListSubText: {
      fontSize: fontSize.smallVariant,
      textAlign: 'center',
      color: themeColors?.text,
    },
  });

export default getStyles;
