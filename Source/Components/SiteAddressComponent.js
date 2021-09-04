import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function SiteAddressComponent() {
  return (
    <View
      style={{
        backgroundColor: 'grey',
        height: 90,
        width: '100%',
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        paddingHorizontal:34,
        borderRadius:4
        ,marginVertical:12
      }}>
      <View
         style={{width:'65%'}}
      
      >
        <Text style={{color: 'white'}}>Site Address A</Text>
        <Text style={{color: 'white'}}>Aurora building , XYZ Earth</Text>
      </View>
      <View
       style={{width:'10%'}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#FFB600',
            height: 43,
            width: 48,

            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
      
          }}>
          <Ionicons name="pencil-outline" size={18} color="black" />
          <Text style={{marginLeft: -11, color: 'black'}}>_</Text>
        </View>
      </View>
      <View
      style={{width:'10%', marginLeft:22
    }}
      >
        <View
          style={{
            borderColor: 'red',
            borderWidth: 1,
            borderRadius: 5,
            height: 43,
            width: 48,
            justifyContent: 'center',
            alignItems: 'center',
           
          }}>
          <Ionicons name="trash" size={25} color="red" />
        </View>
      </View>
    </View>
  );
}
