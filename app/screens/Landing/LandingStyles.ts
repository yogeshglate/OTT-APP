import { StyleSheet, Dimensions } from 'react-native';

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
    padding: 16,
    paddingBottom: 40,
    alignItems: 'center',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default styles;
