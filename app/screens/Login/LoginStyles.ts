import { StyleSheet } from 'react-native';
import { fontSize, moderateScale, scale, verticalScale } from 'services';
import { ThemeColors } from 'types';

const getStyles = (themeColors?: ThemeColors) =>
  StyleSheet.create({
    login: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: moderateScale(20),
      backgroundColor: themeColors?.background,
    },
    loginTitle: {
      fontSize: fontSize.xLarge,
      fontFamily: 'Inter-Bold',
      marginBottom: verticalScale(30),
    },
    inputContainer: {
      width: '100%',
      marginBottom: verticalScale(20),
    },
    input: {
      backgroundColor: themeColors?.background,
    },
    signupContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: verticalScale(20),
    },
    signupText: {
      fontSize: fontSize.small,
      fontFamily: 'Inter-Regular',
      color: themeColors?.text,
    },
    signupLink: {
      fontSize: fontSize.small,
      fontFamily: 'Inter-Regular',
      marginLeft: scale(5),
      textDecorationLine: 'none',
      color: themeColors?.signupLink,
    },
    errorText: {
      color: themeColors?.errorColor,
      fontSize: fontSize.smallVariant,
      marginTop: verticalScale(5),
      textAlign: 'left',
    },
  });

export default getStyles;
