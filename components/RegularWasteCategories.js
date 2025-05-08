//MADE BY MARIE HJORTH
import React from 'react';
import { Image, View, Text, StyleSheet, ScrollView } from 'react-native';

const RegularWasteCategories = () => {
  return (
    <ScrollView 
    style={styles.horizontalContainer}
    horizontal={true}
    showsHorizontalScrollIndicator={false}>
      <View style={styles.wasteCategory}>
      <Image
          source={require('../assets/food-waste-icon.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.wasteCategory}>
      <Image
          source={require('../assets/food-waste-icon.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.wasteCategory}>
      <Image
          source={require('../assets/food-waste-icon.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.wasteCategory}>
      <Image
          source={require('../assets/food-waste-icon.png')}
          style={styles.icon}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  horizontalContainer: {
    padding: 5,
  },
  wasteCategory: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50, 
    height: 50,
    marginBottom: 8, // slettes evt. 
  },
});

export default RegularWasteCategories;