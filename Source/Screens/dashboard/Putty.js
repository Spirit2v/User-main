import React, {Component,useState} from 'react';
import { TouchableOpacity } from 'react-native';
import {StyleSheet, View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AddtoCard from '../../../../Components/AddtoCard';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
import InputText from '../../../../Components/InputText';
import Colors from '../../../../Utils/Colors';
import axios from 'axios';

export default function Putty({navigation}) {
  const Type= [
    {id: '1', title: 'Whoye Cement Wall Putty'},
    {id: '2', title: 'Acrylic Wall Putty'},
    {id: '3', title: 'POP'},
  ];
  const Brands = [
    {id: '1', title: 'Birla wallcare Putty'},
    {id: '2', title: 'Jk Protomac Acryllic Wall Putty'},
    {id: '3', title: 'Jk Cement '},
    {id: '4', title: 'Iris Paint Wall Putty'},
    {id: '5', title: 'Asian Paint'},
    {id: '6', title: 'Bird White'},
    {id: '7', title: 'Dulux Paint'},
    {id: '8', title: 'VV Paint'},
  ];

  const [Visible, setVisible] = useState(false);
  
  

  const [User, setUser] = useState('');
  const [Color, setColor] = useState('');
  
  const [Brick, setBrick] = useState('');
  const [CementGrades, setCementGrades] = useState('');
  
  const setFunctio = e => {
    setSurafacee(e);
  };
  const [Brandd, setBrandd] = useState('');
  const setFunctio1 = e => {
    setBrandd(e);
  };
  const [Typee, setTypee] = useState('');
  const setFunctio2 = e => {
    setTypee(e);
    setVisible(!Visible);
  };
  const [Tradee, setTradee] = useState('');
  const setFunctio3 = e => {
    setTradee(e);
    setVisible(!Visible);
  };

  const setFunctio4 = e => {
    setCementGrades(e);
    setVisible(!Visible);
  };

  // const [Colorr, setColor] = useState('');

  const [data, setData] = useState('');
  const [formData, setFormData] = useState('');
  const [Quantity, setQuantity] = useState('');
  const submit = () => {
    setData({'type': Typee, 'brand': Brandd});

    setFormData({data: data, quantity: Quantity, type: 'Putty'});
    navigation.navigate('Cart', {formData});
    axios.post(`${AddToCart}`, formData).then(response => {
      console.log(response);
      console.log(formData);
      alert('Saved');
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerContent}>
        <View style={{height: 20}}></View>
  
        <DropdownCheckbox
          setFunction={setFunctio1}
          Types={Brands}
          placeholder="Select brands"
        />
        <DropdownCheckbox
          setFunction={setFunctio2}
          Types={Type}
          placeholder="Select Types"
        />
        <DropdownCheckbox
          // setFunction={setFunctio3}
          Types={Type}
          placeholder="Trade"
        />
        {Visible ? (
          <View>
         
            <Text style={{color: 'grey'}}>Quantity of Paint</Text>
            <InputText
              keyboardType="numeric"
              placeholder="Quantity of Paint"
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
          {User ? (
            <AddtoCard />
          ) : (
            <TouchableOpacity onPress={submit}>
              <Buttonq title="Add to Cart" hi={42} wi={111} />
            </TouchableOpacity>
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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkgrey,
  },
  containerContent: {
    padding: 15,
  },
  userDetailsContainer: {
    height: 200,
    borderWidth: 0.2,
    borderColor: 'grey',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userDetailLabel: {
    color: 'white',
    fontSize: 13,
    width: '50%',
    textAlign: 'center',
    lineHeight: 20,
  },
  subtitle: {
    marginTop: 15,
    color: 'white',
    fontSize: 15,
  },
  line: {
    height: 0.4,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  label: {
    color: 'white',
  },
  value: {
    color: 'grey',
    fontSize: 15,
    marginLeft: 'auto',
  },
  urgent: {
    height: 22,
    // backgroundColor: Colors.lightred,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 'auto',
  },
  urgencyStatus: {
    fontSize: 13,
  },
  tradeItem: {
    marginLeft: 'auto',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tradeIcon: {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'white',
  },
  tradeLabel: {
    color: 'white',
    marginLeft: 10,
  },
  inputContainer: {},
  inputLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  input: {
    borderColor: 'white',
    borderWidth: 0.4,
    borderRadius: 5,
    width: '60%',
    height: 40,
    color: 'white',
    marginVertical: 10,
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  buttons: {
    marginVertical: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
