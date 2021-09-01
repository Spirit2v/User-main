import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../../../Assets/Styles/Styles';
import Header_Component from '../../../Components/Header_Component';
import ConstructionMaterials_card from '../../../Components/ConstructionMaterials_card';
import C_materials from '../../../Assets/Icons/Construction_Materials.png';
import C_agents from '../../../Assets/Icons/Agents.png';
import C_vehicles from '../../../Assets/Icons/Construction_Vehicles.png';
import C_chemicals from '../../../Assets/Icons/construction_chemical.png';
import Cement from '../../../Assets/Icons/cement.png';
import Bricks from '../../../Assets/Icons/BB.png';
import Sand from '../../../Assets/Icons/sand.png';
import Stone1 from '../../../Assets/Icons/stone.png';
import Rmc from '../../../Assets/Icons/Rmc.png';
import Tmt from '../../../Assets/Icons/TNT.png';
import Marble_tiles from '../../../Assets/Icons/Marbleandtiles.png';
import Pipes from '../../../Assets/Icons/pipes.png';
import Paint_Putty from '../../../Assets/Icons/Paint_Putty.png';
import Shuttering from '../../../Assets/Icons/Shuttering.png';
import ConstructionVehicles from './ConstructionVehicles';
import ConstructionChemicals from './ConstructionChemicals';
import {ScrollView} from 'react-native-gesture-handler';

const ConstructionMaterials = ({navigation}) => {
  return (
<>
    
    <ScrollView>
      <View style={Styles.Service_container}>
     
       
       
       <TouchableOpacity
       
       onPress={() => {
        navigation.navigate('Cement');
      }}
       >

       <ConstructionMaterials_card Icon={Cement} Title="Cement" />
       </TouchableOpacity>
        
      
      
      
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BricksAndBlock');
          }}>
          <ConstructionMaterials_card Icon={Bricks} Title="Bricks and Blocks" />
        </TouchableOpacity>
      
      
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Stones');
          }}>
          <ConstructionMaterials_card Icon={Stone1} Title="Stones" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Sand');
          }}>
          <ConstructionMaterials_card Icon={Sand} Title="Sand" />
        </TouchableOpacity>
      
      
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RMCmixture');
          }}>
      
          <ConstructionMaterials_card Icon={Rmc} Title="RMC Mixture" />
        </TouchableOpacity>
      
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TMTsteel');
          }}>
          <ConstructionMaterials_card Icon={Tmt} Title="TMT Iron and Steel" />
        </TouchableOpacity>
      
      
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MarbleAndTiles');
          }}>
         
          <ConstructionMaterials_card Icon={Marble_tiles} Title="Marble and Tiles" />
        </TouchableOpacity>
      
      
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Pipes');
          }}>
          <ConstructionMaterials_card Icon={Pipes} Title="Pipes" />
        </TouchableOpacity>
      
      
      
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PaintAndPutty');
          }}>
        
          <ConstructionMaterials_card Icon={Paint_Putty} Title="Paint and Putty" />
        </TouchableOpacity>


    
      
      </View>
    </ScrollView>
    </>
  );
};

export default ConstructionMaterials;
