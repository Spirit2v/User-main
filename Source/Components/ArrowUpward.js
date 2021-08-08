import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Utils/Colors';
import TextStyles from '../Assets/Styles/TextStyles';

const ArrowUpward = () => {
  return (
    <View style={styles.Iconview}>
      <Ionicons
        name="chevron-up-outline"
        size={16}
        color={Colors.yellow}
      />
    </View>
  );
};

export default ArrowUpward;

const styles = StyleSheet.create({
  Iconview: {
    height: 24,
    width: 24,
    backgroundColor: Colors.blackBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    shadowColor: Colors.lightgrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
