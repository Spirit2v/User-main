import React,{useState} from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { useColorModeValue } from 'native-base';
import { borderColor } from 'styled-system';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Checkbox from './Checkbox';

export default function RentingButton({text,value}) {
  const [checked, onChange] = useState(false);

  function onCheckmarkPress() {
    onChange(!checked);
  }
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
    return (
        <View style={{height:50,
            borderRadius:5,width:'100%',
         marginTop:-10,

            alignItems:'flex-start',
            justifyContent:'flex-start',
           
            padding:10,
            borderColor:'grey',
        flexDirection:'row'

        }}>
    <Checkbox />

            <Text
            style={{color:'#B4B9BF',marginLeft:26,marginTop:6}}
            >{text}</Text>
              
        </View>
    )
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



});