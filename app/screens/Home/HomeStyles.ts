import { Dimensions, StyleSheet } from 'react-native';
import { ThemeColors } from 'types';

const { height } = Dimensions.get('window');

const getStyles = (themeColors?: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors?.inputBackground,
    },
    header: {
      marginBottom: 10,
    },
    headerImage: {
      width: '100%',
      height: height * 0.6,
      resizeMode: 'cover',
    },
    section: {
      marginVertical: 10,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 15,
      marginBottom: 10,
      color: themeColors?.text,
    },
    card: {
      marginLeft: 10,
    },
    image: {
      width: 120,
      height: 180,
      borderRadius: 10,
    },
    loadingIndicator: {
      padding: 16,
    },
  });

export default getStyles;
