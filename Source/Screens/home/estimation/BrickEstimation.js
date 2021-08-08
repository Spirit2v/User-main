import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header_Component from '../../../Components/Header_Component'

export default function BrickEstimation() {
    const navigation = useNavigation()
    return (
        <View
        style={{backgroundColor: '#121417', flex: 1}}>
            <Header_Component 
            Heading="Brick Estimation" />
            <ScrollView>
<Text
style={{color:'white'}}
>
    Room Area Calculation
</Text>
            </ScrollView>
            
        </View>
    )
}
