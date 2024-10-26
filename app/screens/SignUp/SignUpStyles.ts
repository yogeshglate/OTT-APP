import { StyleSheet } from 'react-native';

const SignUpStyles = (themeColors: any) => {
  return StyleSheet.create({
    signup: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: themeColors.background, // Use theme background
    },
    signupTitle: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      marginBottom: 30,
      color: themeColors.secondary,
    },
    inputContainer: {
      width: '100%',
      marginBottom: 20,
    },
    input: {
      backgroundColor: 'transparent', // Dynamically overridden based on mode
    },
    loginContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    loginText: {
      fontSize: 13,
      fontFamily: 'Inter-Regular',
      color: themeColors.secondary,
    },
    loginLink: {
      fontSize: 13,
      fontFamily: 'Inter-Regular',
      marginLeft: 5,
      textDecorationLine: 'none',
      color: themeColors.signupLink,
    },
  });
};

export default SignUpStyles;
