import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import wasteCollected from "../assets/icons/waste-collected-icon.png";
import wasteWeight from "../assets/icons/waste-weight-icon.png";
import co2eAvoided from "../assets/icons/co2e-avoided-icon.png";
import distanceWalked from "../assets/icons/distance-walked-icon.png";
import waste1 from "../assets/waste_images/waste1.png";
import waste2 from "../assets/waste_images/waste2.png";
import waste3 from "../assets/waste_images/waste3.png";
import waste4 from "../assets/waste_images/waste4.png";

// Map user stat icons to an array
const userStatIcons = {
  wasteCollected,
  wasteWeight,
  co2eAvoided,
  distanceWalked,
};

// Map waste images to an array
const wasteImages = {
  waste1,
  waste2,
  waste3,
  waste4,
};

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

// UserStat Component
const UserStat = ({ title, icon, number, unit, width }) => (
  <View style={[styles.userStat, { width }]}>
    <Text style={styles.statTitle}>{title}</Text>
    <Image source={userStatIcons[icon]} style={styles.statIcon} />
    <View style={styles.statAmountAndUnit}>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statUnit}>{unit}</Text>
    </View>
  </View>
);

// PickedUpWaste Component
const PickedUpWaste = ({ image, minutesAgo }) => (
  <View style={styles.pickedUpWaste}>
    <Image source={wasteImages[image]} style={styles.wasteImage} />
    <View style={styles.wasteDetails}>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/food-waste-icon.png')} style={styles.wasteTypeIcon} />
        <Image source={require('../assets/plastic-waste-icon.png')} style={styles.wasteTypeIcon} />
      </View>
      <View style={styles.timeAgo}>
        <Image source={require('../assets/clock-icon.png')} />
        <Text style={styles.wasteTime}>{minutesAgo} min ago</Text>
      </View>
    </View>
  </View>
);

// Profile screen
const Profile = () => {
  const screenWidth = Dimensions.get('window').width;
  const paddingHorizontal = 16;
  const gap = 8;
  const availableWidth = screenWidth - 2 * paddingHorizontal;
  const userStatWidth = (availableWidth - gap) / 2;

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 64,
        flexDirection: 'column',
        gap: 32,
      }}
    >
      <ProfileHeader />
      <View style={styles.statsContainer}>
        <UserStat title="Waste collected" icon="wasteCollected" number="449" unit="pieces" width={userStatWidth} />
        <UserStat title="Total waste weight" icon="wasteWeight" number="484" unit="kg" width={userStatWidth} />
        <UserStat title="CO2e avoided" icon="co2eAvoided" number="327" unit="kg" width={userStatWidth} />
        <UserStat title="Distance walked" icon="distanceWalked" number="238" unit="km" width={userStatWidth} />
      </View>
      <View style={styles.wasteCollected}>
        <Text style={styles.collectedWasteText}>Collected Waste</Text>
        <PickedUpWaste image="waste1" minutesAgo="4" />
        <PickedUpWaste image="waste2" minutesAgo="11" />
        <PickedUpWaste image="waste3" minutesAgo="84" />
        <PickedUpWaste image="waste4" minutesAgo="91" />
      </View>
    </ScrollView>
  );
};

// Profile styling
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
    fontWeight: 500,
    color: '#333333',
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
    fontWeight: 700,
    color: '#000000',
  },
  playerTitleText: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#000000',
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
    backgroundColor: '#007BFF',
    borderRadius: 4,
  },
  XPLabelContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  XPEarnedText: {
    fontSize: 14,
    fontWeight: 500,
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
    height: 160,
    alignItems: 'center',
    justifyContent: 'space-between',
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
    width: 48,
    height: 48,
  },
  statAmountAndUnit: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    lineHeight: 21.6, // 120%
    fontWeight: 700,
    color: '#333333',
  },
  statUnit: {
    fontSize: 12,
    lineHeight: 16.8, // 140%
    color: '#333333',
  },
  collectedWasteText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    paddingHorizontal: 16,
  },
  wasteCollected: {
    gap: 16,
  },
  pickedUpWaste: {
    flexDirection: 'row',
    gap: 8,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
    overflow: 'hidden',
    elevation: 2,
  },
  wasteImage: {
    width: 80,
    height: 80,
    backgroundColor: '#ccc', // TODO: replace with images of waste
  },
  wasteDetails: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 4,
  },
  wasteTypeIcon: {
    borderRadius: 4,
  },
  timeAgo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  wasteTime: {
    fontSize: 12,
    lineHeight: 16.8, // 140%
    color: '#666666',
  },
});

export default Profile;
