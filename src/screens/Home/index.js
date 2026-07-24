import React, {
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CategoryFilter from '../../components/CategoryFilter';
import EmptyState from '../../components/EmptyState';
import Loading from '../../components/Loading';
import PlaceCard from '../../components/PlaceCard';
import SearchBar from '../../components/SearchBar';
import { CATEGORIES } from '../../constants/categories';
import placesData from '../../data/places';

export default function Home({ navigation }) {
  const [places, setPlaces] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(
    CATEGORIES.ALL
  );
  const [isLoading, setIsLoading] = useState(true);

  function loadPlaces() {
    try {
      setIsLoading(true);

      setTimeout(() => {
        setPlaces(placesData);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Erro ao carregar os locais:', error);

      setPlaces([]);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadPlaces();
  }, []);

  const filteredPlaces = useMemo(() => {
    const normalizedSearch = searchText
      .trim()
      .toLowerCase();

    const isCategoryFilterActive =
      selectedCategory !== CATEGORIES.ALL;

    if (
      normalizedSearch === '' &&
      !isCategoryFilterActive
    ) {
      return places;
    }

    return places.filter((place) => {
      const matchesSearch =
        normalizedSearch === '' ||
        place.name.toLowerCase().includes(normalizedSearch) ||
        place.category.toLowerCase().includes(normalizedSearch) ||
        place.neighborhood.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        !isCategoryFilterActive ||
        place.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [places, searchText, selectedCategory]);

  function openDetails(place) {
    navigation.navigate('Details', {
      place: place
    });
  }

  function renderPlace({ item }) {
    return (
      <PlaceCard
        place={item}
        onPress={() => openDetails(item)}
      />
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.subtitle}>
          Descubra a história, a natureza e a cultura que
          fazem de Garanhuns um lugar único.
        </Text>
      </View>

      <SearchBar
        value={searchText}
        onChangeText={setSearchText}
      />

      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <Text style={styles.resultText}>
        {filteredPlaces.length}{' '}
        {filteredPlaces.length === 1
          ? 'local encontrado'
          : 'locais encontrados'}
      </Text>

      <FlatList
        data={filteredPlaces}
        renderItem={renderPlace}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<EmptyState />}
        contentContainerStyle={
          filteredPlaces.length === 0
            ? styles.emptyList
            : styles.list
        }
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f4f2',
    paddingHorizontal: 16
  },

  header: {
    paddingTop: 20,
    paddingBottom: 16
  },

  title: {
    color: '#174d38',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 6
  },

  subtitle: {
    color: '#4f5b55',
    fontSize: 15,
    lineHeight: 22
  },

  resultText: {
    color: '#5a655f',
    fontSize: 13,
    marginBottom: 12
  },

  list: {
    paddingBottom: 24
  },

  emptyList: {
    flexGrow: 1
  }
});
