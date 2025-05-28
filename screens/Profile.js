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

//Behøver man importere alt dette opover?

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
        <Image source={require('../assets/icons/WasteCategories/metal (selected).png')} style={styles.wasteTypeIcon} />
        <Image source={require('../assets/icons/WasteCategories/plastics (selected).png')} style={styles.wasteTypeIcon} />
      </View>
      <View style={styles.timeAgo}>
      <Image
      source={require('../assets/icons/time-ago-icon.png')}
      style={styles.timeAgoIcon}
      />
        <Text style={styles.pickupTime}>{minutesAgo} min ago</Text>
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
        <UserStat title="Waste Collected" icon="wasteCollected" number="449" unit="pieces" width={userStatWidth} />
        <UserStat title="Total Waste" icon="wasteWeight" number="484" unit="kg" width={userStatWidth} />
        <UserStat title="CO2e Avoided" icon="co2eAvoided" number="327" unit="kg" width={userStatWidth} />
        <UserStat title="Distance Walked" icon="distanceWalked" number="238" unit="km" width={userStatWidth} />
      </View>
      <View style={styles.wasteCollected}>
        <Text style={styles.headline2}>Your Reported Waste</Text>
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
    fontSize: 20,
    color: '313131',
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
    fontWeight: 'bold',
    color: '#313131',
  },
  playerTitleText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#313131',
  },
  XPBar: {
    width: '100%',
    gap: 5,
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
    fontWeight: 'bold',
    color: '#313131',
    textAlign: 'left',
  },
  XPRequiredText: {
    fontSize: 12,
    color: '#313131',
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
    color: '#313131',
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
    color: '#313131',
  },
  statUnit: {
    fontSize: 12,
    lineHeight: 16.8, // 140%
    color: '#313131',
  },
  headline2: {
    color: '313131',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,  
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
    backgroundColor: '#ccc', // TODO: replace with images of waste - er dette gjort? 
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
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  timeAgoIcon: {
    width: 20,
    height: 20,
  },
  timeAgo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  pickupTime: {
    color: '#969696',
    fontSize: 14,
    marginLeft: 10,
  },
});

export default Profile;
