import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import RentingButton from '../../../../Components/RentingButton';
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import AddtoCard from '../../../../Components/AddtoCard';
export default function Sand({navigation}) {
  return (
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
        <RentingButton text="Low" />
        <RentingButton text="Medium" />

        <RentingButton text="High" />

        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Text style={{color: '#ffb600', fontSize: 26}}>+</Text>
          <Text
            style={{
              color: '#ffb600',
              fontSize: 15,
              marginTop: 7,
              marginLeft: 6,
            }}>
            Add more items
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
        <AddtoCard />
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
  );
}
