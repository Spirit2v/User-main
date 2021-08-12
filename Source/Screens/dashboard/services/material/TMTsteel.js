import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../.././../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
import AddtoCard from '../../../../Components/AddtoCard';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
export default function TMTsteel({navigation}) {
  const Brand = [
    'Select All',
    'TATA TMT Steel',
    'Vizag TMT Steel',
    'Jindal TMT Steel',
    'Simhadri TMT Steel',
    'Mangal TMT Steel',
    'Essar Steel',
    'Mesco Steel',
    'SRMB Steel',
    'SAIL Steel',
    'Kamdhenu Steel',
    'Vinayak Steel',
    'Visa Steel',
  ];
  const Grades = [
    'Select All',
    'Fe 450',
    'Fe 500',
    'Fe 500D',
    'Fe 550',
    'Fe 550D',
  ];
  const Sizes = [
    'Select All',
    '8 mm',
    '10 mm',
    '12 mm',
    '16 mm',
    '18 mm',
    '20 mm',
    '22 mm',
    '25 mm',
    '32 mm',
    '36 mm',
  ];
  return (
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
        <DropdownCheckbox Types={Brand} placeholder="Select brands" />
        <DropdownCheckbox Types={Grades} placeholder="Select Grades" />

        <DropdownCheckbox Types={Sizes} placeholder="Select Sizes" />
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
    </View>
  );
}
