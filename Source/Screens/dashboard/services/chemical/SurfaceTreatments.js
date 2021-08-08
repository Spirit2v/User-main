import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import RentingButton from '../../../../Components/RentingButton';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
import InputText from '../../../../Components/InputText';
export default function SurfaceTreatments({navigation}) {
  const Types=[
'            ',
'     Curing compounds       ',
'   Deshuttering agents        ',
'       Water repellent coating     ',
'  Tile cleaner          ',
' Demoulding agents           ',
'  Surface retarders          ',
' Rust removers           ',
'  Concrete cleaners          ',

  ]

  const Brands=[
'  Select All           ',
'      Dimetrics MOD SUP      ',
'  KCH          ',
'      MXBON      ',
'       ALSTA     ',
'        CETEX    ',
'      Asmi Chem      ',
'   CORONASH         ',
' KK India           ',
'  Star pass 1          ','Addage','Omet'
  ]




  return (
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
 <ServiceCardSand 
 title="Select Types"
 />
 <ServiceCardSand 
 title="Select Sizes"
 />
  <InputText
 placeholder="Enter Quantity"/>
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
    </View>
  );
}
