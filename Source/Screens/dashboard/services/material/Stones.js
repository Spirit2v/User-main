import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import {AddToCart} from '@env';
import RentingButton from '../../../../Components/RentingButton';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
import AddtoCard from '../../../../Components/AddtoCard';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
export default function BricksAndBlock({navigation}) {
  const Types = [
    {id: '1', title: 'Select All'},
    {id: '2', title: 'Black'},
    {id: '3', title: 'White'},
  ];
  const Sizes = [
    {id: '1', title: 'Select All'},
    {id: '2', title: '4 mm'},
    {id: '3', title: '6 mm'},
    {id: '4', title: '12 mm'},
    {id: '5', title: '20 mm'},
    {id: '6', title: '22 mm'},
    {id: '7', title: '25 mm'},
    {id: '8', title: '42 mm'},
  ];

  const submitx = () => {
    setData({type: Brick, brand: CementGrades});

    setFormData({data: data, quantity: Quantity, type: 'Cement'});
    navigation.navigate('Cart', {formData});
    axios.post(`${AddToCart}`, formData).then(response => {
      console.log(response);
      console.log(formData);
      alert('Saved');
    });
  };

  return (
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
        <DropdownCheckbox Types={Types} placeholder="Select Types" />

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
