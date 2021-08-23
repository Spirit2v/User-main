import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AddToCart} from "@env"
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../.././../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
import AddtoCard from '../../../../Components/AddtoCard';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
export default function TMTsteel({navigation}) {

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


  const Brand = [
    {id: '1', title:'Select All'},
    {id: '1', title:'TATA TMT Steel'},
    {id: '1', title:'Vizag TMT Steel'},
    {id: '1', title:'Jindal TMT Steel'},
    {id: '1', title:'Simhadri TMT Steel'},
    {id: '1', title:'Mangal TMT Steel'},
    {id: '1', title:'Essar Steel'},
    {id: '1', title:    'Mesco Steel'},
    {id: '1', title:'SRMB Steel'},
    {id: '1', title:'SAIL Steel'},
    {id: '1', title:    'Kamdhenu Steel'},
    {id: '1', title:'Vinayak Steel'},
    {id: '1', title:'Visa Steel'},
  ];
  const Grades = [
      {id: '1', title:'Select All'}  ,
      {id: '1', title:'Fe 450'},
      {id: '1', title:'Fe 500',},{id: '1', title:'Fe 500D',},{id: '1', title:'Fe 550',},{id: '1', title:'Fe 550D'},
  ];
  const Sizes = [
      {id: '1', title: 'Select All',},
      {id: '1', title: '8 mm',},
{id: '1', title: '10 mm',},
{id: '1', title: '12 mm',},
{id: '1', title: '16 mm',},
{id: '1', title: '18 mm',},
{id: '1', title: '20 mm',},
{id: '1', title: '22 mm',},
{id: '1', title: '25 mm',},
{id: '1', title: '32 mm',},
{id: '1', title: '36 mm',},
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
