import { ThemeContext } from 'app';
import { AppConstants, AppIcons } from 'constant';
import { useAuth, useNavigation } from 'hooks';
import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import getStyles from './SettingsStyles';

const Settings: React.FC = () => {
  const { themeColors, isDarkMode, toggleTheme } =
    React.useContext(ThemeContext) || {};
  const styles = getStyles(themeColors);
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
    toggleTheme && toggleTheme(!isDarkMode);
  };

  return (
    <View style={styles.settings}>
      <View style={styles.appBar}>
        <Text style={styles.title}>{AppConstants.SETTINGS_TITLE}</Text>
      </View>

      <View style={styles.profileData}>
        <MaterialCommunityIcons
          name={AppIcons.UserLogo}
          size={90}
          color={themeColors?.text}
        />
        <View style={styles.worlderParent}>
          <Text style={styles.worlder}>{AppConstants.PROFILE_NAME}</Text>
          <Text style={styles.worlderEmail}>{AppConstants.PROFILE_EMAIL}</Text>
        </View>
      </View>

      <Pressable style={styles.settingsMenu}>
        <MaterialCommunityIcons
          name={AppIcons.UserSettings}
          size={24}
          color={themeColors?.text}
          style={styles.icon}
        />
        <Text style={styles.account}>{AppConstants.ACCOUNT_TEXT}</Text>
      </Pressable>
      <Pressable style={styles.settingsMenu} onPress={handleToggleTheme}>
        <MaterialCommunityIcons
          name={isDarkMode ? AppIcons.LightMode : AppIcons.DarkMode}
          size={24}
          color={themeColors?.text}
          style={styles.icon}
        />
        <Text style={styles.account}>
          {AppConstants.CHANGE_APPEARANCE_TEXT}
        </Text>
      </Pressable>
      <Pressable style={styles.settingsMenu}>
        <MaterialCommunityIcons
          name={AppIcons.Help}
          size={24}
          color={themeColors?.text}
          style={styles.icon}
        />
        <Text style={styles.account}>{AppConstants.HELP_TEXT}</Text>
      </Pressable>
      <Pressable style={styles.settingsMenu} onPress={handleLogout}>
        <MaterialCommunityIcons
          name={AppIcons.LogOut}
          size={24}
          color={themeColors?.text}
          style={styles.icon}
        />
        <Text style={styles.account}>{AppConstants.LOGOUT_TEXT}</Text>
      </Pressable>
    </View>
  );
};

export default Settings;
