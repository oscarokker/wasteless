import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const NavigationButton = ({ iconName, label, isActive, onPress }) => {
  const color = isActive ? '#2E7D32' : '#333333';
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Feather name={iconName} size={24} color={color} />
      <Text style={[styles.label, { color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  label: {
    marginTop: 2,
    fontSize: 12,
  },
});

export default NavigationButton;
