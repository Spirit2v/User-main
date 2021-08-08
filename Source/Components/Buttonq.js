import React from 'react'
import { View, Text } from 'react-native'

export default function Buttonq({title,hi,wi}) {
    return (
        <View
        style={{borderRadius:3,backgroundColor:'#ffb600',height:hi,width:wi,alignItems:'center',justifyContent:'center'}}
        >
            <Text
            
            >{title}</Text>
        </View>
    )
}
