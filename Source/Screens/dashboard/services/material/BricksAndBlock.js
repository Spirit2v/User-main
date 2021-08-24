import React, {useState} from 'react';
import {
  View,
  Text,
  Touchable,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import axios from 'axios';
import RentingButton from '../../../../Components/RentingButton';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import InputText from '../../../../Components/InputText';
import Buttonq1 from '../../../../Components/Buttonq1';
import AddtoCard from '../../../../Components/AddtoCard';
import {AddToCart} from "@env"
export default function BricksAndBlock({navigation}) {
const [Quantity, setQuantity] = useState('')

  const [formData, setFormData] = useState('');
  const [data, setData] = useState('');
  const submit = () => {
    setData({"type": Brick});
    setFormData({data: data, quantity: Quantity, type: 'Bricks',});
    navigation.navigate('Cart',{formData})
    axios
      .post(`${AddToCart}`, 
      formData)
      .then(response => {
        console.log(response);
        console.log(formData)
        alert('Saved');
      });
  };

  const [Visible, setVisible] = useState(false)
  const Callbackfunction = e => {
    setBrick(e);  setVisible(!Visible)
  };
  const Callbackfunction1 = e => {
    setCement(e);
    setVisible(!Visible)
  };
  const Callbackfunction2 = e => {
    setFlyAsh(e);  setVisible(!Visible)
  };
  const [Brick, setBrick] = useState('');
  const [Cement, setCement] = useState('');
  const [FlyAsh, setFlyAsh] = useState('')
  const [Switch, setSwitch] = useState(true);


  return (<ScrollView>
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
        <View></View>



        <RentingButton
          text="Clay Bricks"
          value="Clay"
          Callbackfunctio={Callbackfunction}
        />
       
        <RentingButton
          value="Cement"
          Callbackfunctio={Callbackfunction}
          text="Cement Bricks"
        />
      
        <RentingButton 
                  value="FlyAsh"
                  Callbackfunctio={Callbackfunction}
        text="Fly Ash Bricks" />
      
        <TouchableOpacity style={{flexDirection: 'row'}}>
{Visible ?
(
<InputText
  placeholder="Enter Quantity"
  width={'100%'}
  onChangeText={text => setQuantity(text)}
  />
  )
:
(<View></View>)}
       
    
        </TouchableOpacity>
        <Text>{Brick}</Text>
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
