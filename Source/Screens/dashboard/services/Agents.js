import React, {Component,useState} from 'react';
import {Text, View} from 'react-native';
import Styles from '../../../Assets/Styles/Styles';
import Button from '../../../Components/Button';
import Profile_card from '../../../Components/Profile_card';
import RentingButton from '../../../Components/RentingButton';
import CheckBox from '@react-native-community/checkbox';
import Button2 from '../../../Components/Button2';
import Buttonq1 from '../../../Components/Buttonq1';
import Buttonq from '../../../Components/Buttonq';
import ServiceCardSand from '../../../Components/ServiceCardSand';
import InputText from '../../../Components/InputText';
import DropdownCheckbox from '../../../Components/DropdownCheckbox';
const Agents = ({navigation}) => {
  const [Visible, setVisible] = useState(false)
  const Callbackfunction = e => {
    setBrick(e);  setVisible(!Visible)
  };
  const Materials=['Select all','Sand','Stones','Bricks']
  const [Brick, setBrick] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  return (
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginBottom: 20}}></View>

      <RentingButton 
        value="Labour"
        Callbackfunctio={Callbackfunction}
      
      text="Labour Agent" />
      <Text>
        {Brick}
      </Text>
      <DropdownCheckbox 
      placeholder="Select Material"
      title={Materials} 
      Types={Materials}
      />
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
  placeholder="No. of Men/Women"
  width={'50%'}
  
  />
  <View
  style={{marginHorizontal:12}}
  ></View>
  <View
  style={{width:'42%'}}
  >
  <DropdownCheckbox
  placeholder="Gender"
  /></View>
  </View>
  </View>
  )
:
(<View></View>)}
      <View style={{marginBottom: 20}}></View>
      <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Buttonq title="Add to Cart" hi={45} wi={133} />
          <View style={{paddingHorizontal: 10}}></View>
          <Buttonq1 title="Request" hi={45} wi={103} />
        </View>
    </View>
  );
};
export default Agents;
