import React from 'react';
import {TextInput, Text, StyleSheet} from 'react-native';
import Colors from '../Utils/Colors';
import TextStyles from '../Assets/Styles/TextStyles';

const InputText = ({placeholder,height,width}) => {
  return (
    <TextInput
      placeholder={placeholder}
      height={height}
      width={width}

      placeholderTextColor={Colors.white}
      style={styles.Box}></TextInput>
  );
};

export default InputText;

const styles = StyleSheet.create({
  Box: {
    color:'white',
    height: 55,
    marginTop:1,
    backgroundColor: Colors.blackBlue,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal:20,
    shadowColor: "white",   
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      marginBottom:17,
      elevation: 8,
    
    fontFamily: 'Open Sans',
    marginVertical: 7,
  },
});
