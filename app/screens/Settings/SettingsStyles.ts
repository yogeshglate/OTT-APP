import { StyleSheet } from 'react-native';
import { ThemeColors } from 'types';

const getStyles = (themeColors?: ThemeColors) =>
  StyleSheet.create({
    settings: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: themeColors?.background,
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
    profileData: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
    },
    worlderParent: {
      justifyContent: 'center',
      marginLeft: 10,
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
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    icon: {
      marginRight: 10,
    },
    account: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      fontWeight: '600',
      color: themeColors?.text,
    },
  });

export default getStyles;
