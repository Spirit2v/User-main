import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../Utils/Colors';

const Button = ({style = {}, textStyle = {}, size = 90, ...props}) => {
  return (
    <TouchableOpacity style={[styles(size).Area, style]} onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

styles = size =>
  StyleSheet.create({
    Area: {
      height: size / 2,
      width: size,
      borderColor: 'white',
      shadowColor: "white",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      
      elevation: 24,
      elevation: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffb600',
      borderRadius: 5,
    },
    text: {
      color: Colors.blackBlue,
      fontSize: size / 6,
      fontWeight: '600',
    },
  });
