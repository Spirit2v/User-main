import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function BlackBox() {
    return (
        <View
        style={{
          height:53,
          width:'100%',
          backgroundColor:'#08090C',
          borderRadius:12,
          flexDirection:'row',
          justifyContent:'space-between'
          ,
          padding:13,
          paddingHorizontal:30
        }}
        >
            <Ionicons name="remove-circle-outline" size={25} color='#ffb600' />
         <Text
         style={{color:'white',fontSize:16}}
         >
           Quantity
         </Text>
         <Ionicons name="add-circle-outline" size={25} color='#ffb600' />
        </View>
    )
}
