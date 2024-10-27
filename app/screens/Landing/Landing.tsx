import { Button } from 'components';
import { useNavigation } from 'hooks';
import React from 'react';
import { Image, View } from 'react-native';
import styles from './LandingStyles';
import { useTranslation } from 'react-i18next';

const Landing = () => {
  const { navigation } = useNavigation();
  const { t } = useTranslation();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.landing}>
      <Image
        style={styles.bannerIcon}
        resizeMode="cover"
        source={require('assets/landing.png')}
      />
      <View style={styles.buttonContainer}>
        <Button
          text={t('LOGIN_TITLE')}
          onPress={navigateToLogin}
          type="contained"
        />
        <Button
          text={t('SIGNUP_LINK_TEXT')}
          onPress={navigateToSignUp}
          type="outlined"
        />
      </View>
    </View>
  );
};

export default Landing;
