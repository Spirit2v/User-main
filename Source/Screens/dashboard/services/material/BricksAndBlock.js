import React, {useState} from 'react';
import {
  View,
  Text,
  Touchable,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import RentingButton from '../../../../Components/RentingButton';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import InputText from '../../../../Components/InputText';
import Buttonq1 from '../../../../Components/Buttonq1';
import AddtoCard from '../../../../Components/AddtoCard';

export default function BricksAndBlock({navigation}) {


const submit=()=>{
  
}


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
        <Text>{Brick}</Text>
        <RentingButton
          value="Cement"
          Callbackfunctio={Callbackfunction1}
          text="Cement Bricks"
        />
        <Text>{Cement}</Text>
        <RentingButton 
                  value="FlyAsh"
                  Callbackfunctio={Callbackfunction2}
        text="Fly Ash Bricks" />
        <Text>{FlyAsh}</Text>
        <TouchableOpacity style={{flexDirection: 'row'}}>
{Visible ?
(
<InputText
  placeholder="Enter Quantity"
  width={'100%'}
  
  />
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
