// ReportWaste screen used to report waste that the user finds
// Made by Marie Hjorth

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import ReportFeedback from '../components/ReportFeedback';
import RegularWasteCategories from '../components/RegularWasteCategories';

export default function ReportWasteScreen() {
  const navigation = useNavigation();
  const [photoUri, setPhotoUri] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const [isHazardousFeedbackVisible, setIsHazardousFeedbackVisible] = useState(false);
  const [isRegularPressed, setIsRegularPressed] = useState(false);
  const [isHazardousPressed, setIsHazardousPressed] = useState(false);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.warn('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let address = await Location.reverseGeocodeAsync(location.coords);

      if (address.length > 0) {
        const { street, streetNumber, city, country } = address[0];
        const fullAddress = `${street} ${streetNumber}, ${city}, ${country}`;
        setCurrentLocation(fullAddress);
      }
    })();
  }, []);

  const route = useRoute();

  useEffect(() => {
    if (route.params?.photoUri) {
      setPhotoUri(route.params.photoUri);
    }
  }, [route.params?.photoUri]);


  return (
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.headline1}>Add found waste</Text>

        <View style={styles.subContainer}>
          <Text style={styles.headline2}>Waste</Text>
          <TouchableOpacity
            style={styles.placeholderRect}
            onPress={() => navigation.navigate('Camera')}>
            {photoUri ? (
              <Image source={{ uri: photoUri }} style={styles.photoPreview} />
            ) : (
              <Image
                source={require('../assets/icons/camera-icon.png')}
                style={styles.cameraIcon}
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.headline2}>Location</Text>
          <Text style={styles.currentLocationAddress}>
            {currentLocation || 'Searching for location...'}
          </Text>
        </View>

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
              }}
            >
              <Text style={styles.buttonText}>Regular</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.hazardousWasteButton,
                isHazardousPressed && styles.hazardousWastePressed,
              ]}
              onPress={() => {
                setShowWarning(true);
                setIsHazardousPressed(true);
                setIsRegularPressed(false);
                setShowCategory(false);
              }}
            >
              <Text style={styles.buttonText}>Hazardous</Text>
            </TouchableOpacity>
          </View>

          {showWarning && (
            <View style={styles.warningRow}>
              <Image
                source={require('../assets/icons/be-aware-icon.png')}
                style={styles.warningIcon}
              />
              <Text style={styles.warningText}>
                Please avoid picking up hazardous waste - local authorities will handle it instead!
              </Text>
            </View>
          )}
        </View>

        {showCategory && (
          <View style={styles.categoryContainer}>
            <Text style={styles.headline2}>Category</Text>
            <RegularWasteCategories />
          </View>
        )}

        {isRegularPressed && (
          <TouchableOpacity
            style={styles.reportRegularWasteButton}
            onPress={() => {
              setIsFeedbackVisible(true);
              navigation.navigate('Map');
            }}
          >
            <Text style={styles.buttonText}>Pick up waste</Text>
          </TouchableOpacity>
        )}

        {showWarning && (
          <TouchableOpacity
            style={styles.reportHazardousWasteButton}
            onPress={() => {
              setIsFeedbackVisible(false);
              setIsHazardousFeedbackVisible(true);
              navigation.navigate('Map');
            }}
          >
            <Text style={styles.darkButtonText}>Report hazardous waste</Text>
          </TouchableOpacity>
        )}
      </View>

      <ReportFeedback
        visible={isFeedbackVisible}
        onClose={() => {
          setIsFeedbackVisible(false);
          navigation.navigate('Map');
        }}
        XPpoints="+ 200 XP"
        header="Thank you!"
        paragraph="The waste has been reported."
      />

      <ReportFeedback
        visible={isHazardousFeedbackVisible}
        onClose={() => {
          setIsHazardousFeedbackVisible(false);
          navigation.navigate('Map');
        }}
        XPpoints="+ 100 XP"
        header="Thank you!"
        paragraph="The hazardous waste has been reported. Please avoid picking up hazardous waste!"
      />

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
    color: '#313131',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headline2: {
    color: '#313131',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  placeholderRect: {
    height: 150,
    width: '100%',
    backgroundColor: '#F5F5F5',
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
    width: 40,
    height: 40,
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
    backgroundColor: '#85c56c66',
    borderRadius: 5,
    padding: 10,
    width: 140,
    height: 45,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  hazardousWasteButton: {
    backgroundColor: '#e10f1e66',
    borderRadius: 5,
    padding: 10,
    width: 140,
    height: 45,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
  },
  regularButtonPressed: {
    backgroundColor: '#85c56c',
  },
  hazardousWastePressed: {
    backgroundColor: '#e10f1e',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  darkButtonText: {
    color: '#85C56C',
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
    borderColor: '#e10f1e',
    bottom: 25,
    shadowColor: '#000000',
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
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  }
});
