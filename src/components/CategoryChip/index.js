import React from 'react';
import { Pressable, Text, View } from 'react-native';

export default function CategoryChip({ label, selected, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Text>{label}</Text>
      </View>
    </Pressable>
  );
}
