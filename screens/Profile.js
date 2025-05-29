// Profile screen used to display the user's stats and progress
// Made by Oscar Rode

import React from 'react';
import { ScrollView, Dimensions, View, Text, StyleSheet } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import UserStat from '../components/UserStat';
import CollectedWaste from '../components/CollectedWaste';
import wasteCollected from "../assets/icons/waste-collected-icon.png";
import wasteWeight from "../assets/icons/waste-weight-icon.png";
import co2eAvoided from "../assets/icons/co2e-avoided-icon.png";
import distanceWalked from "../assets/icons/distance-walked-icon.png";
import waste1 from "../assets/waste_images/waste1.png";
import waste2 from "../assets/waste_images/waste2.png";
import waste3 from "../assets/waste_images/waste3.png";
import waste4 from "../assets/waste_images/waste4.png";

const Profile = () => {
  const screenWidth = Dimensions.get('window').width;
  const paddingHorizontal = 16;
  const gap = 8;
  const availableWidth = screenWidth - 2 * paddingHorizontal;
  const userStatWidth = (availableWidth - gap) / 2;

  // Render profile
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
    >
      <ProfileHeader />
      <View style={styles.statsContainer}>
        <UserStat
          title="Waste collected"
          iconSource={wasteCollected}
          number="449"
          unit="pieces"
          width={userStatWidth}
        />
        <UserStat
          title="Waste weight"
          iconSource={wasteWeight}
          number="484"
          unit="kg"
          width={userStatWidth}
        />
        <UserStat
          title="CO2e avoided"
          iconSource={co2eAvoided}
          number="327"
          unit="kg"
          width={userStatWidth}
        />
        <UserStat
          title="Distance walked"
          iconSource={distanceWalked}
          number="238"
          unit="km"
          width={userStatWidth}
        />
      </View>
      <View style={styles.wasteCollected}>
        <Text style={styles.headline2}>Collected Waste</Text>
        <CollectedWaste imageSource={waste1} minutesAgo="4" />
        <CollectedWaste imageSource={waste2} minutesAgo="11" />
        <CollectedWaste imageSource={waste3} minutesAgo="84" />
        <CollectedWaste imageSource={waste4} minutesAgo="91" />
      </View>
    </ScrollView>
  );
};

// Style profile
const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 64,
    paddingBottom: 64,
    flexDirection: 'column',
    gap: 32,
    backgroundColor: '#FFFFFF',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 8,
  },
  wasteCollected: {
    gap: 8,
  },
  headline2: {
    color: '313131',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
});

export default Profile;
