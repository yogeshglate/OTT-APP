import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Keyboard,
  useColorScheme,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'components'; // Using the reusable Button component
import { useAuth, useNavigation } from 'hooks';
import { ThemeContextType } from 'types';
import { ThemeContext } from '../../App';

const SignUp = () => {
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  React.useState(false);

  const navigation = useNavigation();
  const { register } = useAuth();
  const context = React.useContext<ThemeContextType>(ThemeContext);

  const handleSignInPress = () => {
    navigation.navigate('Login');
  };

  return (
    // Wrap the entire signup form with Pressable to detect taps outside TextInput
    <Pressable
      style={[
        styles.signup,
        { backgroundColor: context?.themeColors.background },
      ]}
      onPress={Keyboard.dismiss}>
      <Text
        style={[styles.signupTitle, { color: context?.themeColors.secondary }]}>
        Sign Up
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label={'Email'}
          value={email}
          onChangeText={text => setEmail(text)}
          left={
            <TextInput.Icon
              icon="email"
              size={30}
              color={context?.themeColors.primary}
            />
          }
          style={[
            styles.input,
            { backgroundColor: context?.themeColors.inputBackground },
          ]}
          keyboardType="email-address"
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
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Username"
          value={username}
          onChangeText={text => setUsername(text)}
          left={
            <TextInput.Icon
              icon="account"
              size={30}
              color={context?.themeColors.primary}
            />
          }
          style={[
            styles.input,
            { backgroundColor: context?.themeColors.inputBackground },
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
          }
          right={
            <TextInput.Icon
              icon={passwordVisible ? 'eye-off' : 'eye'}
              size={30}
              color={context?.themeColors.secondary}
              onPress={() => setPasswordVisible(!passwordVisible)} // Toggle visibility
            />
          }
          style={[
            styles.input,
            { backgroundColor: context?.themeColors.inputBackground },
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
        text="Sign Up"
        onPress={() => {
          register('yogeshlate@gmail.com', 'P@ssw0rd@123')
            .then(() => {
              navigation.navigate('Login');
              console.warn('User Created Successfully');
            })
            .catch(() => console.error('Invalid Credentials'));
        }}
        type="contained"
      />
      <View style={styles.loginContainer}>
        <Text
          style={[styles.loginText, { color: context?.themeColors.secondary }]}>
          Already have an account?
        </Text>
        <Pressable onPress={handleSignInPress}>
          <Text
            style={[
              styles.loginLink,
              { color: context?.themeColors.signupLink },
            ]}>
            Login
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

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

export default SignUp;
