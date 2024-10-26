import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  signupTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'transparent', // This will be dynamically overridden based on mode
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
  },
  loginLink: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    marginLeft: 5,
    textDecorationLine: 'none',
  },
});

export default styles;
