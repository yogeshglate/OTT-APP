import { ThemeContext } from 'app';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NoInternet = () => {
  const { themeColors } = React.useContext(ThemeContext) || {};

  return (
    <View
      style={[styles.container, { backgroundColor: themeColors?.background }]}>
      <MaterialCommunityIcons
        name="wifi-off"
        size={80}
        color={themeColors?.primary}
      />
      <Text style={[styles.text, { color: themeColors?.text }]}>
        You're not connected to the internet
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default NoInternet;
