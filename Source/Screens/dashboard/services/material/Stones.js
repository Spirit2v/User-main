import React, {useState} from 'react';
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

  const [User, setUser] = useState(true);
const [Unit, setUnit] = useState('')
  const [Visible, setVisible] = useState(false);
  const [Brick, setBrick] = useState('');
  const [CementGrades, setCementGrades] = useState('');

  const setFunctio = e => {
    setUnit(e);
    
  };
  const setFunctio3 = e => {
    setBrick(e);
    
  };
  const Weight  = [
    {id: '1', title: 'kg'},
    {id: '2', title: 'ton'},]
  const [firstly, setFirstly] = useState('');
  const setFunctio2 = e => {
    setCementGrades(e);
    setVisible(!Visible);
  };
  const [Quantity, setQuantity] = useState('')
  const [data, setData] = useState('')
const [formData, setFormData] = useState('')
  const submit = () => {
    setData({'type': Brick, 'brand': CementGrades});

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
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
        <DropdownCheckbox
          Types={Types}
          setFunction={setFunctio}
          placeholder="Select Types"
        />

        <DropdownCheckbox
          setFunction={setFunctio2}
          Types={Sizes}
          placeholder="Select Sizes"
        />
  
  <Text>{data}</Text>
  

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
  placeholder="Wnter a Value"
  width={'50%'}
  onChangeText={(text)=>setQuantity(text)}
  />
  <View
  style={{marginHorizontal:12}}
  ></View>
  <View
  style={{width:'42%'}}
  >
  <DropdownCheckbox
      setFunction={setFunctio3}
  placeholder="Weight"
  Types={Weight}
  /></View>
  </View>
  </View>
  )
:
(<View></View>)}

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
