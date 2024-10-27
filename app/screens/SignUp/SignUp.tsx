import { useFocusEffect } from '@react-navigation/native';
import { ThemeContext } from 'app';
import { Button } from 'components';
import { AppIcons } from 'constant';
import { useAuth, useNavigation } from 'hooks';
import React, { useCallback, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Keyboard, Pressable, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import getStyles from './SignUpStyles';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { navigation } = useNavigation();
  const { register } = useAuth();
  const { themeColors } = useContext(ThemeContext) || {};
  const styles = getStyles(themeColors);
  const { t } = useTranslation();

  const handleSignInPress = () => {
    navigation.navigate('Login');
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignUp = async () => {
    setEmailError('');
    setUsernameError('');
    setPasswordError('');

    let isValid = true;

    if (!email) {
      setEmailError(t('EMAIL_REQUIRED_ERROR'));
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError(t('EMAIL_INVALID_ERROR'));
      isValid = false;
    }

    if (!username) {
      setUsernameError(t('USERNAME_REQUIRED_ERROR'));
      isValid = false;
    }

    if (!password) {
      setPasswordError(t('PASSWORD_REQUIRED_ERROR'));
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError(t('PASSWORD_LENGTH_ERROR'));
      isValid = false;
    }

    if (isValid) {
      try {
        await register({ email, username, password });
        navigation.navigate('Login');
        console.warn(t('SIGNUP_SUCCESS'));
      } catch (error) {
        console.error(t('REGISTRATION_FAILED_ERROR'));
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      setEmail('');
      setUsername('');
      setPassword('');
      setEmailError('');
      setUsernameError('');
      setPasswordError('');
    }, []),
  );

  return (
    <Pressable style={styles.signup} onPress={Keyboard.dismiss}>
      <Text style={styles.signupTitle}>{t('SIGNUP_LINK_TEXT')}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label={t('EMAIL_LABEL')}
          value={email}
          onChangeText={text => {
            setEmail(text);
            if (emailError && validateEmail(text)) setEmailError('');
          }}
          left={
            <TextInput.Icon
              icon={AppIcons.Email}
              size={30}
              color={themeColors?.primary}
            />
          }
          style={styles.input}
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
        {emailError && <Text style={styles.errorText}>{emailError}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label={t('USERNAME_LABEL')}
          value={username}
          onChangeText={text => {
            setUsername(text);
            if (usernameError && text.length > 0) setUsernameError('');
          }}
          left={
            <TextInput.Icon
              icon={AppIcons.UserName}
              size={30}
              color={themeColors?.primary}
            />
          }
          style={styles.input}
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
        {usernameError && <Text style={styles.errorText}>{usernameError}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={text => {
            setPassword(text);
            if (passwordError && text.length >= 6) setPasswordError('');
          }}
          secureTextEntry={!passwordVisible}
          left={
            <TextInput.Icon
              icon={AppIcons.Password}
              size={30}
              color={themeColors?.primary}
            />
          }
          right={
            <TextInput.Icon
              icon={
                passwordVisible
                  ? AppIcons.PasswordHidden
                  : AppIcons.PasswordVisible
              }
              size={30}
              color={themeColors?.secondary}
              onPress={() => setPasswordVisible(prev => !prev)}
            />
          }
          style={styles.input}
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
        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
      </View>

      <Button
        text={t('SIGNUP_LINK_TEXT')}
        onPress={handleSignUp}
        type="contained"
      />

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>{t('LOGIN_PROMPT')}</Text>
        <Pressable onPress={handleSignInPress}>
          <Text style={styles.loginLink}>{t('LOGIN_TITLE')}</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default SignUp;
