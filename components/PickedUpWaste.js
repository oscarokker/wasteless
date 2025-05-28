// Picked Up Waste component used at bottom of the Profile screen
// Made by Oscar Rode

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PickedUpWaste = ({ imageSource, minutesAgo }) => (
  <View style={styles.pickedUpWaste}>
    <Image source={imageSource} style={styles.wasteImage} />
    <View style={styles.wasteDetails}>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/food-waste-icon.png')} style={styles.wasteTypeIcon} />
        <Image source={require('../assets/plastic-waste-icon.png')} style={styles.wasteTypeIcon} />
      </View>
      <View style={styles.timeAgo}>
        <Image source={require('../assets/clock-icon.png')} style={styles.wasteTimeIcon} />
        <Text style={styles.wasteTime}>{minutesAgo} min ago</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  pickedUpWaste: {
    flexDirection: 'row',
    gap: 8,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
    overflow: 'hidden',
    elevation: 2,
  },
  wasteImage: {
    width: 80,
    height: 80,
    backgroundColor: '#ccc', // Placeholder until real images are used
  },
  wasteDetails: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 4,
  },
  wasteTypeIcon: {
    borderRadius: 4,
  },
  timeAgo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  wasteTimeIcon: {
    width: 16,
    height: 16,
  },
  wasteTime: {
    fontSize: 12,
    lineHeight: 16.8, // 140%
    color: '#666666',
  },
});

export default PickedUpWaste;
