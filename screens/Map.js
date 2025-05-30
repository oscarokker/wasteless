// Map screen used to find waste
// Made by Adam Godkin

import React, { useEffect, useState, useMemo } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import MarkerInformation from "../components/MarkerInformation";
import waste1 from "../assets/waste_images/waste1.png";
import waste2 from "../assets/waste_images/waste2.png";
import waste3 from "../assets/waste_images/waste3.png";
import waste4 from "../assets/waste_images/waste4.png";
import pinNormalUnselected from "../assets/pin-normal-unselected.png";
import pinHazardousUnselected from "../assets/pin-hazardous-unselected.png";
import PinData from "../data/PinData.json";

const imageMap = { waste1, waste2, waste3, waste4 };

export default function MapScreen() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    // Fetch location for map to work
    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    return;
                }
                const loc = await Location.getCurrentPositionAsync({});
                setLocation(loc.coords);
            } catch (error) {
                setErrorMsg('Error fetching location');
            }
        };
        fetchLocation();
    }, []);

    // Load marker information on intialization
    const markersInfo = useMemo(() => PinData.map(marker => ({
        ...marker,
        image: imageMap[marker.image],
    })), []);

    // Choose pin image based on marker ID
    const getPinImage = (markerId) => {
        return markerId === 3 ? pinHazardousUnselected : pinNormalUnselected;
    };

    // Handle error state
    if (errorMsg) {
        return (
            <View style={styles.centered}>
                <Text>{errorMsg}</Text>
            </View>
        );
    }

    // Handle map loading state
    if (!location) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" />
                <Text>Fetching location...</Text>
            </View>
        );
    }

    // Render map with markers
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
                showsUserLocation
            >
                {markersInfo.map(marker => (
                    <Marker
                        key={marker.id}
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        anchor={{ x: 0.5, y: 1 }}
                        calloutAnchor={{ x: 0.5, y: 0 }}
                    >
                        <Image
                            source={getPinImage(marker.id)}
                            style={{ width: 32, height: 32 }}
                        />
                        <Callout tooltip>
                            <MarkerInformation
                                title={marker.title}
                                address={marker.address}
                                latitude={marker.latitude}
                                longitude={marker.longitude}
                                image={marker.image}
                                wasteTypes={marker.wasteTypes}
                            />
                        </Callout>
                    </Marker>
                ))}
            </MapView>
        </View>
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
