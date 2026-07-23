import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { CATEGORY_COLORS } from '../../constants/categories';

export default function PlaceCard({ place, onPress }) {
  const categoryColors = CATEGORY_COLORS[place.category];

  const chipStyle = categoryColors
    ? {
        backgroundColor: categoryColors.background
      }
    : {};

  const chipTextStyle = categoryColors
    ? {
        color: categoryColors.color
      }
    : {};

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed
      ]}
      onPress={onPress}
    >
      <Image
        source={{ uri: place.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <View style={[styles.categoryContainer, chipStyle]}>
          <Text style={[styles.category, chipTextStyle]}>
            {place.category}
          </Text>
        </View>

        <Text style={styles.neighborhood}>{place.neighborhood}</Text>

        <Text style={styles.name}>{place.name}</Text>

        <Text style={styles.summary} numberOfLines={2}>
          {place.summary}
        </Text>

        <Text style={styles.detailsText}>
          Ver detalhes →
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    marginBottom: 18,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 4
  },

  cardPressed: {
    opacity: 0.75
  },

  image: {
    width: '100%',
    height: 190,
    backgroundColor: '#d9d9d9'
  },

  content: {
    padding: 16
  },

  categoryContainer: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 8
  },

  category: {
    fontSize: 12,
    fontWeight: '700'
  },

  neighborhood: {
    color: '#666666',
    fontSize: 13,
    marginBottom: 4
  },

  name: {
    color: '#222222',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 6
  },

  summary: {
    color: '#444444',
    fontSize: 15,
    lineHeight: 22
  },

  detailsText: {
    color: '#174d38',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12
  }
});
