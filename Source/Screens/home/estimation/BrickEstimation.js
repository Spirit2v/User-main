import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Dropdown from '../../../Components/Dropdown';
import Header_Component from '../../../Components/Header_Component';

export default function BrickEstimation() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#121417', flex: 1}}>
      <Header_Component Heading="Brick Estimation" />
      <ScrollView>
        <View style={{padding: 20}}>
          <Text style={{color: 'white', marginBottom: 20}}>
            Room Area Calculation
          </Text>
          <Text style={{color: 'white'}}>Room 1</Text>
         
        </View>
      </ScrollView>
    </View>
  );
}
