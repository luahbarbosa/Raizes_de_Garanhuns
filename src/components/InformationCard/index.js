import React from 'react';
import { Text, View } from 'react-native';

export default function InformationCard({ title, description }) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}
