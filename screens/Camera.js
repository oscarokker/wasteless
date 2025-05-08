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
      navigation.goBack(); // NAVIGATES BACK TO ReportWasteScreen
    }
  };

  if (!cameraPermission?.granted || !mediaPermission?.granted) {
    return (
      <View style={styles.center}>
        <Text>Waiting for camera and media permissions...</Text>
      </View>
    );
  }

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
  container: { flex: 1, backgroundColor: '#000' },
  camera: { flex: 1, justifyContent: 'flex-end' },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 24,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  flipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
    borderRadius: 8,
  },  
  takePhotoButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: 'rgba(123, 120, 120, 0.6)',
    width: 70,
    height: 70,
    borderRadius: 35,
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