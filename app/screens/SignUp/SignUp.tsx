import { useFocusEffect } from '@react-navigation/native';
import { ThemeContext } from 'app';
import { Button, InputField } from 'components';
import { AppIcons } from 'constant';
import { useAuth, useNavigation } from 'hooks';
import React, { useCallback, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Keyboard, Pressable, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  showError,
  showSuccess,
  validateEmail,
  validatePassword,
} from 'services';
import { SignUpCredentials } from 'types';
import getStyles from './SignUpStyles';

const SignUp: React.FC = () => {
  const [credentials, setCredentials] = useState<SignUpCredentials>({
    email: '',
    username: '',
    password: '',
  });
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [errors, setErrors] = useState<SignUpCredentials>({
    email: '',
    username: '',
    password: '',
  });

  const { navigation } = useNavigation();
  const { register } = useAuth();
  const { themeColors } = useContext(ThemeContext) || {};
  const styles = getStyles(themeColors);
  const { t } = useTranslation();

  const handleSignInPress = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = async () => {
    setErrors({ email: '', username: '', password: '' });
    let isValid = true;

    if (!credentials.email) {
      setErrors(prev => ({ ...prev, email: t('EMAIL_REQUIRED_ERROR') }));
      isValid = false;
    } else if (!validateEmail(credentials.email)) {
      setErrors(prev => ({ ...prev, email: t('EMAIL_INVALID_ERROR') }));
      isValid = false;
    }

    if (!credentials.username) {
      setErrors(prev => ({ ...prev, username: t('USERNAME_REQUIRED_ERROR') }));
      isValid = false;
    }

    if (!credentials.password) {
      setErrors(prev => ({ ...prev, password: t('PASSWORD_REQUIRED_ERROR') }));
      isValid = false;
    } else if (!validatePassword(credentials.password)) {
      setErrors(prev => ({ ...prev, password: t('PASSWORD_LENGTH_ERROR') }));
      isValid = false;
    }

    if (isValid) {
      try {
        await register(credentials);
        navigation.navigate('Login');
        showSuccess(t('SIGNUP_SUCCESS'));
      } catch (error) {
        showError(t('REGISTRATION_FAILED_ERROR'));
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      setCredentials({ email: '', username: '', password: '' });
      setErrors({ email: '', username: '', password: '' });
    }, []),
  );

  return (
    <Pressable style={styles.signup} onPress={Keyboard.dismiss}>
      <Text style={styles.signupTitle}>{t('SIGNUP_LINK_TEXT')}</Text>

      <View style={styles.inputContainer}>
        <InputField
          label={t('EMAIL_LABEL')}
          icon={AppIcons.Email}
          value={credentials.email}
          onChangeText={text => {
            setCredentials(prev => ({ ...prev, email: text }));
            if (errors.email && validateEmail(text)) {
              setErrors(prev => ({ ...prev, email: '' }));
            }
          }}
          themeColors={themeColors}
          keyboardType="email-address"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <InputField
          label={t('USERNAME_LABEL')}
          icon={AppIcons.UserName}
          value={credentials.username}
          onChangeText={text => {
            setCredentials(prev => ({ ...prev, username: text }));
            if (errors.username && text.length > 0) {
              setErrors(prev => ({ ...prev, username: '' }));
            }
          }}
          themeColors={themeColors}
        />
        {errors.username && (
          <Text style={styles.errorText}>{errors.username}</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <InputField
          label={t('PASSWORD_LABEL')}
          icon={AppIcons.Password}
          value={credentials.password}
          onChangeText={text => {
            setCredentials(prev => ({ ...prev, password: text }));
            if (errors.password && text.length >= 6) {
              setErrors(prev => ({ ...prev, password: '' }));
            }
          }}
          secureTextEntry={!passwordVisible}
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
          themeColors={themeColors}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
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
