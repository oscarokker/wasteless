// MarkerInformation component used for tooltips in the Map screen
// Made by Adam Godkin

import * as React from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
import batteriesIcon from "../assets/icons/WasteCategories/batteries (selected).png";
import bulkyWasteIcon from "../assets/icons/WasteCategories/bulky-waste (selected).png";
import cardboardIcon from "../assets/icons/WasteCategories/cardboard (selected).png";
import cartonsIcon from "../assets/icons/WasteCategories/cartons (selected).png";
import electronicsIcon from "../assets/icons/WasteCategories/electronics (selected).png";
import foodWasteIcon from "../assets/icons/WasteCategories/food-waste (selected).png";
import gardenWasteIcon from "../assets/icons/WasteCategories/garden-waste (selected).png";
import glassIcon from "../assets/icons/WasteCategories/glass (selected).png";
import hazardousWasteIcon from "../assets/icons/WasteCategories/hazardous-waste-warning.png";
import indoorWoodIcon from "../assets/icons/WasteCategories/indoor-wood (selected).png";
import medicineIcon from "../assets/icons/WasteCategories/medicine (selected).png";
import metalIcon from "../assets/icons/WasteCategories/metal (selected).png";
import paperIcon from "../assets/icons/WasteCategories/paper (selected).png";
import plasticIcon from "../assets/icons/WasteCategories/plastics (selected).png";
import residualIcon from "../assets/icons/WasteCategories/residual (selected).png";
import textilesIcon from "../assets/icons/WasteCategories/textiles (selected).png";
import profileJens from "../assets/profile-picture-jens.png";

const wasteIcons = {
  plasticIcon,
  batteriesIcon,
  bulkyWasteIcon,
  cardboardIcon,
  cartonsIcon,
  electronicsIcon,
  foodWasteIcon,
  gardenWasteIcon,
  glassIcon,
  hazardousWasteIcon,
  indoorWoodIcon,
  medicineIcon,
  metalIcon,
  paperIcon,
  residualIcon,
  textilesIcon,
};

const windowWidth = Dimensions.get('window').width;

const MarkerInformation = ({ title, address, image, wasteTypes }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Image
          style={styles.wasteImage}
          resizeMode="cover"
          source={image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.address}>{address}</Text>
          <Text style={styles.timeAgoText}>Cleaned 1 minute ago</Text>
        </View>
      </View>
      <View style={styles.bottomContent}>
        {wasteTypes.map((type) => {
          const iconKey = `${type}Icon`;
          const icon = wasteIcons[iconKey];
          if (!icon) return null;
          return (
            <Image
              key={type}
              style={styles.wasteType}
              resizeMode="cover"
              source={icon}
            />
          );
        })}
        <View style={styles.userInfo}>
          <Image style={styles.profilePicture} resizeMode="cover" source={profileJens} />
          <View>
            <Text style={styles.userName}>Jens Jakobsen</Text>
            <Text style={styles.userLevel}>Level 6</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 16,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    padding: 16,
    gap: 8,
    shadowColor: "#0000001a",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 6,
  },
  topContent: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  wasteImage: {
    height: 104,
    width: 104,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    fontFamily: "Inter-Regular",
  },
  address: {
    color: "#525252",
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
  timeAgoText: {
    color: "#737373",
    fontFamily: "Inter-Regular",
    fontSize: 12,
  },
  bottomContent: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  wasteType: {
    width: 48,
    height: 48,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  profilePicture: {
    width: 40,
    height: 40,
  },
  userName: {
    fontWeight: "500",
    fontFamily: "Inter-Regular",
  },
  userLevel: {
    fontFamily: "Inter-Regular",
  },
});

export default MarkerInformation;
