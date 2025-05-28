// RegularWasteCategories component used in the ReportWaste screen
// Made by Marie Hjorth

import React, { useState } from 'react';
import { Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// Mapping of all possible categories of regular waste 
const wasteCategoriesIcons = {
  'food-waste': {
    selected: require('../assets/icons/WasteCategories/food-waste (selected).png'),
    unselected: require('../assets/icons/WasteCategories/food-waste (unselected).png'),
  },
  'plastics': {
    selected: require('../assets/icons/WasteCategories/plastics (selected).png'),
    unselected: require('../assets/icons/WasteCategories/plastics (unselected).png'),
  },
  'cartons': {
    selected: require('../assets/icons/WasteCategories/cartons (selected).png'),
    unselected: require('../assets/icons/WasteCategories/cartons (unselected).png'),
  },
  'paper': {
    selected: require('../assets/icons/WasteCategories/paper (selected).png'),
    unselected: require('../assets/icons/WasteCategories/paper (unselected).png'),
  },
  'glass': {
    selected: require('../assets/icons/WasteCategories/glass (selected).png'),
    unselected: require('../assets/icons/WasteCategories/glass (unselected).png'),
  },
  'cardboard': {
    selected: require('../assets/icons/WasteCategories/cardboard (selected).png'),
    unselected: require('../assets/icons/WasteCategories/cardboard (unselected).png'),
  },
  'metal': {
    selected: require('../assets/icons/WasteCategories/metal (selected).png'),
    unselected: require('../assets/icons/WasteCategories/metal (unselected).png'),
  },
  'garden-waste': {
    selected: require('../assets/icons/WasteCategories/garden-waste (selected).png'),
    unselected: require('../assets/icons/WasteCategories/garden-waste (unselected).png'),
  },
  'medicine': {
    selected: require('../assets/icons/WasteCategories/medicine (selected).png'),
    unselected: require('../assets/icons/WasteCategories/medicine (unselected).png'),
  },
  'indoor-wood': {
    selected: require('../assets/icons/WasteCategories/indoor-wood (selected).png'),
    unselected: require('../assets/icons/WasteCategories/indoor-wood (unselected).png'),
  },
  'residual': {
    selected: require('../assets/icons/WasteCategories/residual (selected).png'),
    unselected: require('../assets/icons/WasteCategories/residual (unselected).png'),
  },
  'electronics': {
    selected: require('../assets/icons/WasteCategories/electronics (selected).png'),
    unselected: require('../assets/icons/WasteCategories/electronics (unselected).png'),
  },
  'textiles': {
    selected: require('../assets/icons/WasteCategories/textiles (selected).png'),
    unselected: require('../assets/icons/WasteCategories/textiles (unselected).png'),
  },
  'batteries': {
    selected: require('../assets/icons/WasteCategories/batteries (selected).png'),
    unselected: require('../assets/icons/WasteCategories/batteries (unselected).png'),
  },
  'bulky-waste': {
    selected: require('../assets/icons/WasteCategories/bulky-waste (selected).png'),
    unselected: require('../assets/icons/WasteCategories/bulky-waste (unselected).png'),
  },
};

const wasteCategories = Object.keys(wasteCategoriesIcons);

const RegularWasteCategories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  return (
    <ScrollView 
      style={styles.horizontalContainer}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {wasteCategories.map ((category) => {
        const isSelected = selectedCategories.includes(category);
        const imageSource = isSelected
          ? wasteCategoriesIcons[category].selected
          : wasteCategoriesIcons[category].unselected;
        
        return (
          <TouchableOpacity
            key={category}
            style={styles.wasteCategory}
            onPress={() => toggleCategory(category)}
          >
            <Image source={imageSource} style={styles.icon} />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};  

const styles = StyleSheet.create({
  horizontalContainer: {
    padding: 5,
  },
  wasteCategory: {
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  icon: {
    width: 64, 
    height: 64,
  },
});

export default RegularWasteCategories;
