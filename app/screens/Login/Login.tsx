import { ThemeContext } from 'app';
import { Button } from 'components';
import { AppIcons } from 'constant'; // Import AppConstants
import { useAuth, useNavigation } from 'hooks';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Keyboard, Pressable, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  showError,
  showSuccess,
  validateEmail,
  validatePassword,
} from 'services';
import getStyles from './LoginStyles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { navigation, useFocusEffect } = useNavigation();
  const { themeColors } = React.useContext(ThemeContext) || {};
  const styles = getStyles(themeColors);
  const { login } = useAuth();
  const { t } = useTranslation();

  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const handleLoginPress = async () => {
    setEmailError('');
    setPasswordError('');

    let isValid = true;

    if (!email) {
      setEmailError(t('EMAIL_REQUIRED_ERROR'));
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError(t('EMAIL_INVALID_ERROR'));
      isValid = false;
    }

    if (!password) {
      setPasswordError(t('PASSWORD_REQUIRED_ERROR'));
      isValid = false;
    } else if (validatePassword(password)) {
      setPasswordError(t('PASSWORD_LENGTH_ERROR'));
      isValid = false;
    }

    if (isValid) {
      const isLoggedIn = await login(email, password);
      if (isLoggedIn) {
        navigation.replace('HomeTab');
        showSuccess(t('LOGIN_SUCCESS_MESSAGE'));
      } else {
        showError(t('LOGIN_FAILURE_MESSAGE'));
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
    <Pressable style={styles.login} onPress={Keyboard.dismiss}>
      <Text style={[styles.loginTitle, { color: themeColors?.text }]}>
        {t('LOGIN_TITLE')}
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label={t('EMAIL_LABEL')}
          value={email}
          onChangeText={text => {
            setEmail(text);
            if (emailError && validateEmail(text)) {
              setEmailError('');
            }
          }}
          left={
            <TextInput.Icon
              icon={AppIcons.Email}
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
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label={t('PASSWORD_LABEL')}
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
              color={themeColors?.text}
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
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
      </View>

      <Button
        text={t('LOGIN_TITLE')}
        onPress={handleLoginPress}
        type="contained"
      />

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>{t('SIGNUP_PROMPT')}</Text>
        <Pressable onPress={handleSignUpPress}>
          <Text style={styles.signupLink}>{t('SIGNUP_LINK_TEXT')}</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default Login;
