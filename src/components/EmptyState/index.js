import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Nenhum local encontrado
      </Text>

      <Text style={styles.message}>
        Tente pesquisar por outro nome, categoria ou bairro.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  title: {
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center'
  },
  message: {
    color: '#666666',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center'
  }
});
