import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SocialIcons() {
    return (
        <View
        style={{
          flexDirection: 'row',
      
         marginVertical:12
        }}>
      

      <TouchableOpacity
          style={{marginRight: 10}}>
            <Ionicons name="logo-facebook" size={22} color="#ffb600" />
          </TouchableOpacity>
        
        <TouchableOpacity
       style={{marginHorizontal: 10}}>
         <Ionicons name="logo-instagram" size={22} color="#ffb600" />
       </TouchableOpacity>
        <TouchableOpacity
          style={{marginHorizontal: 10}}>
            <Ionicons name="logo-twitter" size={22} color="#ffb600" />
            </TouchableOpacity>
        <TouchableOpacity
          style={{marginHorizontal: 10}}>
          <Ionicons name="logo-linkedin" size={22} color="#ffb600" />
          </TouchableOpacity>
     
     
      </View>
    )
}
