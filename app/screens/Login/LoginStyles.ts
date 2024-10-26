import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

import { ThemeColors } from 'types';

const getStyles = (themeColors?: ThemeColors) =>
  StyleSheet.create({
    login: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: themeColors?.background,
    },
    loginTitle: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      marginBottom: 30,
    },
    inputContainer: {
      width: '100%',
      marginBottom: 20,
    },
    input: {
      backgroundColor: themeColors?.background,
    },
    signupContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    signupText: {
      fontSize: 13,
      fontFamily: 'Inter-Regular',
      color: themeColors?.text,
    },
    signupLink: {
      fontSize: 13,
      fontFamily: 'Inter-Regular',
      marginLeft: 5,
      textDecorationLine: 'none',
      color: themeColors?.signupLink,
    },
    errorText: {
      color: themeColors?.errorColor,
      fontSize: 14,
      marginTop: 5,
      textAlign: 'left',
    },
  });

export default getStyles;
