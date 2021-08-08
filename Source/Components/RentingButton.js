import React from 'react';
import {View, Text} from 'react-native';
import Checkbox from './Checkbox';


export default function RentingButton({text,h, value}) {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  return (
    <View
      style={{
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
      }}>

      <Text style={{color: 'white',fontSize:16}}>

        {text}</Text>
      {  h===true ?
      <Text
      style={{color:'white'}}
      ></Text> 

     
     :
     <Checkbox />
     }
    
     
    </View>
  );
}
