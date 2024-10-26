import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  settings: {
    flex: 1,
    padding: 20,
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
  profileData: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  worlderParent: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  worlder: {
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    fontSize: 18,
  },
  worlderEmail: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  settingsMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 10,
  },
  account: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
  },
});

export default styles;
