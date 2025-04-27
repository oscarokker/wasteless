import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, Platform } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import MarkerInformation from "../components/MarkerInformation"
import trash1 from "../assets/trash1.png";
import trash2 from "../assets/trash2.png";
import trash3 from "../assets/trash3.png";
import pinVariant1 from "../assets/pinVariant1.png";

export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [customMarkers, setCustomMarkers] = useState([]);
  const [deleteMarkers, setDeleteMarkers] = useState([]);

  // Add image and icon data
  const markersInfo = [
    {
      id: 1,
      image: trash1,
      title: "Ørestad Nord ",
      address: "2300 Copenhagen Municipality",
      latitude: 55.658499,
      longitude: 12.581227,
    },
    {
      id: 2,
      image: trash2,
      title: "Emil Holms Kanal",
      address: "2300 Copenhagen Municipality",
      latitude: 55.659722,
      longitude: 12.590613,

    },
    {
      id: 3,
      image: trash3,
      title: "Imia Alle",
      address: "2770 Kastrup",
      latitude: 55.620756,
      longitude: 12.528245,
    },
  ];

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  if (errorMsg) {
    return (
      <View style={styles.centered}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text>Fetching location...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
        onPress={(e) => {
          const { latitude, longitude } = e.nativeEvent.coordinate;
          setCustomMarkers([...customMarkers, { latitude, longitude }]);
        }}
      >
        {markersInfo.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude, }}
            image={pinVariant1}
            anchor={{ x: 0.5, y: 1 }}
            calloutAnchor={{ x: 0.5, y: 0 }}
          >
            <Callout tooltip>
              <MarkerInformation
                title={marker.title}
                address={marker.address}
                latitude={marker.latitude}
                longitude={marker.longitude}
                image={marker.image}
              />
            </Callout>
          </Marker>
        ))}

        {/* Custom markers from taps */}
        {customMarkers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker}
            title={`Custom Marker ${index + 1}`}
          />
        ))}
      </MapView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
