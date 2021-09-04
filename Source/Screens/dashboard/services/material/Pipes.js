import React,{useState} from 'react';
import {AddToCart} from '@env';
import axios from 'axios';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import AddtoCard from '../../../../Components/AddtoCard';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
import InputText from '../../../../Components/InputText';
export default function Pipes({navigation}) {
  const [Visible, setVisible] = useState(false);
  const [Brick, setBrick] = useState('');
  const [CementGrades, setCementGrades] = useState('');

const [User, setUser] = useState('')
  const [Typee, setTypee] = useState('')
  const setFunctio = e => {
    setBrick(e);
    setVisible(!Visible);
  };
  const setFunctio1 = e => {
    setBrick(e);
    setVisible(!Visible);
  };
const [data, setData] = useState('')
const [formData, setFormData] = useState('')
  const [Quantity, setQuantity] = useState('')
  const submit = () => {
    setData({'type': Typee});

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
      <View style={{ paddingHorizontal: 7}}>
      <Text
        style={{color:'grey',marginTop:22,marginBottom:12}}>
        Select brands

        </Text>
        <DropdownCheckbox 
        setFunction={setFunctio}
        Types={Types} placeholder="Select Types" />
{Visible ? (
          <View>
            <InputText
              keyboardType="numeric"
              placeholder="Quantity of Pipes"
              onChangeText={text => setQuantity(text)}
            />
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
        {User ? <AddtoCard /> :
          <TouchableOpacity
          onPress={submit}
          >
          <Buttonq 
          title="Add to Cart"
          hi={42}
          wi={111}
          />
          </TouchableOpacity>
        }  
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
