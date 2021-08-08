import React from 'react';
import {View, Text,StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import Styles from '../../Assets/Styles/Styles';
import Header_Component from '../../Components/Header_Component';
import Service_card from '../../Components/Service_card';
import C_materials from '../../Assets/Icons/Construction_Materials.png';
import C_agents from '../../Assets/Icons/Agents.png';
import C_vehicles from '../../Assets/Icons/Construction_Vehicles.png';
import C_chemicals from '../../Assets/Icons/construction_chemical.png';
import ConstructionMaterials from './services/ConstructionMaterials';
import ConstructionVehicles from './services/ConstructionVehicles';
import ConstructionChemicals from './services/ConstructionChemicals';
import Agents from './services/Agents';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from 'styled-system';

const Services = ({navigation}) => {
  return (
    <View
    style={{  backgroundColor:"#121417",
    flex: 1,}}
    >
    <Header_Component Heading="Services" />
    <ScrollView>

     <View
    style={styles1.box}
     >
       <View
       style={styles1.box1}
       >
       <TouchableOpacity
        onPress={() => {
          navigation.navigate('ConstructionMaterials');
        }}>
        <Service_card Icon={C_materials} Name="Construction Materials" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Agents');
        }}>
        <Service_card Icon={C_agents} Name="Agents" />
      </TouchableOpacity>
       </View>

       <View
         style={styles1.box1}
       >
       <TouchableOpacity
        onPress={() => {
          navigation.navigate('ConstructionVehicles');
        }}>
        <Service_card Icon={C_vehicles} Name="Construction Vehicles" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ConstructionChemicals');
        }}>
        <Service_card Icon={C_chemicals} Name="Construction Chemicals" />
      </TouchableOpacity>
       </View>
    
      

     </View>

    </ScrollView>
   </View>
  );
};

export default Services;
const styles1=StyleSheet.create({

  box:{


   
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
    // marginHorizontal:'10%'
    
  }
  ,
  box1:{
flexDirection:'row',
  }
})