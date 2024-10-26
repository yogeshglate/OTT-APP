import { Button } from 'components'; // Using the reusable Button component
import { useAuth, useNavigation } from 'hooks';
import * as React from 'react';
import { Keyboard, Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ThemeContextType } from 'types';
import { ThemeContext } from '../../App';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const navigation = useNavigation();
  const context = React.useContext<ThemeContextType>(ThemeContext);

  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const { login } = useAuth();

  return (
    // Wrap the entire login form with Pressable to detect taps outside TextInput
    <Pressable
      style={[
        styles.login,
        { backgroundColor: context?.themeColors.background },
      ]}
      onPress={Keyboard.dismiss}>
      <Text style={[styles.loginTitle, { color: context?.themeColors.text }]}>
        Login
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          left={
            <TextInput.Icon
              icon="email"
              size={30}
              color={context?.themeColors.primary}
            />
          } // Custom icon size and color
          style={[
            styles.input,
            { backgroundColor: context?.themeColors.background },
          ]} // Adjust background color for light/dark mode
          keyboardType="email-address"
          outlineColor={context?.themeColors.outlineColor} // Outline color for light/dark mode
          activeOutlineColor={context?.themeColors.primary} // Active outline color for light/dark mode
          textColor={context?.themeColors.text}
          theme={{
            colors: {
              text: context?.themeColors.text, // Text color
              placeholder: context?.themeColors.placeholder, // Placeholder color
            },
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={!passwordVisible}
          left={
            <TextInput.Icon
              icon="lock"
              size={30}
              color={context?.themeColors.primary}
            />
          } // Lock icon with custom size and color
          right={
            <TextInput.Icon
              icon={passwordVisible ? 'eye-off' : 'eye'}
              size={30}
              color={context?.themeColors.text}
              onPress={() => setPasswordVisible(!passwordVisible)} // Toggle visibility
            />
          }
          style={[
            styles.input,
            { backgroundColor: context?.themeColors.background },
          ]}
          outlineColor={context?.themeColors.outlineColor}
          activeOutlineColor={context?.themeColors.primary}
          textColor={context?.themeColors.text}
          theme={{
            colors: {
              text: context?.themeColors.text,
              placeholder: context?.themeColors.placeholder,
            },
          }}
        />
      </View>

      <Button
        text="Login"
        onPress={async () => {
          console.log('Login pressed');
          const isLoggedIn = await login(
            'yogeshlate@gmail.com',
            'P@ssw0rd@123',
          );
          if (isLoggedIn) {
            navigation.navigate('HomeTab');
          } else {
            console.error('Invalid Credentials');
          }
        }}
        type="contained"
      />

      <View style={styles.signupContainer}>
        <Text style={[styles.signupText, { color: context?.themeColors.text }]}>
          Haven’t made an account?
        </Text>
        <Pressable onPress={handleSignUpPress}>
          <Text
            style={[
              styles.signupLink,
              { color: context?.themeColors.signupLink },
            ]}>
            Sign Up
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

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
    backgroundColor: '#121212', // This will be dynamically overridden based on mode
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

export default Login;
