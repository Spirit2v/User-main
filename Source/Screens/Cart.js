import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import Buttonq from '../Components/Buttonq';
import Buttonq1 from '../Components/Buttonq1';
import CartCard from '../Components/CartCard';
import Header_Component from '../Components/Header_Component';

export default function Cart({navigation}) {
  return (
    <View style={{backgroundColor: '#121417', flex: 1}}>
      <Header_Component Heading="Cart" />
      <ScrollView style={{backgroundColor: '#121417', padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 23,
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            Order Detail
          </Text>
          <Text
            style={{
              color: 'grey',
            }}>
            19 March ,2021
          </Text>
        </View>
        <Text
          style={{
            color: 'white',
            margin: 12,
          }}>
          2 PRODUCT
        </Text>

        <CartCard />
        <CartCard />

      </ScrollView>
      <View
      style={{paddingHorizontal:30,marginVertical:42}}
      >
          <TouchableOpacity
          onPress={()=>navigation.navigate('CartSecond')}
          >
 <Buttonq
      title="Continue"
      hi={45}
      wi={'100%'}
      />
      </TouchableOpacity>
      </View>
     
    </View>
  );
}
