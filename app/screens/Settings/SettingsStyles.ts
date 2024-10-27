import { StyleSheet } from 'react-native';
import { fontSize, scale, verticalScale } from 'services';
import { ThemeColors } from 'types';

const getStyles = (themeColors?: ThemeColors) =>
  StyleSheet.create({
    settings: {
      flex: 1,
      paddingTop: verticalScale(20),
      backgroundColor: themeColors?.background,
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
    profileData: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: verticalScale(20),
    },
    worlderParent: {
      justifyContent: 'center',
      marginLeft: scale(10),
    },
    worlder: {
      fontFamily: 'Inter-SemiBold',
      fontWeight: '600',
      fontSize: 18,
      color: themeColors?.text,
    },
    worlderEmail: {
      fontFamily: 'Inter-Regular',
      fontSize: 14,
      color: themeColors?.placeholder,
    },
    settingsMenu: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: verticalScale(10),
      paddingHorizontal: scale(20),
    },
    icon: {
      marginRight: scale(10),
    },
    account: {
      fontSize: fontSize.medium,
      fontFamily: 'Inter-SemiBold',
      fontWeight: '600',
      color: themeColors?.text,
    },
  });

export default getStyles;
