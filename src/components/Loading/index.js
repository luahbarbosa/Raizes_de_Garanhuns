import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color="#174d38"
      />

      <Text style={styles.text}>
        Carregando locais...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f4f2'
  },
  text: {
    color: '#174d38',
    fontSize: 15,
    marginTop: 12
  }
});
