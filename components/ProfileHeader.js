// Profile header component used at the top of the Profile screen
// Made by Oscar Rode

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileHeader = () => (
  <View style={styles.profileHeader}>
    <View style={styles.profilePictureAndName}>
      <Image source={require('../assets/profile-picture-1.png')} style={styles.profilePicture} />
      <Text style={styles.profileName}>Amalie Jørgensen</Text>
    </View>
    <View style={styles.playerLevel}>
      <View style={styles.levelAndTitle}>
        <Text style={styles.levelText}>Level 17</Text>
        <Text style={styles.playerTitleText}>Native Wastelander</Text>
      </View>
      <View style={styles.XPBar}>
        <View style={styles.XPBarFull}>
          <View style={styles.XPBarEarned} />
        </View>
        <View style={styles.XPLabelContainer}>
          <Text style={styles.XPEarnedText}>2410</Text>
          <Text style={styles.XPRequiredText}>/3800 XP</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  profileHeader: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
  },
  profilePictureAndName: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  profilePicture: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#313131',
  },
  playerLevel: {
    flexDirection: 'column',
    width: '100%',
    gap: 8,
  },
  levelAndTitle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  levelText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#313131',
  },
  playerTitleText: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#313131',
  },
  XPBar: {
    width: '100%',
    gap: 4,
  },
  XPBarFull: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
  },
  XPBarEarned: {
    width: '64%',
    height: '100%',
    backgroundColor: '#85C56C',
    borderRadius: 4,
  },
  XPLabelContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  XPEarnedText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#313131',
    textAlign: 'left',
    marginTop: 4,
  },
  XPRequiredText: {
    fontSize: 12,
    color: '#313131',
    textAlign: 'left',
  },
});

export default ProfileHeader;
