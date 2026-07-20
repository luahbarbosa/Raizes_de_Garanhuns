import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function Details({ route }) {
  const { place } = route.params;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={{ uri: place.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>
            {place.category}
          </Text>
        </View>

        <Text style={styles.name}>
          {place.name}
        </Text>

        <Text style={styles.neighborhood}>
          Bairro: {place.neighborhood}
        </Text>

        <View style={styles.informationBox}>
          <Text style={styles.informationTitle}>
            Endereço
          </Text>

          <Text style={styles.informationText}>
            {place.address}
          </Text>
        </View>

        <View style={styles.informationBox}>
          <Text style={styles.informationTitle}>
            Horário de funcionamento
          </Text>

          <Text style={styles.informationText}>
            {place.openingHours}
          </Text>
        </View>

        <View style={styles.informationBox}>
          <Text style={styles.informationTitle}>
            Entrada
          </Text>

          <Text style={styles.informationText}>
            {place.admission}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>
          Sobre o local
        </Text>

        <Text style={styles.description}>
          {place.description}
        </Text>

        <View style={styles.warningBox}>
          <Text style={styles.warningTitle}>
            Observação
          </Text>

          <Text style={styles.warningText}>
            As informações apresentadas possuem finalidade
            educacional. Horários e condições de visitação
            devem ser confirmados antes da visita.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf3ec'
  },

  contentContainer: {
    paddingBottom: 30
  },

  image: {
    width: '100%',
    height: 260,
    backgroundColor: '#e7d9cd'
  },

  content: {
    padding: 18
  },

  categoryContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#f6e3d1',
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 6,
    marginBottom: 12
  },

  category: {
    color: '#8a3324',
    fontSize: 13,
    fontWeight: '700'
  },

  name: {
    color: '#2b1a12',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 7
  },

  neighborhood: {
    color: '#6b5b50',
    fontSize: 15,
    marginBottom: 22
  },

  informationBox: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f0ded2'
  },

  informationTitle: {
    color: '#8a3324',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5
  },

  informationText: {
    color: '#4a3a30',
    fontSize: 15,
    lineHeight: 22
  },

  sectionTitle: {
    color: '#2b1a12',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 10
  },

  description: {
    color: '#4a3a30',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'justify'
  },

  warningBox: {
    backgroundColor: '#fff4cf',
    borderRadius: 16,
    marginTop: 22,
    padding: 15
  },

  warningTitle: {
    color: '#755b00',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5
  },

  warningText: {
    color: '#5d4b0c',
    fontSize: 14,
    lineHeight: 21
  }
});
