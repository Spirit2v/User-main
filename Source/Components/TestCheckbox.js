import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useColorModeValue} from 'native-base';
import {borderColor} from 'styled-system';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TestCheckbox({text, value,Callbackfunctio}) {
  

  const [checked, onChange] = useState(false);
const [Clay, setClay] = useState('')
  function onCheckmarkPress() {
    onChange(!checked);
    {!checked ? (
 
      Callbackfunctio(value)

    
      
      )
: (
  
  Callbackfunctio('')
)

    }

  }
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={onCheckmarkPress}>
        {checked && <Ionicons name="checkmark" size={24} color="#00FF00" />
        
        }
      </TouchableOpacity>
      <Text
      style={{color:'white'}}
      >{Clay}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 0,

    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    backgroundColor: 'transparent',
  },

  cont: {
    shadowColor: 'grey',

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8.65,
    marginBottom: 17,
    elevation: 8,
    justifyContent: 'center',

    height: 20,
    borderRadius: 3,
    width: 20,
    borderColor: 'grey',
    borderWidth: 1,
  },
});
