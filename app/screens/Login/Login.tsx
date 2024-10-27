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
import { Credentials } from 'types';
import getStyles from './LoginStyles';

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
  });
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [errors, setErrors] = useState<Credentials>({
    email: '',
    password: '',
  });

  const { navigation } = useNavigation();
  const { themeColors } = useContext(ThemeContext) || {};
  const styles = getStyles(themeColors);
  const { login } = useAuth();
  const { t } = useTranslation();

  const validateInputs = (): boolean => {
    const newErrors: Credentials = { email: '', password: '' };
    let isValid = true;

    if (!credentials.email) {
      newErrors.email = t('EMAIL_REQUIRED_ERROR');
      isValid = false;
    } else if (!validateEmail(credentials.email)) {
      newErrors.email = t('EMAIL_INVALID_ERROR');
      isValid = false;
    }

    if (!credentials.password) {
      newErrors.password = t('PASSWORD_REQUIRED_ERROR');
      isValid = false;
    } else if (!validatePassword(credentials.password)) {
      newErrors.password = t('PASSWORD_LENGTH_ERROR');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = async () => {
    setErrors({ email: '', password: '' }); // Clear previous errors
    if (validateInputs()) {
      const isLoggedIn = await login(credentials.email, credentials.password);
      if (isLoggedIn) {
        navigation.replace('HomeTab');
        showSuccess(t('LOGIN_SUCCESS_MESSAGE'));
      } else {
        showError(t('LOGIN_FAILURE_MESSAGE'));
      }
    }
  };

  const handleSignUpPress = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      setCredentials({ email: '', password: '' }); // Reset fields on focus
      setErrors({ email: '', password: '' }); // Clear errors on focus
    }, []),
  );

  return (
    <Pressable style={styles.login} onPress={Keyboard.dismiss}>
      <Text style={styles.loginTitle}>{t('LOGIN_TITLE')}</Text>

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
        />
        {errors.email && (
          <Text style={{ color: 'red', marginTop: 5 }}>{errors.email}</Text>
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
          <Text style={{ color: 'red', marginTop: 5 }}>{errors.password}</Text>
        )}
      </View>

      <Button text={t('LOGIN_TITLE')} onPress={handleLogin} type="contained" />

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
