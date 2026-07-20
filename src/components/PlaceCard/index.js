import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function PlaceCard({ place, onPress }) {
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
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{place.category}</Text>
        </View>

        <Text style={styles.name}>{place.name}</Text>

        <Text style={styles.neighborhood}>
          Bairro: {place.neighborhood}
        </Text>

        <Text style={styles.summary} numberOfLines={3}>
          {place.summary}
        </Text>

        <Text style={styles.detailsText}>
          Toque para ver os detalhes →
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f0ded2',
    elevation: 5,
    shadowColor: '#3d1f10',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.18,
    shadowRadius: 6
  },

  cardPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.99 }]
  },

  image: {
    width: '100%',
    height: 190,
    backgroundColor: '#e7d9cd'
  },

  content: {
    padding: 16
  },

  categoryContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#f6e3d1',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 10
  },

  category: {
    color: '#8a3324',
    fontSize: 12,
    fontWeight: '700'
  },

  name: {
    color: '#2b1a12',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 5
  },

  neighborhood: {
    color: '#6b5b50',
    fontSize: 14,
    marginBottom: 10
  },

  summary: {
    color: '#4a3a30',
    fontSize: 15,
    lineHeight: 22
  },

  detailsText: {
    color: '#d97b29',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 14
  }
});
