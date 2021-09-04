import React, {Component, useState} from 'react';
import {Text, View} from 'react-native';
import Styles from '../../../Assets/Styles/Styles';
import RentingButton from '../../../Components/RentingButton';
import Buttonq1 from '../../../Components/Buttonq1';
import Buttonq from '../../../Components/Buttonq';
import InputText from '../../../Components/InputText';
import DropdownCheckbox from '../../../Components/DropdownCheckbox';
import AddtoCard from '../../../Components/AddtoCard';
import axios from 'axios';
import {AddToCart} from '@env';
import {TouchableOpacity} from 'react-native';

const Agents = ({navigation}) => {
  const [data, setData] = useState('');
  const [formData, setFormData] = useState('');

  const submit = () => {
    setData({materials: Material, gender: Genderr});
    setFormData({data: data, quantity: Quantity, type: 'agent'});

    axios
      .post(`${global.URL}/product/add_to_cart/23`, formData)
      .then(response => {
        console.log(response);
        console.log(formData);
        navigation.navigate('Cart', {formData});
        alert('Saved');
      });
  };

  const [User, setUser] = useState('');

  const [Visible, setVisible] = useState(false);
  const Callbackfunction = e => {
    setBrick(e);
  };
  const [Quantity, setQuantity] = useState('');
  const [Material, setMaterial] = useState('');
  const setFunctio = e => {
    setMaterial(e);
    setVisible(!Visible);
  };
  const [Genderr, setGenderr] = useState('');
  const setFunctio2 = e => {
    setGenderr(e);
  };
  const Materials = [
    {id: '1', title: 'Select all'},
    {id: '6', title: 'Sand'},
    {id: '7', title: 'Stones'},
    {id: '8', title: 'Bricks'},
  ];

  const Gender = [
    {id: '1', title: 'male'},
    {id: '2', title: 'female'},
    {id: '3', title: 'others'},
  ];
  const [Brick, setBrick] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  return (
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginBottom: 20}}></View>
<View
style={{paddingHorizontal:22}}
>
      <RentingButton
        value="Labour"
        Callbackfunctio={Callbackfunction}
        text="Labour Agent"
      />
      <Text>{Brick}</Text>
      <DropdownCheckbox
        placeholder="Select Material"
        setFunction={setFunctio}
        title={Materials}
        Types={Materials}
      />
      </View>
      {Visible ? (
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'white', marginBottom: 10}}>Quantity</Text>
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: 2}}>
            <InputText
              placeholder="No. of Men/Women"
              width={'50%'}
              onChangeText={text => setQuantity(text)}
            />
            <View style={{marginHorizontal: 12}}></View>
            <View style={{width: '42%'}}>
              <DropdownCheckbox
                placeholder="Gender"
                Types={Gender}
                setFunction={setFunctio2}
              />
            </View>
          </View>
        </View>
      ) : (
        <View></View>
      )}
      <View style={{marginBottom: 20}}></View>
      <View
        style={{
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {User ? (
          <AddtoCard />
        ) : (
          <TouchableOpacity onPress={submit}>
            <Buttonq title="Add to Cart" hi={45} wi={133} />
          </TouchableOpacity>
        )}
        <View style={{paddingHorizontal: 10}}></View>
        <Buttonq1 title="Request" hi={45} wi={103} />
      </View>
    </View>
  );
};
export default Agents;
