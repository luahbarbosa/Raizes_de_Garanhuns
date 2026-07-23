import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function InfoCard({
  IconComponent,
  iconName,
  title,
  description,
  accentColor
}) {
  return (
    <View style={styles.card}>
      <View
        style={[
          styles.iconCircle,
          { backgroundColor: accentColor + '18' }
        ]}
      >
        <IconComponent
          name={iconName}
          size={22}
          color={accentColor}
        />
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, { color: accentColor }]}>
          {title}
        </Text>

        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.08,
    shadowRadius: 4
  },

  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },

  content: {
    flex: 1
  },

  title: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 6
  },

  description: {
    color: '#555555',
    fontSize: 14,
    lineHeight: 21
  }
});
