import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';

export default function App() {
  const [showWarning, setShowWarning] = useState(false); // MARIE: Navngivningen skal opdateres 
  const [showCategory, setShowCategory] = useState(false);
  const handleReportPress = () => {
    Alert.alert(
      "Redirection",
      "You will now be redirected to the map and get a pop-up feedback",
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.mainContainer}>
    {/* MARIE: tilføj pil tilbage eller x, som leder tilbage map-mainScreen + evt. alert "er du sikker?"*/}
      <Text style={styles.headline1}>Add found waste</Text>
      <View style={styles.subContainer}>
        <Text style={styles.headline2}>Waste</Text>
        <Text style={styles.currentLocationAddress}>Placeholder for taken picture of the waste</Text>
        </View>
      <View style={styles.subContainer}>
        <Text style={styles.headline2}>Location</Text>
        <Text style={styles.currentLocationAddress}>Address placeholder</Text>
        </View>
      <View style={styles.subContainer}>
        <Text style={styles.headline2}>Type</Text>
        <View style={styles.buttonRow}>
        {/* REGULAR WASTE BUTTON */}
        <TouchableOpacity 
        style={styles.regularWasteButton}
        onPress={() => {
          setShowCategory(true); // Displays the "Category" view when pressed
        }}>
        <Text style={styles.buttonText}>Regular</Text>
        </TouchableOpacity>
        {/* HAZARDOUS WASTE BUTTON */}
          <TouchableOpacity 
          style={styles.hazardousWasteButton}
            onPress={() => {
              setShowWarning(true);
            }}>
             <Text style={styles.buttonText}>Hazardous</Text>
          </TouchableOpacity>
          </View>
          {showWarning && (
            <Text style={styles.warningText}>Please avoid picking up hazardous waste - local authorities will handle it instead.
            </Text>
          )}
        </View>

      {showCategory && (
        <View style={styles.categoryContainer}>
          <Text style={styles.headline2}>Category</Text>
          <Text style={styles.currentLocationAddress}>Placeholder for horisontal scrollView component</Text>
        </View>
      )}
        {showWarning && (
          <TouchableOpacity 
          style={styles.reportHazardousWasteButton}
          onPress={handleReportPress}>
            <Text style={styles.darkButtonText}>Report hazardous waste</Text>
          </TouchableOpacity>
        )}
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 70,
    paddingLeft: 26.5,
    paddingRight: 26.5,
    backgroundColor: '#FFFFFF',
  },
  subContainer: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  headline1: {
  color: 'black',
  fontSize: 32,
  fontWeight: 'bold',
  textAlign: 'center', 
  },
  headline2: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,  
    },
  currentLocationAddress: {
    color: '#969696',
    fontSize: 14,
    fontStyle: 'italic', 
    marginLeft: 10,
    }, 
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',  
    gap: 15,
  },
  regularWasteButton: {
    backgroundColor: '#85C56C',
    borderRadius: 5,
    padding: 10,
    width: '140',
    height: '45',
    marginBottom: 20,
  },
  hazardousWasteButton: {
    backgroundColor: '#E10F1E',
    borderRadius: 5,
    padding: 10,
    width: '140',
    height: '45',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold', 
    textAlign: 'center',
    },
  darkButtonText: {
    color: '85C56C',
    fontSize: 18,
    fontWeight: 'bold', 
    textAlign: 'center',
    },
  warningRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',  
    gap: 15,
  },
  warningText: {
    color: '#E10F1E',
    fontSize: 14,
    marginTop: 10,
  },
  reportHazardousWasteButton: {
    position: 'absolute',
    bottom: 25, // MARIE: Justeres når navi-baren er kommet på
    height: 50,
    width: 270,
    alignSelf: 'center',
    justifyContent: 'center', 
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#85C56C',
    borderRadius: 25,
  }
});
