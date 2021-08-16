import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
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
  const placeholder="Select Grad"
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
        <RNPickerSelect
   placeholder={{
    label: 'Select brand',
    value: null,
    color: 'White',
  }}
  style={{
placeholder:{
  color:"white"
},
inputAndroid:{
  borderRadius: 10,
  padding: 16,
  width: '100%',
  height: 53,
  backgroundColor:'black',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  shadowColor: 'white',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,

  elevation: 8,
}

  }}
          onValueChange={value => console.log(value)}
          useNativeAndroidPickerStyle={false}
        
          items={[
            {label: 'Football', value: 'football'},
            {label: 'Baseball', value: 'baseball'},
            {label: 'Hockey', value: 'hockey'},
          ]}
        />
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
