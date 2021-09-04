import React, {useState} from 'react';
import {AddToCart} from '@env';
import axios from 'axios';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../../../../Assets/Styles/Styles';
import AddtoCard from '../../../../Components/AddtoCard';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
import InputText from '../../../../Components/InputText';
export default function RMCmixture({navigation}) {
  const [UserT, setUserT] = useState('');
  const Grades = [
    {id: '1', title: 'Select All'},
    {id: '2', title: 'M 10'},
    {id: '3', title: 'M 15'},
    {id: '4', title: 'M 20'},
    {id: '5', title: 'M 25'},
    {id: '6', title: 'M 30'},
    {id: '7', title: 'M 35'},
    {id: '8', title: 'M 40'},
    {id: '9', title: 'M 45'},
  ];

  const Weight = [
    {id: '1', title: 'kg'},
    {id: '2', title: 'ton'},
    {id: '3', title: 'Cubic mt'},
    {id: '4', title: 'Cubic ft'},
  ];

  const [Visible, setVisible] = useState(false);
  // const [Brick, setBrick] = useState('');
  // const [CementGrades, setCementGrades] = useState('');

  // const setFunctio = e => {
  //   setBrick(e);
  //   setVisible(!Visible);
  // };
  // const [firstly, setFirstly] = useState('');
  // const setFunctio2 = e => {
  //   setCementGrades(e);
  //   setVisible(!Visible);
  // };
  const [SizeUnit, setSizeUnit] = useState('');



  const setFunctio3 = e => {
    setSizeUnit(e);
    setQuantity(Quantity1, SizeUnit);
  };

  
  const [Quantity, setQuantity] = useState('');
  const [Quantity1, setQuantity1] = useState('');

  const [formData, setFormData] = useState('');
  const [data, setData] = useState('');
  const submitx = () => {
    setData({Grades: RMCgrade});

    setFormData({data: data, quantity: Quantity, type: 'RMC Mixture'});
    navigation.navigate('Cart', {formData});
    axios.post(`${AddToCart}`, formData).then(response => {
      console.log(response);
      console.log(formData);
      alert('Saved');
    });
  };

  const [RMCgrade, setRMCgrade] = useState('');
  const Callbackfunction = e => {
    setRMCgrade(e);
    setVisible(!Visible);
  };

  return (
    <View style={Styles.ProfileDetails_container}>
      <View style={{ paddingHorizontal: 22}}>
      <Text
        style={{color:'grey',marginTop:22,marginBottom:12}}>
        Select brands

        </Text>
        <DropdownCheckbox
          setFunction={Callbackfunction}
          Types={Grades}
          placeholder="Select Grade"
        />

        {Visible ? (
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'white', marginBottom: 10}}>Quantity</Text>
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 2}}>
              <InputText
                placeholder="Enter a Value"
                width={'50%'}
                onChangeText={text => setQuantity1(text)}
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
          {UserT ? (
            <AddtoCard />
          ) : (
            <TouchableOpacity onPress={submitx}>
              <Buttonq title="Add to Cart" hi={42} wi={111} />
            </TouchableOpacity>
          )}

          {/*  */}
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
