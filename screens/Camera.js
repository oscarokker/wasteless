// Camera screen for capturing pictures of reported waste
// Made by Magnus Schou

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useNavigation } from '@react-navigation/native';

export default function CameraScreen() {
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();
  const [facing, setFacing] = useState('back');
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (!cameraPermission) requestCameraPermission();
    if (!mediaPermission) requestMediaPermission();
  }, []);

  const takePhoto = async () => {
    const photo = await cameraRef.current?.takePictureAsync();
    if (photo?.uri) {
      await MediaLibrary.saveToLibraryAsync(photo.uri);
      console.log('Saved to library:', photo.uri);
      navigation.navigate('ReportWaste', { photoUri: photo.uri });
    }
  };

  if (!cameraPermission?.granted || !mediaPermission?.granted) {
    return (
      <View style={styles.center}>
        <Text>Waiting for camera and media permissions...</Text>
      </View>
    );
  }

  // Render Camera
  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        <TouchableOpacity
        style={styles.flipButton}
        onPress={() => setFacing(f => (f === 'back' ? 'front' : 'back'))}>
          <Text style={styles.ctrlText}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.takePhotoButton} onPress={takePhoto}>
            <Text style={styles.ctrlText}>Snap</Text>
          </TouchableOpacity>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 24,
    //backgroundColor: 'rgba(0,0,0,0.4)', // TODO: Test that alpha works for hex code colors
    backgroundColor: '#00000066',
  },
  flipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
    borderRadius: 8,
    //backgroundColor: 'rgba(0,0,0,0.4)',
    backgroundColor: '#00000066',
  },  
  takePhotoButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    //backgroundColor: 'rgba(120, 120, 120, 0.6)',
    backgroundColor: '#78787899',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  ctrlText: {
    color: '#fff',
    fontSize: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
