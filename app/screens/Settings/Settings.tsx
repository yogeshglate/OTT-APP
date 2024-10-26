import { useAuth, useNavigation } from 'hooks';
import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../../App';
import styles from './SettingsStyles';

const Settings = () => {
  const { themeColors, isDarkMode, toggleTheme } =
    React.useContext(ThemeContext) || {};
  const { navigation } = useNavigation();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      console.warn('User Logged Out Successfully');
      navigation.navigate('Landing');
    } catch {
      console.error('Error in logging out');
    }
  };

  const handleToggleTheme = () => {
    if (toggleTheme) {
      toggleTheme(!isDarkMode);
    }
  };

  return (
    <View
      style={[styles.settings, { backgroundColor: themeColors?.background }]}>
      <View
        style={[styles.appBar, { backgroundColor: themeColors?.background }]}>
        <Text style={[styles.title, { color: themeColors?.text }]}>
          Settings
        </Text>
      </View>

      <View style={styles.profileData}>
        <MaterialCommunityIcons
          name="account-circle"
          size={90}
          color={themeColors?.text}
        />
        <View style={styles.worlderParent}>
          <Text style={[styles.worlder, { color: themeColors?.text }]}>
            Worlder
          </Text>
          <Text
            style={[styles.worlderEmail, { color: themeColors?.placeholder }]}>
            worlder@wolonote.com
          </Text>
        </View>
      </View>

      <Pressable style={styles.settingsMenu}>
        <MaterialCommunityIcons
          name="account-cog"
          size={24}
          color={themeColors?.text}
          style={styles.icon}
        />
        <Text style={[styles.account, { color: themeColors?.text }]}>
          Account
        </Text>
      </Pressable>
      <Pressable style={styles.settingsMenu} onPress={handleToggleTheme}>
        <MaterialCommunityIcons
          name={isDarkMode ? 'weather-sunny' : 'moon-waning-crescent'}
          size={24}
          color={themeColors?.text}
          style={styles.icon}
        />
        <Text style={[styles.account, { color: themeColors?.text }]}>
          Change Appearance
        </Text>
      </Pressable>
      <Pressable style={styles.settingsMenu}>
        <MaterialCommunityIcons
          name="help-circle"
          size={24}
          color={themeColors?.text}
          style={styles.icon}
        />
        <Text style={[styles.account, { color: themeColors?.text }]}>Help</Text>
      </Pressable>
      <Pressable style={styles.settingsMenu} onPress={handleLogout}>
        <MaterialCommunityIcons
          name="logout"
          size={24}
          color={themeColors?.text}
          style={styles.icon}
        />
        <Text style={[styles.account, { color: themeColors?.text }]}>
          Logout
        </Text>
      </Pressable>
    </View>
  );
};

export default Settings;
