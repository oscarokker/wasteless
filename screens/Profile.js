import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// ProfileHeader Component
const ProfileHeader = () => (
  <View style={styles.profileHeader}>
    <View style={styles.profilePictureAndName}>
      <Image source={require('../assets/profile-picture-1.png')} style={styles.profilePicture} />
      <Text style={styles.profileName}>Amalie Jørgensen</Text>
    </View>
    <View style={styles.playerLevel}>
      <View style={styles.levelAndTitle}>
        <Text style={styles.levelText}>Lv 17</Text>
        <Text style={styles.playerTitleText}>Native Wastelander</Text>
      </View>
      <View style={styles.XPBar}>
        <View style={styles.XPProgressBar} />
        <View style={styles.XPLabelContainer}>
          <Text style={styles.XPEarnedText}>2410</Text>
          <Text style={styles.XPRequiredText}>/3800 XP</Text>
        </View>
      </View>
    </View>
  </View>
);

// UserStat Component
const UserStat = ({ title, number, unit }) => (
  <View style={styles.userStat}>
    <Text style={styles.statTitle}>{title}</Text>
    <View style={styles.statIcon} />
    <View style={styles.statAmountAndUnit}>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statUnit}>{unit}</Text>
    </View>
  </View>
);

// PickedUpWaste Component
const PickedUpWaste = () => (
  <View style={styles.pickedUpWaste}>
    <View style={styles.wasteImage} />
    <View style={styles.wasteDetails}>
      <View style={styles.iconContainer}>
        <View style={styles.checkIcon} />
        <View style={styles.fuelIcon} />
      </View>
      <Text style={styles.wasteTime}>Cleaned 4 minutes ago</Text>
    </View>
  </View>
);

// Profile screen
const Profile = () => {
  return (
    <View style={styles.profileContainer}>
      <ProfileHeader />
      <View style={styles.statsContainer}>
        <UserStat title="Trash collected" number="749" unit="Unit" />
        <UserStat title="Total trash weight" number="484" unit="kg" />
        <UserStat title="CO2e avoided" number="327" unit="kg" />
        <UserStat title="Distance walked" number="238" unit="km" />
      </View>
      <Text style={styles.previousWasteText}>Previous waste collected</Text>
      <PickedUpWaste />
      <PickedUpWaste />
    </View>
  );
};

// Profile styling
const styles = StyleSheet.create({
  profileContainer: {
    padding: 16,
    paddingBotoom: 64,
    gap: 32,
  },
  profileHeader: {
    flexDirection: 'column',
    alignItems: 'left',
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
    fontWeight: 500,
    color: '#333333',
  },
  playerLevel: {
    flexDirection: 'column',
    gap: 8,
  },
  levelAndTitle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  levelText: {
    fontSize: 20,
    fontWeight: 700,
    color: '#000000',
  },
  playerTitleText: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#000000',
  },
  XPBar: {
    height: 8,
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    gap: 4,
  },
  XPProgressBar: {
    width: '64%',
    height: '100%',
    backgroundColor: '#007BFF',
    borderRadius: 4,
  },
  XPLabelContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  XPEarnedText: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'left',
  },
  XPRequiredText: {
    fontSize: 10,
    color: '#333333',
    textAlign: 'left',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 8,
  },
  userStat: {
    width: 176,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    elevation: 2,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
  },
  statTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: '#355231',
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#355231',
  },
  statAmountAndUnit: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    lineHeight: '120%',
    fontWeight: 700,
    color: '#333333',
  },
  statUnit: {
    fontSize: 12,
    lineHeight: '140%',
    color: '#333333',
  },
  previousWasteText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    paddingHorizontal: 16,
  },
  pickedUpWaste: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 12,
    elevation: 2,
  },
  wasteImage: {
    width: 120,
    height: 80,
    backgroundColor: '#ccc', // Placeholder
  },
  wasteDetails: {
    flex: 1,
    padding: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  checkIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#2E7D32',
    borderRadius: 12,
  },
  fuelIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#800080',
    borderRadius: 12,
  },
  wasteTime: {
    fontSize: 12,
    color: '#666666',
  },
});

export default Profile;
