import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
    // Background color will be dynamically set in the component
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
  },
  signupLink: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    marginLeft: 5,
    textDecorationLine: 'none',
  },
});

export default styles;
