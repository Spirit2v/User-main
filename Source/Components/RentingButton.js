import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Checkbox from './Checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RentingButton({text,h,Callbackfunctio, value}) {

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
    <View
      style={styles.wrap}>

      <Text style={{color: 'white',fontSize:16}}>

        {text}</Text>
      {  h===true ?
      <Text
      style={{color:'white'}}
      ></Text> 

     
     :
     <View style={styles.cont}>
     <TouchableOpacity
       style={[styles.checkboxBase, checked && styles.checkboxChecked]}
       onPress={onCheckmarkPress}>
       {checked && <View
       style={{backgroundColor:'#ffb600',   width: 18,
       height: 18,    justifyContent: 'center',
       alignItems: 'center',}}
       >

       </View>
       
       }
     </TouchableOpacity>

   </View>
     }
    
     
    </View>
  );
}
const styles=StyleSheet.create({
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
  wrap:{
    height: 61,
    borderRadius: 14,
    width: '100%',
    shadowColor: 'white',

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8.65,
    marginBottom: 17,
    elevation: 8,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    padding: 20,
    borderColor: 'grey',
    flexDirection: 'row',
  }
})