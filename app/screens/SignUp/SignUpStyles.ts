import { StyleSheet } from 'react-native';
import { ThemeColors } from 'types';

const getStyles = (themeColors?: ThemeColors) =>
  StyleSheet.create({
    signup: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: themeColors?.background,
    },
    signupTitle: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      marginBottom: 30,
      color: themeColors?.secondary,
    },
    inputContainer: {
      width: '100%',
      marginBottom: 20,
    },
    input: {
      backgroundColor: themeColors?.background,
    },
    loginContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    loginText: {
      fontSize: 13,
      fontFamily: 'Inter-Regular',
      color: themeColors?.secondary,
    },
    loginLink: {
      fontSize: 13,
      fontFamily: 'Inter-Regular',
      marginLeft: 5,
      color: themeColors?.signupLink,
      textDecorationLine: 'none',
    },
    errorText: {
      color: 'red',
      fontSize: 14,
      marginTop: 5,
      textAlign: 'left',
    },
  });

export default getStyles;
