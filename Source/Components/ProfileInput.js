import React from 'react';
import {TextInput, Text, StyleSheet} from 'react-native';
import Colors from '../Utils/Colors';
import TextStyles from '../Assets/Styles/TextStyles';

const ProfileInput = ({placeholder,onChangeText}) => {
  return (
    <TextInput
    onChangeText={onChangeText}
      placeholder={placeholder}
      
      placeholderTextColor={Colors.white}
      style={styles.Box}></TextInput>
  );
};

export default ProfileInput;

const styles = StyleSheet.create({
  Box: {
    height: 55,
    backgroundColor: 'grey',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    color: 'grey',
    elevation: 5,
    fontFamily: 'Open Sans',
    marginVertical: 7,
  },
});
