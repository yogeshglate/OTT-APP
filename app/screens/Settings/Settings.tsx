import { ThemeContext } from 'app';
import { AppIcons } from 'constant';
import { useAuth, useNavigation } from 'hooks';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';
import { Menu, Provider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { showError, showSuccess } from 'services';
import getStyles from './SettingsStyles';

const Settings: React.FC = () => {
  const { themeColors, isDarkMode, toggleTheme, user } =
    React.useContext(ThemeContext) || {};
  const styles = getStyles(themeColors);
  const { navigation } = useNavigation();
  const { logout } = useAuth();
  const { t, i18n } = useTranslation();

  const [visible, setVisible] = React.useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      showSuccess(t('USER_LOGGED_OUT_SUCCESS'));
      navigation.replace('Landing');
    } catch {
      showError(t('LOGOUT_ERROR'));
    }
  };

  const handleToggleTheme = () => {
    if (toggleTheme) {
      toggleTheme(!isDarkMode);
    }
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setVisible(false);
  };

  const renderMenuItem = (langCode: string, title: string) => (
    <Menu.Item onPress={() => changeLanguage(langCode)} title={title} />
  );

  return (
    <Provider>
      <View style={styles.settings}>
        <View style={styles.appBar}>
          <Text style={styles.title}>{t('SETTINGS_TITLE')}</Text>
        </View>

        <View style={styles.profileData}>
          <MaterialCommunityIcons
            name={AppIcons.UserLogo}
            size={90}
            color={themeColors?.text}
          />
          <View style={styles.worlderParent}>
            <Text style={styles.worlder}>{user?.username}</Text>
            <Text style={styles.worlderEmail}>{user?.email}</Text>
          </View>
        </View>

        <Pressable style={styles.settingsMenu}>
          <MaterialCommunityIcons
            name={AppIcons.UserSettings}
            size={24}
            color={themeColors?.text}
            style={styles.icon}
          />
          <Text style={styles.account}>{t('ACCOUNT_TEXT')}</Text>
        </Pressable>

        <Pressable style={styles.settingsMenu} onPress={handleToggleTheme}>
          <MaterialCommunityIcons
            name={isDarkMode ? AppIcons.LightMode : AppIcons.DarkMode}
            size={24}
            color={themeColors?.text}
            style={styles.icon}
          />
          <Text style={styles.account}>{t('CHANGE_APPEARANCE_TEXT')}</Text>
        </Pressable>

        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <Pressable
              onPress={() => setVisible(true)}
              style={styles.settingsMenu}>
              <MaterialCommunityIcons
                name={AppIcons.Language}
                size={24}
                color={themeColors?.text}
                style={styles.icon}
              />
              <Text style={styles.account}>{t('LANGUAGE_SELECTION_TEXT')}</Text>
              <MaterialCommunityIcons
                name="chevron-down"
                size={24}
                color={themeColors?.text}
              />
            </Pressable>
          }>
          {renderMenuItem('en', 'English')}
          {renderMenuItem('hi', 'हिंदी')}
          {renderMenuItem('mr', 'मराठी')}
          {renderMenuItem('id', 'Bahasa Indonesia')}
          {renderMenuItem('es', 'Español')}
          {renderMenuItem('fr', 'Français')}
        </Menu>

        <Pressable style={styles.settingsMenu}>
          <MaterialCommunityIcons
            name={AppIcons.Help}
            size={24}
            color={themeColors?.text}
            style={styles.icon}
          />
          <Text style={styles.account}>{t('HELP_TEXT')}</Text>
        </Pressable>

        <Pressable style={styles.settingsMenu} onPress={handleLogout}>
          <MaterialCommunityIcons
            name={AppIcons.LogOut}
            size={24}
            color={themeColors?.text}
            style={styles.icon}
          />
          <Text style={styles.account}>{t('LOGOUT_TEXT')}</Text>
        </Pressable>
      </View>
    </Provider>
  );
};

export default Settings;
