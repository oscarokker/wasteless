//MADE BY MARIE HJORTH
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native'; //Alert skal evt. slettesn
import { Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ReportFeedback from '../components/ReportFeedback';
import RegularWasteCategories from '../components/RegularWasteCategories';

export default function ReportWasteScreen(){
  const navigation = useNavigation();
  const [photoUri, setPhotoUri] = useState(null);
  const [showWarning, setShowWarning] = useState(false); // MARIE: Navngivningen skal opdateres 
  const [showCategory, setShowCategory] = useState(false);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const [isRegularFeedbackVisible, setIsRegularFeedbackVisible] = useState(false); //MARIE: Skal fjernes medmindre vi ender med at bruge den for at lave forskellige beskeder
  const [isRegularPressed, setIsRegularPressed] = useState(false);
  const [isHazardousPressed, setIsHazardousPressed] = useState(false);
  
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
            source={require('../assets/icons/camera-icon.png')}
            style={styles.cameraIcon}
            />
          </TouchableOpacity>
        </View>
  
        {/* CURRENT LOCATION */}
        <View style={styles.subContainer}>
          <Text style={styles.headline2}>Location</Text>
          <Text style={styles.currentLocationAddress}>Address placeholder</Text>
        </View>
  
        {/* CHOOSE TYPE OF WASTE */}
        <View style={styles.subContainer}>
          <Text style={styles.headline2}>Type</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[
                styles.regularWasteButton,
                isRegularPressed && styles.regularButtonPressed,
              ]}
              onPress={() => {
                setShowCategory(true);
                setIsRegularPressed(true);
                setIsHazardousPressed(false);
                setShowWarning(false);
              }}>
              <Text style={styles.buttonText}>Regular</Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              style={[
                styles.hazardousWasteButton,
                isHazardousPressed && styles.hazardousWastePressed, // Skift til 100% opacitet
              ]}
              onPress={() => {
                setShowWarning(true);
                setIsHazardousPressed(true);
                setIsRegularPressed(false);
                setShowCategory(false);
              }}>
              <Text style={styles.buttonText}>Hazardous</Text>
            </TouchableOpacity>
          </View>
  
          {showWarning && (
            <View style={styles.warningRow}>
              <Image
                source={require('../assets/icons/be-aware-icon.png')}
                style={styles.warningIcon}
              />
              <Text style={styles.warningText}>Please avoid picking up hazardous waste - local authorities will handle it instead.</Text>
            </View>
          )}
        </View>
  
        {/* CATEGORY (IF REGULAR WASTE IS CHOSEN) */}
        {showCategory && (
          <View style={styles.categoryContainer}>
            <Text style={styles.headline2}>Category</Text>
            <RegularWasteCategories/>
          </View>
        )}
        {/* REGULAR BUTTON (IF CHOSEN) */}
        {isRegularPressed && (
          <TouchableOpacity
            style={styles.reportRegularWasteButton}
            onPress={() => {
              setIsFeedbackVisible(true);
              navigation.navigate('Map'); 
            }}>
            <Text style={styles.buttonText}>Pick up waste</Text>
          </TouchableOpacity>
        )}
        {/* HAZARDOUS BUTTON (IF CHOSEN) */}
        {showWarning && (
          <TouchableOpacity
          style={styles.reportHazardousWasteButton}
          onPress={() => {
            setIsFeedbackVisible(true);
            navigation.navigate('Map'); 
          }}>
          <Text style={styles.darkButtonText}>Report hazardous waste</Text>
        </TouchableOpacity>
        )}
      </View>
      {/* FEEDBACK MODAL */}
      <ReportFeedback
        visible={isFeedbackVisible}
        onClose={() => {
          setIsFeedbackVisible(false);
          navigation.navigate('Map');
        }}
        XPpoints="+ 100 XP"
        header="Thank you!"
        paragraph="The waste has been reported."
      />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({ //MARIE: Opdater COLORS til at være samme type kode
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
  photoPreview: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  warningIcon: {
    width: 35,
    height: 35, //MARIE: Skal denne være større?
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
  },
  hazardousWasteButton: {
    backgroundColor: 'rgba(225, 15, 30, 0.4)',
    borderRadius: 5,
    padding: 10,
    width: 140,
    height: 45,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
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
    gap: 25,
    width: 250,
    alignSelf: 'center'
  },
  warningText: {
    color: '#E10F1E',
    fontSize: 14,
    marginTop: 10,
  },
  reportHazardousWasteButton: {
    position: 'absolute',
    borderRadius: 35,
    height: 55,
    width: 270,
    alignSelf: 'center',
    justifyContent: 'center', 
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    //borderColor: '#85C56C', //MARIE: Skal denne være rød? 
    borderColor: 'rgba(225, 15, 30, 1)', //MARIE: Skal denne være rød? 
    bottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  reportRegularWasteButton: {
    position: 'absolute',
    borderRadius: 35,
    height: 55,
    width: 270,
    alignSelf: 'center',
    justifyContent: 'center', 
    backgroundColor: '#85C56C',
    borderWidth: 2,
    borderColor: '#85C56C',
    bottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  }
});