import { StyleSheet } from 'react-native';
import { fontSize, moderateScale, scale, verticalScale } from 'services';
import { ThemeColors } from 'types';

const getStyles = (themeColors?: ThemeColors) =>
  StyleSheet.create({
    signup: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: moderateScale(20),
      backgroundColor: themeColors?.background,
    },
    signupTitle: {
      fontSize: fontSize.xLarge,
      fontFamily: 'Inter-Bold',
      marginBottom: verticalScale(30),
      color: themeColors?.secondary,
    },
    inputContainer: {
      width: '100%',
      marginBottom: verticalScale(20),
    },
    input: {
      backgroundColor: themeColors?.background,
    },
    loginContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: verticalScale(20),
    },
    loginText: {
      fontSize: fontSize.small,
      fontFamily: 'Inter-Regular',
      color: themeColors?.secondary,
    },
    loginLink: {
      fontSize: fontSize.small,
      fontFamily: 'Inter-Regular',
      marginLeft: scale(5),
      color: themeColors?.signupLink,
      textDecorationLine: 'none',
    },
    errorText: {
      color: 'red',
      fontSize: fontSize.smallVariant,
      marginTop: verticalScale(5),
      textAlign: 'left',
    },
  });

export default getStyles;
