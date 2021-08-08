import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Styles from '../../../Assets/Styles/Styles';
import Button from '../../../Components/Button';
import Buttonq from '../../../Components/Buttonq';
import Buttonq1 from '../../../Components/Buttonq1';
import DropdownCheckbox from '../../../Components/DropdownCheckbox';
import Profile_TextinputCard from '../../../Components/Profile_TextinputCard';
import ServiceCardSand from '../../../Components/ServiceCardSand';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputText from '../../../Components/InputText';
import Header_Component from '../../../Components/Header_Component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function Request1() {
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
  return (
    <>
        <Header_Component 
      Heading="Request"
      />
    <View style={Styles.ProfileDetails_container}>
  
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
        <DropdownCheckbox 
        placeholder="Select Delivery Address"
        Types={Brand} />

        <InputText
        placeholder="DD/MM/YYYY"
        />

        <Text style={{color: 'white',marginTop:7}}>Order Type</Text>

        <View style={styles.second}>
          <TouchableOpacity>
            <View style={styles.boxButton}>
              <Text style={{fontSize: 12}}>Urgent</Text>
            </View>
          </TouchableOpacity>
          <View style={{paddingHorizontal: 10}}></View>
          <TouchableOpacity>
            <View style={styles.boxButton1}>
              <Text style={{fontSize: 12}}>Flexible</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.second}>
          <Buttonq1 title="Cancel" hi={42} wi={78} />
          <View style={{paddingHorizontal: 10}}></View>
          <Buttonq title="Next" hi={42} wi={99} />
        </View>
      </View>
    </View>
  
  </>
  );
}
const styles = StyleSheet.create({
  second: {
    marginTop: 20,
    marginBottom: 34,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxButton: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 1,
    height: 27,
    width: 69,
    backgroundColor: '#E92323',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  boxButton1: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 1,
    height: 27,
    width: 79,
    backgroundColor: '#3CC13B',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
  },
});
