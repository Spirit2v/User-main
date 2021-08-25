import React,{useState} from 'react';
import {View, Text, TouchableOpacity,ScrollView} from 'react-native';
import {AddToCart} from '@env';
import axios from 'axios';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../.././../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
import AddtoCard from '../../../../Components/AddtoCard';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
import InputText from '../../../../Components/InputText';

export default function TMTsteel({navigation}) {
  
const [Visible, setVisible] = useState('')
  const Weight = [
    {id: '1', title: 'kg'},
    {id: '2', title: 'ton'},
    {id: '3', title: 'Cubic mt'},
    {id: '4', title: 'Cubic ft'},
  ];
const [formData, setFormData] = useState('')
const [data, setData] = useState('')
  const [User, setUserT] = useState('')
  const submit = () => {
    setData({'grade': TMTsteelType, 'brand': TMTsteel});

    setFormData({data: data, quantity: Quantity, type: 'TMTsteel'});
    navigation.navigate('Cart', {formData});
    axios.post(`${AddToCart}`, formData).then(response => {
      console.log(response);
      console.log(formData);
      alert('Saved');
    });
  };

  const Brand = [
    {id: '1', title: 'Select All'},
    {id: '2', title: 'TATA TMT Steel'},
    {id: '3', title: 'Vizag TMT Steel'},
    {id: '4', title: 'Jindal TMT Steel'},
    {id: '5', title: 'Simhadri TMT Steel'},
    {id: '6', title: 'Mangal TMT Steel'},
    {id: '7', title: 'Essar Steel'},
    {id: '8', title: 'Mesco Steel'},
    {id: '9', title: 'SRMB Steel'},
    {id: '10', title: 'SAIL Steel'},
    {id: '11', title: 'Kamdhenu Steel'},
    {id: '12', title: 'Vinayak Steel'},
    {id: '13', title: 'Visa Steel'},
  ];
  const Grades = [
    {id: '1', title: 'Select All'},
    {id: '2', title: 'Fe 450'},
    {id: '3', title: 'Fe 500'},
    {id: '4', title: 'Fe 500D'},
    {id: '5', title: 'Fe 550'},
    {id: '6', title: 'Fe 550D'},
  ];
  const Sizes = [
    {id: '1', title: 'Select All'},
    {id: '2', title: '8 mm'},
    {id: '3', title: '10 mm'},
    {id: '4', title: '12 mm'},
    {id: '5', title: '16 mm'},
    {id: '6', title: '18 mm'},
    {id: '7', title: '20 mm'},
    {id: '8', title: '22 mm'},
    {id: '9', title: '25 mm'},
    {id: '10', title: '32 mm'},
    {id: '11', title: '36 mm'},
  ];

  const [TMTsteel, setTMTsteelBrand] = useState('');
  const setFunctio = e => {
    setTMTsteelBrand(e);
  };
  const [TMTsteelType, setTMTsteelType] = useState('');
  const setFunctio1 = e => {
    setTMTsteelType(e);
  };

  const [TMTgrade, setTMTgrade] = useState('')
  const setFunctio2 = e => {
    setTMTgrade(e); setVisible(!Visible);

  };
  const [SizeUnit, setSizeUnit] = useState('')
  const setFunctio3 = e => {
    setSizeUnit(e);
    setQuantity(Quantity1,SizeUnit)
  };
 
  // const [firstly, setFirstly] = useState('');

  // const [StoneSize, setStoneSize] = useState('')
  // const setFunctio5 = e => {
  //   setStoneSize(e);
  //   setVisible(!Visible);
  // };

const [Quantity1, setQuantity1] = useState('')
const [Quantity, setQuantity] = useState('')
  return (

<ScrollView>

    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
        <Text>{TMTsteel}</Text>{}
        <DropdownCheckbox Types={Brand} 
         setFunction={setFunctio1}
        placeholder="Select brands" 
        />
        <DropdownCheckbox 
        setFunction={setFunctio}
        Types={Grades} placeholder="Select Grades" />

        <DropdownCheckbox 
         setFunction={setFunctio2}
        Types={Sizes} placeholder="Select Sizes" />
         <DropdownCheckbox 
         setFunction={setFunctio2}
        Types={Sizes} placeholder="Trade" />
          {Visible ?
(<View>
<View
style={{flexDirection:"row"}}
>
<Text
style={{color:'white',marginBottom:10}}
>Quantity</Text>
</View>
<View
style={{flexDirection:'row',marginHorizontal:2}}
>
<InputText
  placeholder="Enter Quantity"
  width={'50%'}
  onChangeText={(text) => setQuantity1(text)}
  />
  <View
  style={{marginHorizontal:12}}
  ></View>
  <View
  style={{width:'42%'}}
  >
  <DropdownCheckbox
  placeholder="Units"
  Types={Weight}
  setFunction={setFunctio3}
  /></View>
  </View>
  </View>
  )
:
(<View></View>)}
<Text>
  {TMTsteel},{TMTsteelType},{TMTgrade}
</Text>
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
    </ScrollView>
  );
}
