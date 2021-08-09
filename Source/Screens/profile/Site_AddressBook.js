import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Styles from '../../Assets/Styles/Styles';
import Header_Component from '../../Components/Header_Component';
import ProgressBar from 'react-native-progress/Bar';
import Colors from '../../Utils/Colors';
import Profile_TextinputCard from '../../Components/Profile_TextinputCard';
import Button from '../../Components/Button';
import { ScrollView } from 'react-native-gesture-handler';

const Site_AddressBook = ({navigation, route}) => {
  let {percentage } = route.params;
  return (

<ScrollView>
<View style={Styles.ProfileDetails_container}>
   <View
   style={{justifyContent:'space-between',flexDirection:'row'}}
   
   >

     <Text
     style={{color:'white'}}
     >Site 1</Text>
     <Text
     style={{color:'#ffb600'}}
     >Edit</Text>
   </View>
   <View
   style={{height:52,backgroundColor:'black',borderRadius:10,marginVertical:12}}
   >

   </View>
   <TextInput/>


   <View
   style={{justifyContent:'space-between',flexDirection:'row',marginTop:-43}}
   
   >

     <Text
     style={{color:'white'}}
     >Site 1</Text>
     <Text
     style={{color:'#ffb600'}}
     >Edit</Text>
   </View>
   <View
   style={{height:52,backgroundColor:'black',borderRadius:10,marginBottom:12}}
   >

   </View>
   <TextInput/>
   </View>
</ScrollView>


 
  );
};

export default Site_AddressBook;
