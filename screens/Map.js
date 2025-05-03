import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, Platform } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import MarkerInformation from "../components/MarkerInformation"
import trash1 from "../assets/trash1.png";
import trash2 from "../assets/trash2.png";
import trash3 from "../assets/trash3.png";
import pinNormalUnselected from "../assets/pin-normal-unselected.png";
import pinNormalSelected from "../assets/pin-normal-selected.png";
import pinHazardousSelected from "../assets/pin-hazardous-selected.png";
import pinHazardousUnselected from "../assets/pin-hazardous-unselected.png";

export default function MapScreen() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [selectedMarkerId, setSelectedMarkerId] = useState(null);

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
        {
            id: 4,
            image: trash2,
            title: "Amager Strandpark",
            address: "2300 Copenhagen Municipality",
            latitude: 55.6461,
            longitude: 12.6391,
        },
        {
            id: 5,
            image: trash2,
            title: "Sundbyvester Plads",
            address: "2300 Copenhagen Municipality",
            latitude: 55.6475,
            longitude: 12.5907,
        },
        {
            id: 6,
            image: trash2,
            title: "DR Byen",
            address: "2300 Copenhagen Municipality",
            latitude: 55.6594,
            longitude: 12.5913,
        },
        {
            id: 7,
            image: trash2,
            title: "Amager Centret",
            address: "2300 Copenhagen Municipality",
            latitude: 55.6617,
            longitude: 12.5939,
        },
        {
            id: 8,
            image: trash2,
            title: "Holmbladsgade",
            address: "2300 Copenhagen Municipality",
            latitude: 55.6621,
            longitude: 12.6023,
        },
        {
            id: 9,
            image: trash2,
            title: "Prags Boulevard",
            address: "2300 Copenhagen Municipality",
            latitude: 55.6633,
            longitude: 12.6097,
        },
        {
            id: 10,
            image: trash2,
            title: "Teglholmen",
            address: "2450 Copenhagen SV",
            latitude: 55.6543,
            longitude: 12.5374,
        },
        {
            id: 11,
            image: trash2,
            title: "Islands Brygge",
            address: "2300 Copenhagen Municipality",
            latitude: 55.6592,
            longitude: 12.5775,
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
                onPress={() => setSelectedMarkerId(null)}
            >
                {markersInfo.map((marker) => (
                    <Marker
                        key={marker.id}
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude, }}
                        onPress={() =>
                            setSelectedMarkerId((prev) => (prev === marker.id ? null : marker.id))
                        }
                        image={
                            marker.id === 3
                                ? selectedMarkerId === 3
                                    ? pinHazardousSelected
                                    : pinHazardousUnselected
                                : selectedMarkerId === marker.id
                                    ? pinNormalSelected
                                    : pinNormalUnselected
                        }
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
