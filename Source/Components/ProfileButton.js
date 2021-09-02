import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function ProfileButton({icon,text}) {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        height: 51,
        width: '100%',
        backgroundColor: 'grey',
        marginBottom: 14,
        borderRadius:3,
        flexDirection:'row'
        ,alignContent:'center',
        alignItems:'center',
        paddingHorizontal:12
      }}>
      <View
      style={{flexDirection:'row'}}
      >
      <Ionicons name={icon} size={18} color='white' />
<Text
style={{color:'white',marginLeft:7}}
>

    {text}
</Text>

      </View>
      <View>
        
      <Ionicons name='chevron-forward-outline' size={18} color='white' />
      </View>
    </View>
  );
}
