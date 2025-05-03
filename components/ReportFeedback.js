import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ReportFeedback = ({ visible, onClose, XPpoints, header, paragraph}) => {
    return (
        <Modal
            animationType="fade" //MARIE: SLIDE OG NONE ER OGSÅ MULIGE SOM ANIMATION
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.plusXPtext}>{XPpoints}</Text>
                    <Text style={styles.modalHeader}>{header}</Text>
                    <Text style={styles.modalParagraph}>{paragraph}</Text>
                    <TouchableOpacity style={styles.closeModalButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    modalContainer: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingTop: 30,
        paddingBottom: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    plusXPtext: {
        fontSize: 24,
        color: '#C0C0C0',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    modalHeader: {
        color: 'black',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center', 
        marginBottom: 20,
    },
    modalParagraph: {
        color: '#969696',
        fontSize: 18,
        marginBottom: 20,
    }, 
    closeModalButton: {
        backgroundColor: '#85C56C',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: '40%',
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold', 
        textAlign: 'center',
    },
});

export default ReportFeedback;