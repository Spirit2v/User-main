import React from 'react';
import {AddToCart} from '@env';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import AddtoCard from '../../../../Components/AddtoCard';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
export default function Pipes({navigation}) {
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

  const Types = [
    {id: '1', title: 'Selct All'},
    {id: '2', title: 'Cast Iron Pipe'},
    {id: '3', title: 'Galvanized Iron Pipe'},
    {id: '4', title: 'Cast Iron Pipes'},
    {id: '5', title: 'Stroneware Pipes'},
    {id: '6', title: 'PVC Pipes'},
    {id: '7', title: 'PVC Suction pipes'},
    {id: '8', title: 'UPVC Pipes'},
    {id: '9', title: 'HDPE Pipes'},
    {id: '10', title: 'Asbestos Cement Pipe'},
    {id: '11', title: ' Concrete Pipe'},
  ];
  return (
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
        <DropdownCheckbox Types={Types} placeholder="Select Types" />

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
