import { Button } from 'components';
import { useAuth, useNavigation } from 'hooks';
import React, { useEffect, useState } from 'react';
import { Keyboard, Pressable, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ThemeContext } from '../../App';
import { useFocusEffect } from '@react-navigation/native';
import styles from './LoginStyles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { navigation } = useNavigation();
  const { themeColors } = React.useContext(ThemeContext) || {};
  const { login } = useAuth();

  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLoginPress = async () => {
    setEmailError('');
    setPasswordError('');

    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    }

    if (isValid) {
      const isLoggedIn = await login(email, password);
      if (isLoggedIn) {
        navigation.navigate('HomeTab');
      } else {
        console.error('Invalid Credentials');
      }
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setEmail('');
      setPassword('');
      setEmailError('');
      setPasswordError('');
    }, []),
  );

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
          onChangeText={text => {
            setEmail(text);
            if (emailError && validateEmail(text)) {
              setEmailError('');
            }
          }}
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
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={text => {
            setPassword(text);
            if (passwordError && text.length >= 6) {
              setPasswordError('');
            }
          }}
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
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
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
