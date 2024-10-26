import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 8,
    margin: 26,
  },
  searchBar: {
    flex: 1,
    height: 60,
    padding: 8,
  },
  movieCard: {
    flex: 1,
    margin: 4,
    backgroundColor: '#222',
    borderRadius: 8,
    overflow: 'hidden',
  },
  movieImage: {
    width: '100%',
    height: 150,
  },
  movieTitle: {
    padding: 8,
    textAlign: 'center',
  },
  loadingText: {
    textAlign: 'center',
    padding: 16,
  },
});
