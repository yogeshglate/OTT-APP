import * as React from 'react';
import { Text, TextInput, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../../App';
import styles from './SearchStyles';

const Search = () => {
  const { themeColors } = React.useContext(ThemeContext) || {};

  return (
    <View
      style={[styles.container, { backgroundColor: themeColors?.background }]}>
      <View
        style={[styles.appBar, { backgroundColor: themeColors?.background }]}>
        <Text style={[styles.title, { color: themeColors?.text }]}>Search</Text>
      </View>

      <View
        style={[
          styles.searchBarContainer,
          { backgroundColor: themeColors?.inputBackground },
        ]}>
        <TextInput
          style={[styles.searchBar, { color: themeColors?.text }]}
          placeholder="Search for a title..."
          placeholderTextColor={themeColors?.primary}
        />
        <MaterialCommunityIcons
          name="magnify"
          size={24}
          color={themeColors?.primary}
        />
      </View>
    </View>
  );
};

export default Search;
