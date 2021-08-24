import React from 'react';
import {AddToCart} from '@env';
import {View, TouchableOpacity, Text} from 'react-native';
import Styles from '../../../../Assets/Styles/Styles';
import AddtoCard from '../../../../Components/AddtoCard';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
export default function PaintAndPutty({navigation}) {
  const submitx = () => {
    setData({'type': Brick, "brand": CementGrades});

    setFormData({data: data, quantity: Quantity, type: 'PaintAndPutty'});
    navigation.navigate('Cart', {formData});
    axios.post(`${AddToCart}`, formData).then(response => {
      console.log(response);
      console.log(formData);
      alert('Saved');
    });
  };

  const Surface = [
    {id: '1', title: 'Interior'},
    {id: '2', title: 'Exterior'},
    {id: '3', title: 'Floor Paint'},
    {id: '4', title: 'Tile Paint'},
  ];

  const Type = [
    {id: '1', title: 'Enamle Paint'},

    {id: '2', title: 'Oil Paint'},
    {id: '3', title: 'Emulsion Paint'},
    {id: '4', title: 'Cement Paint'},

    {id: '5', title: 'Bituminous Paint'},
    {id: '6', title: 'Plastic Paint'},
    {id: '7', title: 'Anti-Corrosive Paint '},
    {id: '8', title: 'Cellulose Paint'},
  ];
  const Brands = [
    {id: '1', title: 'Berger Paints'},
    {id: '2', title: 'Nippon Paints'},
    {id: '3', title: 'Kansai Paints'},
    {id: '4', title: 'Asian Paints'},
    {id: '5', title: ' Indigo Paints'},
    {id: '6', title: 'Dulux Paints'},
    {id: '7', title: 'Shalimar Paints'},
    {id: '8', title: 'jenson and Nicholsan'},
  ];
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
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
        <DropdownCheckbox Types={Brands} placeholder="Select brands" />
        <DropdownCheckbox Types={Type} placeholder="Select Types" />

        {/* <DropdownCheckbox 
   Types={Sizes}
   placeholder="Select Sizes"
   /> */}
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
