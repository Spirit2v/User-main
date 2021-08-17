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
import {Picker} from '@react-native-picker/picker';
import { backgroundColor } from 'styled-system';
import SelectPicker from 'react-native-form-select-picker'; 

export default function Cement({navigation}) {
  let [language, setLanguage] = React.useState('');
  const [ selectedValue, setSelectedValue] = React.useState('js');
  const [Switch, setSwitch] = useState(true);
  const placeholder = 'Select Grad';
  const Brand = [
  {id:'1',title: 'Select All'} ,
  {id:'2',title: 'Ultratech Cement'} ,
  {id:'3',title:  'Ambuja Cement Ltd'} ,
  {id:'4',title: 'ACC Ltd'} ,
  {id:'5',title: 'Shree Cement Ltd.'} ,
  {id:'6',title:  'Dalmia Bharat Ltd'} ,
  {id:'7',title: 'Birla Corporation Ltd'} ,
  {id:'8',title: 'India Cement Ltd'} ,
  {id:'9',title: 'Select All'} ,
  {id:'10',title: 'Select All'} ,
  {id:'11',title: 'Select All'} 
  ];
  const Grades = [
    'Select All',
    'OPC 43 Cement',
    'OPC 53 Cement',
    'PPC Cement',
    'White Cement',
  ];
  const options = ["Apple", "Banana", "Orange"];
  const [selected, setSelected] = useState();
  const [Visible, setVisible] = useState(false)
  const [Brick, setBrick] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();
  const setFunctio = e => {
    setBrick(e);  setVisible(!Visible)
  };
const [firstly, setFirstly] = useState('')

  return (



    <ScrollView>

      <View style={Styles.ProfileDetails_container}>
        <View style={{marginTop: 8, paddingHorizontal: 7}}></View>
        <DropdownCheckbox Types={Brand} placeholder="Select brand"
        
        setFunction={setFunctio}
        />

        <DropdownCheckbox Types={Grades} placeholder="Select Grades" />

<Text
style={{color:'white'}}
>{Brick}</Text>

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
const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 20,
    right: 10,
  },
  placeholder: {
    color: 'purple',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
