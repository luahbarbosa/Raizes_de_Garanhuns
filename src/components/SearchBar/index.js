import React from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.container}>
      <Feather
        name="search"
        size={18}
        color="#888888"
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Buscar por nome, categoria ou bairro..."
        placeholderTextColor="#777777"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#bfd3c9',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 12
  },
  icon: {
    marginRight: 8
  },
  input: {
    flex: 1,
    color: '#222222',
    fontSize: 15,
    paddingVertical: 13
  }
});
