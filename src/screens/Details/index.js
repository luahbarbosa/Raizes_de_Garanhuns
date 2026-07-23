import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import InfoCard from '../../components/InfoCard';
import { CATEGORY_COLORS } from '../../constants/categories';

export default function Details({ route }) {
  const { place } = route.params;

  const categoryColors = CATEGORY_COLORS[place.category];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.heroContainer}>
        <Image
          source={{ uri: place.image }}
          style={styles.heroImage}
          resizeMode="cover"
        />

        <View style={styles.heroGradient} />

        <View style={styles.heroInfo}>
          <View
            style={[
              styles.categoryBadge,
              categoryColors && {
                backgroundColor: categoryColors.background
              }
            ]}
          >
            <Feather
              name="tag"
              size={12}
              color={categoryColors ? categoryColors.color : '#2F6B3F'}
              style={styles.categoryIcon}
            />

            <Text
              style={[
                styles.categoryText,
                categoryColors && { color: categoryColors.color }
              ]}
            >
              {place.category}
            </Text>
          </View>

          <Text style={styles.heroName}>{place.name}</Text>

          <Text style={styles.heroNeighborhood}>
            {place.neighborhood}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre o local</Text>

        <Text style={styles.description}>{place.description}</Text>
      </View>

      <View style={styles.cardsSection}>
        <InfoCard
          IconComponent={Feather}
          iconName="user"
          title="Acessibilidade"
          description={place.accessibility}
          accentColor="#A68AC5"
        />

        <InfoCard
          IconComponent={Feather}
          iconName="ticket"
          title="Entrada"
          description={place.admission}
          accentColor="#E8BE4A"
        />

        <InfoCard
          IconComponent={Feather}
          iconName="clock"
          title="Horário de funcionamento"
          description={place.openingHours}
          accentColor="#2F6B3F"
        />

        <InfoCard
          IconComponent={Feather}
          iconName="map-pin"
          title="Endereço"
          description={place.address}
          accentColor="#6D93B5"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7'
  },

  contentContainer: {
    paddingBottom: 30
  },

  heroContainer: {
    height: 340,
    position: 'relative'
  },

  heroImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#d9d9d9'
  },

  heroGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 180,
    backgroundColor: 'rgba(0,0,0,0.55)'
  },

  heroInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20
  },

  categoryBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 12,
    gap: 6
  },

  categoryIcon: {
    marginTop: 1
  },

  categoryText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2F6B3F'
  },

  heroName: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    lineHeight: 38
  },

  heroNeighborhood: {
    color: '#cccccc',
    fontSize: 15
  },

  section: {
    paddingHorizontal: 16,
    marginTop: 28
  },

  sectionTitle: {
    color: '#222222',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16
  },

  description: {
    color: '#444444',
    fontSize: 15,
    lineHeight: 28,
    textAlign: 'justify'
  },

  cardsSection: {
    paddingHorizontal: 16,
    marginTop: 28,
    gap: 12
  }
});
