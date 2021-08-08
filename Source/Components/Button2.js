

import React from 'react'
import { View, Text } from 'react-native'

export default function Button2({title}) {
    return (
        <View
        style={{
            paddingHorizontal:20,
            borderColor: '#ffb600'
            ,borderWidth:1,

        }}
        
        >
            <Text>{title}</Text>
        </View>
    )
}



