import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import RentingButton from '../../../../Components/RentingButton';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
import InputText from '../../../../Components/InputText';
export default function Tiling({navigation}) {
  const Types=[
     
    '    Select All        ',
    '        Cementitious sself    ',
    '     Leveling compound       ',
    '       Floor hardener     ',
    '     Acrylic sealant       ',
    '    Silicone sealant        ',
    '   Latex sealant         ',
    '     Butyl sealant       '

    
      ]
    
      const Brands=[

      '    Select All        ',
      '       Asian paints     ',
      '  DULUX          ',
      '    Fevicol        ',
      '     Dr.Fixit       ',
      '  MYK LATICRETE          ',
      '  Saint-Gobain Weber          ',
      '     Fosroc India       ',
      '        BASF India    '
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
