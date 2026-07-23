import React from 'react';
import { Text, View } from 'react-native';

export default function EmptyState({ title, message }) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{message}</Text>
    </View>
  );
}
