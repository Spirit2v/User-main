import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {AddToCart} from "@env"
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
import {backgroundColor} from 'styled-system';
import SelectPicker from 'react-native-form-select-picker';
import axios from 'axios';
import InputText from '../../../../Components/InputText';
export default function Cement({navigation}) {
  let [language, setLanguage] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState('js');
  const [Switch, setSwitch] = useState(true);
  const placeholder = 'Select Grad';
  const Brand = [
    {id: '1', title: 'Select All'},
    {id: '2', title: 'Ultratech Cement'},
    {id: '3', title: 'Ambuja Cement Ltd'},
    {id: '4', title: 'ACC Ltd'},
    {id: '5', title: 'Shree Cement Ltd.'},
    {id: '6', title: 'Dalmia Bharat Ltd'},
    {id: '7', title: 'Birla Corporation Ltd'},
    {id: '8', title: 'India Cement Ltd'},
  ];
  const Grades = [
    {id: '1', title: 'Select All'},
    {id: '2', title: 'OPC 43 Cement'},
    {id: '3', title: 'OPC 53 Cement'},
    {id: '4', title: 'PPC Cement'},

    {id: '5', title: 'White Cement'},
  ];
  const options = ['Apple', 'Banana', 'Orange'];
  const [selected, setSelected] = useState();
  const [Visible, setVisible] = useState(false);
  const [Brick, setBrick] = useState('');
  const [CementGrades, setCementGrades] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();
  const setFunctio = e => {
    setBrick(e);
    setVisible(!Visible);
  };
  const [firstly, setFirstly] = useState('');
  const setFunctio2 = e => {
    setCementGrades(e);
    setVisible(!Visible);
  };
  global.formData;
  const [Quantity, setQuantity] = useState('');
  const [formDataB, setFormDataB] = useState('');
  const [formData, setFormData] = useState('');
  const [data, setData] = useState('');
  const submitx = () => {
    
    
    
    setData({"type": Brick, "brand": CementGrades});



    setFormData({data: data, quantity: Quantity, type: 'Cement',});
    navigation.navigate('Cart',{formData})
    axios
      .post(`${AddToCart}`, 
      formData)
      .then(response => {
        console.log(response);
        console.log(formData)
        alert('Saved');
      });
  };
  return (
    <ScrollView>
      <View style={Styles.ProfileDetails_container}>
        <View style={{marginTop: 8, paddingHorizontal: 7}}></View>
        <DropdownCheckbox
          Types={Brand}
          placeholder="Select brand"
          setFunction={setFunctio}
        />

        <DropdownCheckbox
          Types={Grades}
          placeholder="Select Grades"
          setFunction={setFunctio2}
        />
        {CementGrades ? (
          <View>
            <InputText
              keyboardType="numeric"
              placeholder="Quantity of Cement"
              onChangeText={text => setQuantity(text)}
            />
          </View>
        ) : (
          <View></View>
        )}
        <Text style={{color: 'white'}}>{Brick}</Text>

        <Text style={{color: 'white'}}>{CementGrades}</Text>
        <Text style={{color: 'white'}}>{Quantity}</Text>
        <Text style={{color: 'white'}}>{formData.Quantity}</Text>
        <TouchableOpacity onPress={submitx}>
          <Buttonq1 title="submit" hi={42} wi={78} />
        </TouchableOpacity>

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
