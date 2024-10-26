import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b2930',
    borderRadius: 28,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  appBar: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'rgba(0, 0, 0, 0.25)',
    borderBottomWidth: 4,
    width: '100%',
  },
  title: {
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
    fontSize: 18,
  },
});
