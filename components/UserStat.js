// UserStat component used in the Profile screen
// Made by Oscar Rode

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserStat = ({ title, iconSource, number, unit, width }) => (
  <View style={[styles.userStat, { width }]}>
    <Text style={styles.statTitle}>{title}</Text>
    <Image source={iconSource} style={styles.statIcon} />
    <View style={styles.statAmountAndUnit}>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statUnit}>{unit}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  userStat: {
    height: 160,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    elevation: 2,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statTitle: {
    fontSize: 16,
    fontWeight: '700',
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
    lineHeight: 21.6,
    fontWeight: '700',
    color: '#333333',
  },
  statUnit: {
    fontSize: 12,
    lineHeight: 16.8,
    color: '#333333',
  },
});

export default UserStat;
