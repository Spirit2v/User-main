import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../Utils/Colors';
import TextStyles from '../Assets/Styles/TextStyles';
import Arrow_button from './Arrow_button';
import ArrowDownward from './ArrowDownward';
import {
  Menu,
  Button,
  VStack,
  Select,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base"
import SelectDropdown from 'react-native-select-dropdown'
import CheckBox from 'react-native-check-box';
import Checkbox from './Checkbox';
const ServiceCardSand = ({title,Placehold}) => {
  return (
    
    <SelectDropdown
    data={<CheckBox /> && title}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index)
    }}
    buttonTextStyle={{color:'white',fontSize:14,marginLeft:'-52%'}}
    buttonStyle={
      { width: '100%',
      height: 53,
      backgroundColor: Colors.blackBlue,
      borderRadius: 10,
     
      padding: 8,
      shadowColor: "white",   
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      marginBottom:17,
      elevation: 8,
      marginBottom:20
    }}
    rowStyle={{}}
    renderDropdownIcon={()=> <ArrowDownward/>}
    dropdownIconPosition = "right"
    buttonTextAfterSelection={(selectedItem, index) => {
      // text represented after item is selected
      // if data array is an array of objects then return selectedItem.property to render after item is selected
      return selectedItem
    }}
    rowTextForSelection={(item, index) => {
      // text represented for each item in dropdown
      // if data array is an array of objects then return item.property to represent item in dropdown
      return item
    }}
  />
  
  );
};

export default ServiceCardSand;

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 53,
    backgroundColor: Colors.blackBlue,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    shadowColor: "white",
          

      
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    marginBottom:17,
    elevation: 8,
    marginBottom:20
  },
});
