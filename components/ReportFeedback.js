import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ReportFeedback = ({ visible, onClose, XPpoints, header, paragraph }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {XPpoints && <Text style={styles.xpPoints}>{XPpoints}</Text>}
          <Text style={styles.header}>{header}</Text>
          <Text style={styles.paragraph}>{paragraph}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  xpPoints: {
    fontSize: 24,
    fontWeight: '600',
    color: '#C0C0C0',
    marginBottom: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1E1E1E',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    color: '#A3A3A3',
    marginBottom: 35,
  },
  closeButton: {
    backgroundColor: '#85C56C',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold', 
    textAlign: 'center',
    },
});

export default ReportFeedback;
