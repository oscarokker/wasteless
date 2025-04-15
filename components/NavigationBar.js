import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavigationButton from './NavigationButton';

const NavigationBar = ({ activeButton, onButtonPress }) => {
  return (
    <View style={styles.container}>
      <NavigationButton
        iconName="camera"
        label="Camera"
        isActive={activeButton === 'Camera'}
        onPress={() => onButtonPress('Camera')}
      />
      <NavigationButton
        iconName="globe"
        label="Map"
        isActive={activeButton === 'Map'}
        onPress={() => onButtonPress('Map')}
      />
      <NavigationButton
        iconName="user"
        label="Profile"
        isActive={activeButton === 'Profile'}
        onPress={() => onButtonPress('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    backgroundColor: '#FFFFFF',
  },
});

export default NavigationBar;
