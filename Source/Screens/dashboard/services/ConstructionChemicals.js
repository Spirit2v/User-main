import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import Styles from '../../../Assets/Styles/Styles';
import ConstructionMaterials_card from '../../../Components/ConstructionMaterials_card';
import Header_Component from '../../../Components/Header_Component';
import Concretemix from '../../../Assets/Icons/concreteadmixture.png';
import Waterproof from '../../../Assets/Icons/waterproof.png';
import Surfacetreats from '../../../Assets/Icons/surfacetreatment.png';
import Groutanchor from '../../../Assets/Icons/groutandanchor.png';
import Concreterepair from '../../../Assets/Icons/concreterepair.png';
import Sealant from '../../../Assets/Icons/sealant.png';
import Flooring from '../../../Assets/Icons/flooring.png';
import Tiling from '../../../Assets/Icons/tiling.png';

const ConstructionChemicals = ({navigation}) => {
  return (
    <>
  
    <ScrollView>
      <View style={Styles.Service_container}>

        <TouchableOpacity onPress={() => navigation.navigate('Waterproofing')}>
          <ConstructionMaterials_card Icon={Waterproof} Title="Concrete Admixture" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Waterproofing')}>
          <ConstructionMaterials_card Icon={Waterproof} Title="Waterproofing" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SurfaceTreatments')}>
          <ConstructionMaterials_card Icon={Surfacetreats} Title="Surface Treatments" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GroutsAndAnchor')}>
          <ConstructionMaterials_card Icon={Groutanchor} Title="Grout and Anchor" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ConcreteRepair')}>
          <ConstructionMaterials_card Icon={Concreterepair} Title="Concrete Repair" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sealant')}>
          <ConstructionMaterials_card Icon={Sealant} Title="Sealant" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Flooring')}>
          <ConstructionMaterials_card Icon={Flooring} Title="Flooring" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tiling')}>
          <ConstructionMaterials_card Icon={Tiling} Title="Tiling" />
        </TouchableOpacity>
      </View>
    </ScrollView>
 </>
  );
};

export default ConstructionChemicals;
