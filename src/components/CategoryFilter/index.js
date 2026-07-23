import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  CATEGORIES,
  CATEGORY_COLORS,
  CATEGORY_LIST
} from '../../constants/categories';

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory
}) {
  function getCategoryStyle(category) {
    const isSelected = category === selectedCategory;

    if (category === CATEGORIES.ALL) {
      return {
        container: {
          backgroundColor: isSelected ? '#2F6B3F' : '#F1F3F4'
        },
        text: {
          color: isSelected ? '#FFFFFF' : '#555555'
        }
      };
    }

    const colors = CATEGORY_COLORS[category];

    return {
      container: {
        backgroundColor: isSelected
          ? colors.background
          : '#F1F3F4'
      },
      text: {
        color: isSelected ? colors.color : '#555555'
      }
    };
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {CATEGORY_LIST.map((category) => {
          const isSelected = category === selectedCategory;
          const style = getCategoryStyle(category);

          return (
            <Pressable
              key={category}
              style={({ pressed }) => [
                styles.chip,
                style.container,
                isSelected && styles.chipSelected,
                pressed && styles.chipPressed
              ]}
              onPress={() => onSelectCategory(category)}
            >
              <Text
                style={[
                  styles.chipText,
                  style.text,
                  isSelected && styles.chipTextSelected
                ]}
              >
                {category}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12
  },

  scrollContent: {
    paddingHorizontal: 4,
    gap: 8
  },

  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.08,
    shadowRadius: 2
  },

  chipSelected: {
    elevation: 2,
    shadowOpacity: 0.15,
    shadowRadius: 3
  },

  chipPressed: {
    transform: [{ scale: 0.95 }]
  },

  chipText: {
    fontSize: 14,
    fontWeight: '600'
  },

  chipTextSelected: {}
});
