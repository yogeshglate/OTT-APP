import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import { Button } from 'components';
import { useNavigation } from 'hooks';

const { height } = Dimensions.get('window');

const Landing = () => {
  const navigation = useNavigation();

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
        <Button text="Login" onPress={navigateToLogin} type="contained" />
        <Button text="Sign Up" onPress={navigateToSignUp} type="outlined" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  landing: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'flex-end',
  },
  bannerIcon: {
    position: 'absolute',
    width: '100%',
    height: height,
  },
  buttonContainer: {
    backgroundColor: 'rgba(18, 18, 18, 0.9)',
    padding: 16,
    paddingBottom: 40,
    alignItems: 'center',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default Landing;
