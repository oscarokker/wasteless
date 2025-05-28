// Picked Up Waste component used at bottom of the Profile screen
// Made by Oscar Rode

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PickedUpWaste = ({ imageSource, minutesAgo }) => (
  <View style={styles.pickedUpWaste}>
    <Image source={imageSource} style={styles.wasteImage} />
    <View style={styles.wasteDetails}>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/icons/WasteCategories/metal (selected).png')} style={styles.wasteTypeIcon} />
        <Image source={require('../assets/icons/WasteCategories/plastics (selected).png')} style={styles.wasteTypeIcon} />
      </View>
      <View style={styles.timeAgo}>
        <Image source={require('../assets/icons/time-ago-icon.png')} style={styles.timeAgoIcon} />
        <Text style={styles.pickupTime}>{minutesAgo} min ago</Text>
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
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  timeAgo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeAgoIcon: {
    width: 20,
    height: 20,
  },
  pickupTime: {
    fontSize: 14,
    lineHeight: 16.8, // 140%
    color: '#969696',
    marginLeft: 2,
  },
});

export default PickedUpWaste;
