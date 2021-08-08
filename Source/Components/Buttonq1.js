import React from 'react'
import { View, Text } from 'react-native'

export default function Buttonq1({title,hi,wi}) {
    return (
        <View
        style={{borderRadius:3,borderColor:'#ffb600',borderWidth:1,height:hi,width:wi,justifyContent:'center',alignItems:'center'}}
        >
            <Text
            style={{color:'#ffb600'}}
            >{title}</Text>
        </View>
    )
}
