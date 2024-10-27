import { StyleSheet, Dimensions } from 'react-native';
import { moderateScale, scale, verticalScale } from 'services';

const { height } = Dimensions.get('window');

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
    padding: moderateScale(16),
    paddingBottom: verticalScale(40),
    alignItems: 'center',
    width: '100%',
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
  },
});

export default styles;
