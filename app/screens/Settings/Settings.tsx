import { Button } from 'components';
import { useAuth, useNavigation } from 'hooks';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const Settings = () => {
  const { logout } = useAuth();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Settings</Text>
      <Button
        text="Logout"
        onPress={() => {
          logout()
            .then(() => {
              console.warn('User Logged Out Successfully');
              navigation.navigate('Landing');
            })
            .catch(() => console.error('Error in logging out'));
        }}
      />
    </SafeAreaView>
  );
};

export default Settings;
