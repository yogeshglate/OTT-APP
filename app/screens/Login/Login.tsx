import { Button } from 'components'; // Using the reusable Button component
import { useAuth, useNavigation } from 'hooks';
import React, { useState } from 'react';
import { Keyboard, Pressable, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ThemeContext } from '../../App';
import styles from './LoginStyles'; // Adjust the import path as necessary

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigation = useNavigation();
  const { themeColors } = React.useContext(ThemeContext) || {};
  const { login } = useAuth();

  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const handleLoginPress = async () => {
    console.log('Login pressed');
    const isLoggedIn = await login(email, password);
    if (isLoggedIn) {
      navigation.navigate('HomeTab');
    } else {
      console.error('Invalid Credentials');
    }
  };

  return (
    <Pressable
      style={[styles.login, { backgroundColor: themeColors?.background }]}
      onPress={Keyboard.dismiss}>
      <Text style={[styles.loginTitle, { color: themeColors?.text }]}>
        Login
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={setEmail}
          left={
            <TextInput.Icon
              icon="email"
              size={30}
              color={themeColors?.primary}
            />
          }
          style={[styles.input, { backgroundColor: themeColors?.background }]}
          outlineColor={themeColors?.outlineColor}
          activeOutlineColor={themeColors?.primary}
          textColor={themeColors?.text}
          theme={{
            colors: {
              text: themeColors?.text,
              placeholder: themeColors?.placeholder,
            },
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
          left={
            <TextInput.Icon
              icon="lock"
              size={30}
              color={themeColors?.primary}
            />
          }
          right={
            <TextInput.Icon
              icon={passwordVisible ? 'eye-off' : 'eye'}
              size={30}
              color={themeColors?.text}
              onPress={() => setPasswordVisible(prev => !prev)}
            />
          }
          style={[styles.input, { backgroundColor: themeColors?.background }]}
          outlineColor={themeColors?.outlineColor}
          activeOutlineColor={themeColors?.primary}
          textColor={themeColors?.text}
          theme={{
            colors: {
              text: themeColors?.text,
              placeholder: themeColors?.placeholder,
            },
          }}
        />
      </View>

      <Button text="Login" onPress={handleLoginPress} type="contained" />

      <View style={styles.signupContainer}>
        <Text style={[styles.signupText, { color: themeColors?.text }]}>
          Haven’t made an account?
        </Text>
        <Pressable onPress={handleSignUpPress}>
          <Text style={[styles.signupLink, { color: themeColors?.signupLink }]}>
            Sign Up
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default Login;
