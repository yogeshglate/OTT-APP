import { Button } from 'components';
import { useAuth, useNavigation } from 'hooks';
import React from 'react';
import { Keyboard, Pressable, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ThemeContext } from '../../App';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import styles from './SignUpStyles';

const SignUp = () => {
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const [emailError, setEmailError] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const { navigation } = useNavigation();
  const { register } = useAuth();
  const { themeColors } = React.useContext(ThemeContext) || {};

  const handleSignInPress = () => {
    navigation.navigate('Login');
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = async () => {
    setEmailError('');
    setUsernameError('');
    setPasswordError('');

    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    }

    if (!username) {
      setUsernameError('Username is required');
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
      const newUser = { email, password, username };
      try {
        await register(newUser);
        navigation.navigate('Login');
        console.warn('User Created Successfully');
      } catch (error) {
        console.error('Invalid Credentials');
      }
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setEmail('');
      setUsername('');
      setPassword('');
      setEmailError('');
      setUsernameError('');
      setPasswordError('');
    }, []),
  );

  return (
    <Pressable
      style={[styles.signup, { backgroundColor: themeColors?.background }]}
      onPress={Keyboard.dismiss}>
      <Text style={[styles.signupTitle, { color: themeColors?.secondary }]}>
        Sign Up
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
          style={[
            styles.input,
            { backgroundColor: themeColors?.inputBackground },
          ]}
          keyboardType="email-address"
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
          label="Username"
          value={username}
          onChangeText={text => {
            setUsername(text);
            if (usernameError && text.length > 0) {
              setUsernameError('');
            }
          }}
          left={
            <TextInput.Icon
              icon="account"
              size={30}
              color={themeColors?.primary}
            />
          }
          style={[
            styles.input,
            { backgroundColor: themeColors?.inputBackground },
          ]}
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
        {usernameError ? (
          <Text style={styles.errorText}>{usernameError}</Text>
        ) : null}
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
              color={themeColors?.secondary}
              onPress={() => setPasswordVisible(prev => !prev)}
            />
          }
          style={[
            styles.input,
            { backgroundColor: themeColors?.inputBackground },
          ]}
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

      <Button text="Sign Up" onPress={handleSignUp} type="contained" />

      <View style={styles.loginContainer}>
        <Text style={[styles.loginText, { color: themeColors?.secondary }]}>
          Already have an account?
        </Text>
        <Pressable onPress={handleSignInPress}>
          <Text style={[styles.loginLink, { color: themeColors?.signupLink }]}>
            Login
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default SignUp;
