import React from 'react'
import { View, Text,TouchableOpacity, } from 'react-native'
import Styles from '../../../../Assets/Styles/Styles';
import BlackBox from '../../../../Components/BlackBox';
import Buttonq1 from '../../../../Components/Buttonq1';
import Buttonq from '../../../../Components/Buttonq';
import Checkbox1 from '../../../../Components/Checkbox1';
import InputText from '../../../../Components/InputText';
export default function Roller({navigation}) {
  return (
    <View>
      <View style={Styles.ProfileDetails_container}>
        <View style={{marginTop: 10, padding: 10}}>
          <BlackBox />

          <InputText placeholder="Type Capacity" />
          <View
            style={{flexDirection: 'row', marginTop: 22, marginHorizontal: 22}}>
            <Text style={{color: '#FFB600'}}>Drive Requirement</Text>
            <View style={{margin: 4, marginLeft: 12}}>
              <Checkbox1 />
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 25,
              height: 150,
              backgroundColor: 'grey',
              padding: 12,
            }}>
            <Text style={{color: 'white', opacity: 0.7}}>
              Type special requirements if any ( Brands, MFG Year,Model No,
              Experience year etc. )
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Buttonq title="Add to Cart" hi={42} wi={99} />
            <View style={{paddingHorizontal: 10}}></View>
            
            <TouchableOpacity
            onPress={()=>{navigation.navigate('Request')}}>
            <Buttonq1 
             onPress={()=>{navigation.navigate('Request')}}
            title="Request" hi={42} wi={78} />
            </TouchableOpacity>
        
        </View>
        </View>
      </View>
    </View>
  );
}
