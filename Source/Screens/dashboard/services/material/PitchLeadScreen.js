import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import {StyleSheet, View, Text} from 'react-native';
import AddtoCard from '../../../../Components/AddtoCard';
import Buttonq1 from '../../../../Components/Buttonq1';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';

export default function PitchLeadScreen() {
  const puttyTypes = [
    {id: '1', title: 'Whoye Cement Wall Putty'},
    {id: '2', title: 'Acrylic Wall Putty'},
    {id: '3', title: 'POP'},
  ];
  const puttyBrand = [
    {id: '1', title: 'Birla wallcare Putty'},
    {id: '2', title: 'Jk Protomac Acryllic Wall Putty'},
    {id: '3', title: 'Jk Cement '},
    {id: '4', title: 'Iris Paint Wall Putty'},
    {id: '5', title: 'Asian Paint'},
    {id: '6', title: 'Bird White'},
    {id: '7', title: 'Dulux Paint'},
    {id: '8', title: 'VV Paint'},
  ];
  return (
    <View style={styles.container}>
      <View style={{height: 20}}></View>
      <DropdownCheckbox Types={puttyTypes} placeholder="Select Types" />
      <DropdownCheckbox Types={puttyBrand} placeholder="Select brands" />
      <DropdownCheckbox Types={puttyBrand} placeholder="Trade" />

      <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <AddtoCard />

          <View style={{paddingHorizontal: 10}}></View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Request');
            }}>
            <Buttonq1
              onPress={() => {
                navigation.navigate('Request');
              }}
              title="Request"
              hi={42}
              wi={78}
            />
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121417',
    padding: 10,
  },
  card: {
    flex: 1 / 4,
    borderWidth: 0.1,
    borderColor: 'grey',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'grey',
    width: '50%',
    textAlign: 'center',
    lineHeight: 18,
  },
  subTitle: {
    color: 'white',
    fontSize: 16,
    marginTop: 30,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
    marginVertical: 5,
  },
});
