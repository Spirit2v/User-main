import React, {Component} from 'react';
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
const Agents = ({navigation}) => {
  const Materials=['Select all','Sand','Stones','Bricks']
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  return (
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginBottom: 20}}></View>

      <RentingButton text="Labour Agent" />
      <ServiceCardSand 
      Placehold="Select Material"
      title={Materials} />

      <View style={{marginBottom: 20}}></View>
      <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Buttonq title="save" hi={42} wi={53} />
          <View style={{paddingHorizontal: 10}}></View>
          <Buttonq1 title="Add more service" hi={42} wi={133} />
        </View>
    </View>
  );
};
export default Agents;
