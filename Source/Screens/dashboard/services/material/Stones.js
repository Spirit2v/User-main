import React, {useState} from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import {AddToCart} from '@env';
import axios from 'axios';
import RentingButton from '../../../../Components/RentingButton';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
import AddtoCard from '../../../../Components/AddtoCard';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
import InputText from '../../../../Components/InputText';
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
  const Weight = [
    {id: '1', title: 'kg'},
    {id: '2', title: 'ton'},
  ];

  const [User, setUser] = useState(true);
  const [Unit, setUnit] = useState('');
  const [Visible, setVisible] = useState(false);
  const [Brick, setBrick] = useState('');
  const [CementGrades, setCementGrades] = useState('');

  const [StoneType, setStoneType] = useState('');
  const setFunctio = e => {
    setStoneType(e);
  };

  const [SizeUnit, setSizeUnit] = useState('')
  const setFunctio3 = e => {
    setSizeUnit(e);
    setQuantity(Quantity1,SizeUnit)
  };
 
  // const [firstly, setFirstly] = useState('');

  const [StoneSize, setStoneSize] = useState('')
  const setFunctio2 = e => {
    setStoneSize(e);
    setVisible(!Visible);
  };
  const [Quantity, setQuantity] = useState('')
  const [Quantity1, setQuantity1] = useState('');
  const [data, setData] = useState('');
  const [formData, setFormData] = useState('');
  const submit = () => {
    setData({'type': StoneType, 'size': StoneSize});

    setFormData({data: data, quantity: Quantity, type: 'Stones'});
    navigation.navigate('Cart', {formData});
    axios.post(`${AddToCart}`, formData).then(response => {
      console.log(response);
      console.log(formData);
      alert('Saved');
    });
  };

  return (
    <View style={Styles.ProfileDetails_container}>
      <View style={{ paddingHorizontal:22}}>
      <Text
        style={{color:'grey',marginTop:22,marginBottom:12}}>
        Select Types

        </Text>
        <DropdownCheckbox
          Types={Types}
          setFunction={setFunctio}
          placeholder="Types"
        />
 <Text
        style={{color:'grey',marginTop:22,marginBottom:12}}>
        Select brands

        </Text>
        <DropdownCheckbox
          setFunction={setFunctio2}
          Types={Sizes}
          placeholder="Sizes"
        />

        <Text>{StoneType}</Text>
        <Text>{StoneSize}</Text>
        <Text>{Quantity1}{SizeUnit}</Text>

        {Visible ? (
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'white', marginBottom: 10}}>Quantity</Text>
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 2}}>
              <InputText
                placeholder="Enter a Value"
                width={'50%'}
                onChangeText={(text) => setQuantity1(text)}
              />
              <View style={{marginHorizontal: 12}}></View>
              <View style={{width: '42%'}}>
                <DropdownCheckbox
                  setFunction={setFunctio3}
                  placeholder="Weight"
                  Types={Weight}
                />
              </View>
            </View>
          </View>
        ) : (
          <View></View>
        )}

        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {User ? (
            <TouchableOpacity onPress={submit}>
              <Buttonq title="Add to Cart" hi={42} wi={98} />
            </TouchableOpacity>
          ) : (
            <AddtoCard />
          )}

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
