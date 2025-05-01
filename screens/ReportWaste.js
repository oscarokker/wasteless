import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CameraScreen from './Camera';

export default function ReportWasteScreen(){
  const navigation = useNavigation();
  const [showWarning, setShowWarning] = useState(false); // MARIE: Navngivningen skal opdateres 
  const [showCategory, setShowCategory] = useState(false);
  const [isRegularPressed, setIsRegularPressed] = useState(false);
  const [isHazardousPressed, setIsHazardousPressed] = useState(false);
  const handleReportPress = () => {
    Alert.alert(
      "Redirection",
      "You will now be redirected to the map and get a pop-up feedback",
      [{ text: "OK" }]
    );
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.headline1}>Add found waste</Text>
  
        {/* TAKE PICTURE OF FOUND WASTE */}
        <View style={styles.subContainer}>
          <Text style={styles.headline2}>Waste</Text>
          <TouchableOpacity
            style={styles.placeholderRect}
            onPress={() => navigation.navigate('Camera')}>
            <Image 
            source={require('../assets/cameraIcon.png')}
            style={styles.cameraIcon}
            />
          </TouchableOpacity>
        </View>
  
        {/* LOCATION */}
        <View style={styles.subContainer}>
          <Text style={styles.headline2}>Location</Text>
          <Text style={styles.currentLocationAddress}>Address placeholder</Text>
        </View>
  
        {/* TYPE */}
        <View style={styles.subContainer}>
          <Text style={styles.headline2}>Type</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.regularWasteButton}
              onPress={() => {
                setShowCategory(true);
                setIsRegularPressed(true);
              }}>
              <Text style={styles.buttonText}>Regular</Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              style={styles.hazardousWasteButton}
              onPress={() => {
                setShowWarning(true);
                setIsHazardousPressed(true);
              }}>
              <Text style={styles.buttonText}>Hazardous</Text>
            </TouchableOpacity>
          </View>
  
          {showWarning && (
            <Text style={styles.warningText}>
              Please avoid picking up hazardous waste - local authorities will handle it instead.
            </Text>
          )}
        </View>
  
        {/* CATEGORY (kun hvis valgt) */}
        {showCategory && (
          <View style={styles.categoryContainer}>
            <Text style={styles.headline2}>Category</Text>
            <Text style={styles.currentLocationAddress}>
              Placeholder for horisontal scrollView component
            </Text>
          </View>
        )}
  
        {/* HAZARDOUS KNAP (kun hvis valgt) */}
        {showWarning && (
          <TouchableOpacity
            style={styles.reportHazardousWasteButton}
            onPress={handleReportPress}>
            <Text style={styles.darkButtonText}>Report hazardous waste</Text>
          </TouchableOpacity>
        )}
      </View>
  
      <StatusBar style="auto" />
    </>
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
  placeholderRect: {
    height: 150,
    width: '100%',
    backgroundColor: '#EBEBEB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 5,
  },
  cameraIcon: {
    width: 35,
    height: 35,
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
    backgroundColor: 'rgba(133, 197, 108, 0.4)',
    borderRadius: 5,
    padding: 10,
    width: 140,
    height: 45,
    marginBottom: 20,
  },
  hazardousWasteButton: {
    backgroundColor: 'rgba(225, 15, 30, 0.4)',
    borderRadius: 5,
    padding: 10,
    width: 140,
    height: 45,
    marginBottom: 20,
  },
  regularButtonPressed: {
    backgroundColor: 'rgba(133, 197, 108, 1)',
  },
  hazardousWastePressed: {
    backgroundColor: 'rgba(225, 15, 30, 1)',
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
    bottom: 45, // MARIE: Justeres når navi-baren er kommet på
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