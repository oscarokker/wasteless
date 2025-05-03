import React from 'react';
import { ScrollView, View, StyleSheet, Text, Image} from 'react-native';

//TO DO: Dette custom component er enndu ikke færdigt og klar til brug

const RegularWasteCategories = () => {
    return (
        <ScrollView horizontal style={styles.scrollContainer}>
            <View style={styles.category}>
                <Image source={require('../assets/food-waste-icon.png')} style={styles.categoryIcon} />
                <Text>Paper</Text>
            </View>
            <View style={styles.category}>
                <Image source={require('../assets/food-waste-icon.png')} style={styles.categoryIcon} />
                <Text>Plastic</Text>
            </View>
            <View style={styles.category}>
                <Image source={require('../assets/food-waste-icon.png')} style={styles.categoryIcon} />
                <Text>Metal</Text>
            </View>
            <View style={styles.category}>
                <Image source={require('../assets/food-waste-icon.png')} style={styles.categoryIcon} />
                <Text>Glass</Text>
            </View>
            <View style={styles.category}>
                <Image source={require('../assets/food-waste-icon.png')} style={styles.categoryIcon} />
                <Text>Organic</Text>
            </View>      
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        padding: 10,
    },
    category: {
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    categoryIcon: {
        width: 50,  
        height: 50,
    },
});

export default RegularWasteCategories;