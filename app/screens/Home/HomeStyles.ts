import { Dimensions, StyleSheet } from 'react-native';
import { fontSize, moderateScale, scale, verticalScale } from 'services';
import { ThemeColors } from 'types';

const { height } = Dimensions.get('window');

const getStyles = (themeColors?: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors?.inputBackground,
    },
    header: {
      marginBottom: verticalScale(10),
    },
    headerImage: {
      width: '100%',
      height: height * 0.6,
      resizeMode: 'cover',
    },
    section: {
      marginVertical: verticalScale(10),
    },
    sectionTitle: {
      fontSize: fontSize.large,
      fontWeight: 'bold',
      marginLeft: scale(15),
      marginBottom: verticalScale(10),
      color: themeColors?.text,
    },
    card: {
      marginLeft: scale(10),
    },
    image: {
      width: scale(120),
      height: verticalScale(180),
      borderRadius: moderateScale(10),
    },
    loadingIndicator: {
      padding: moderateScale(16),
    },
  });

export default getStyles;
