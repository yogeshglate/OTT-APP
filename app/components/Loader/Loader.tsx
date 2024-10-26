import React from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';

const Loader = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;

  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="#00ff00" />
      <Text style={{ color: '#00ff00' }}>Please Wait...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
});

export default Loader;
