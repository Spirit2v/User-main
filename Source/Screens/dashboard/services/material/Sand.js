import React, {useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Touchable,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import RentingButton from '../../../../Components/RentingButton';
import {AddToCart} from "@env"
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import InputText from '../../../../Components/InputText';
import Buttonq1 from '../../../../Components/Buttonq1';
import AddtoCard from '../../../../Components/AddtoCard';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';

export default function Sand({navigation}) {



  const Weight = [
    {id: '1', title: 'kg'},
    {id: '2', title: 'ton'},
    {id: '3', title: 'Cubic mt'},
    {id: '4', title: 'Cubic ft'},
  ];







  const [SizeUnit, setSizeUnit] = useState('')
  const setFunctio3 = e => {
    setSizeUnit(e);
    setQuantity(Quantity1,SizeUnit)
  };

  
  const [Quantity, setQuantity] = useState('')
  const [Quantity1, setQuantity1] = useState('');
  const [data, setData] = useState('');
  const [formData, setFormData] = useState('');
  const submit = () => {
    setData({'size': SandSize});

    setFormData({data: data, quantity: Quantity, type: 'Sand'});
    navigation.navigate('Cart', {formData});
    axios.post(`${AddToCart}`, formData).then(response => {
      console.log(response);
      console.log(formData);
      alert('Saved');
    });
  };

  const [Visible, setVisible] = useState(false)
  const Callbackfunction = e => {
    setSandSize(e);  setVisible(!Visible)
  };
  const Callbackfunction1 = e => {
    setSandSize(e);
    setVisible(!Visible)
  };
  const Callbackfunction2 = e => {
    setSandSize(e);  setVisible(!Visible)
  };
  const [SandSize, setSandSize] = useState('');



  return (<ScrollView>
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 22, paddingHorizontal: 22}}>
        <View></View>



        <RentingButton
          text="Low"
          value="Low"
          Callbackfunctio={Callbackfunction}
        />
       
        <RentingButton
          value="Medium"
          Callbackfunctio={Callbackfunction1}
          text="Medium"
        />
        
        <RentingButton 
                  value="High"
                  Callbackfunctio={Callbackfunction2}
        text="High" />
        <Text>{SandSize}</Text>
        <TouchableOpacity style={{flexDirection: 'row'}}>
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
       
    
        </TouchableOpacity>

        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
       <TouchableOpacity
       onPress={submit}
       >
       <Buttonq 
       title="Add to Cart"
       hi={42}
       wi={111}
       />
       </TouchableOpacity>
          {/* <AddtoCard /> */}
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
const styles = StyleSheet.create({
  box: {
    marginVertical: 23,
    height: 232,
    width: '85%',
    backgroundColor: 'black',
    position: 'absolute',
    top: 5,
    justifyContent: 'center',
  },
});
