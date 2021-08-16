import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
import SignupCard from '../../../../Components/SignupCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddtoCard from '../../../../Components/AddtoCard';
import {ScrollView} from 'react-native-gesture-handler';
export default function Cement({navigation}) {
  const [Switch, setSwitch] = useState(true);
  const Brand = [
    'Select All',
    'Ultratech Cement',
    'Ambuja Cement Ltd',
    'ACC Ltd',
    'Shree Cement Ltd.',
    'Dalmia Bharat Ltd',
    'Birla Corporation Ltd',
    'India Cement Ltd',
    'The Ramco Cements Ltd',
    'Orient Cement Ltd',
    'Heidelberg Cement Ltd',
  ];
  const Grades = [
    'Select All',
    'OPC 43 Cement',
    'OPC 53 Cement',
    'PPC Cement',
    'White Cement',
  ];

  const [selectedbrand, setSelectedBrand] = useState('');
  const [selectedgrade, setSelectedGrade] = useState('');
  return (
 <ScrollView>
              <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}></View>
        <DropdownCheckbox Types={Brand} placeholder="Select brand" />
        <DropdownCheckbox Types={Grades} placeholder="Select Grades" />

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
   
  </ScrollView>
  );
}
const styles = StyleSheet.create({
  box: {
    marginVertical: 23,
    height: 232,
    width: '85%',
    backgroundColor: 'black',
    position: 'absolute',
    top: 5,
    justifyContent: 'center',
  },
});
