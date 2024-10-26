import { StyleSheet } from 'react-native';

const styles = (themeColors: any) =>
  StyleSheet.create({
    login: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: themeColors.background, // Use themeColors from props
    },
    loginTitle: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      marginBottom: 30,
      color: themeColors.text, // Use themeColors from props
    },
    inputContainer: {
      width: '100%',
      marginBottom: 20,
    },
    input: {
      backgroundColor: themeColors.background, // Use themeColors from props
    },
    signupContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    signupText: {
      fontSize: 13,
      fontFamily: 'Inter-Regular',
      color: themeColors.text, // Use themeColors from props
    },
    signupLink: {
      fontSize: 13,
      fontFamily: 'Inter-Regular',
      marginLeft: 5,
      textDecorationLine: 'none',
      color: themeColors.signupLink, // Use themeColors from props
    },
  });

export default styles;
