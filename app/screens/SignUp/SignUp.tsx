import { Button } from 'components'; // Using the reusable Button component
import { useAuth, useNavigation } from 'hooks';
import React from 'react';
import { Keyboard, Pressable, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ThemeContext } from '../../App';
import styles from './SignUpStyles'; // Adjust the import path as necessary

const SignUp = () => {
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const navigation = useNavigation();
  const { register } = useAuth();
  const { themeColors } = React.useContext(ThemeContext) || {};

  const handleSignInPress = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = async () => {
    const newUser = {
      email,
      password,
      username,
    };
    try {
      await register(newUser);
      navigation.navigate('Login');
      console.warn('User Created Successfully');
    } catch (error) {
      console.error('Invalid Credentials');
    }
  };

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
          onChangeText={setEmail}
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
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Username"
          value={username}
          onChangeText={setUsername}
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
              color={themeColors?.secondary}
              onPress={() => setPasswordVisible(prev => !prev)} // Toggle visibility
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
