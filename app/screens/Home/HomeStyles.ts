import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
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
  },
  card: {
    marginLeft: 10,
  },
  image: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
});
