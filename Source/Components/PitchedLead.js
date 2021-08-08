import React from 'react';
import {View, Text, Image,ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import Styles from '../Assets/Styles/Styles';

import Arrow_button from '../Components/Arrow_button';
import Colors from '../Utils/Colors';
export default function PitchLead({name,rupees}) {
    return (
        <View>
         <View style={Styles.Dashboard_body}>
        
        <View style={{flexDirection:'row',
 justifyContent:'space-between',
 width:'89%',height:89,borderRadius:6,
 marginHorizontal:'15%',padding:'2%',borderColor:'grey',borderWidth:0.2,
 flexDirection:'row',marginBottom:4
 }}
  >
  <View  style={{padding:3,justifyContent:'space-between',alignText:'center'}}
  >
        <Text
  style={{color:'white'}}
  
  >{name}</Text>
  <Text
  style={{color:'white'}}
  
  >Cement</Text>
  <Text style={{color:'white'}}
  >4 hour ago</Text>
  </View>
  
  
  <View>
  <Text
  style={{color:'white'}}
  
  >{rupees}</Text>
  <Text
  style={{color:'white'}}
  
  >Quantity 10</Text>
<TouchableOpacity>
  <View
  style={{backgroundColor:Colors.lightyellow,borderRadius:13,height:25,width:80,justifyContent:'center',padding:0,alignText:'center',alignItems:'center'}}
  >

<Text style={{color:'white'}}>
   
   2 Days</Text>

  </View>


</TouchableOpacity>
  
  </View>
  
  
   
 
 <View
 style={{alignItems:'center',justifyContent:'center'}}
 >
 <Arrow_button />
 </View>
  
  
  </View>
    </View>
        </View>
    )
}
