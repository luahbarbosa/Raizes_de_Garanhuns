import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function SearchBar({ value, onChangeText }) {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
