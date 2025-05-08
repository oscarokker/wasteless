//MADE BY MARIE HJORTH
import React from 'react';
import { Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const RegularWasteCategories = () => {
  return (
    <ScrollView 
    style={styles.horizontalContainer}
    horizontal={true}
    showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.wasteCategory}>
      <Image
          source={require('../assets/icons/WasteCategories/food-waste (unselected).png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.wasteCategory}>
      <Image
          source={require('../assets/icons/WasteCategories/plastics (unselected).png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.wasteCategory}>
      <Image
          source={require('../assets/icons/WasteCategories/paper (unselected).png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.wasteCategory}>
      <Image
          source={require('../assets/icons/WasteCategories/glass (unselected).png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.wasteCategory}>
      <Image
          source={require('../assets/icons/WasteCategories/cardboard (unselected).png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.wasteCategory}>
      <Image
          source={require('../assets/icons/WasteCategories/metal (unselected).png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.wasteCategory}>
      <Image
          source={require('../assets/icons/WasteCategories/cartons (unselected).png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.wasteCategory}>
      <Image
          source={require('../assets/icons/WasteCategories/glass (unselected).png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.wasteCategory}>
      <Image
          source={require('../assets/icons/WasteCategories/garden-waste (unselected).png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.wasteCategory}>
      <Image
          source={require('../assets/icons/WasteCategories/medicine (unselected).png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.wasteCategory}>
      <Image
          source={require('../assets/icons/WasteCategories/indoor-wood (unselected).png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.wasteCategory}>
      <Image
          source={require('../assets/icons/WasteCategories/residual (unselected).png')}
          style={styles.icon}
        />
      </TouchableOpacity>
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
    width: 65, 
    height: 65,
  },
});

export default RegularWasteCategories;