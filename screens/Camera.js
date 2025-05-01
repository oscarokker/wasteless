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
      navigation.goBack(); // Gå tilbage til ReportWasteScreen
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
        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.ctrlButton}
            onPress={() => setFacing(f => (f === 'back' ? 'front' : 'back'))}>
            <Text style={styles.ctrlText}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ctrlButton} onPress={takePhoto}>
            <Text style={styles.ctrlText}>Snap</Text>
          </TouchableOpacity>
        </View>
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
  ctrlButton: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
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