import React, {Component, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {StyleSheet, View, StatusBar} from 'react-native';
import Header_Component from '../../Components/Header_Component';
import Colors from '../../Utils/Colors';
import Paint from './Paint';
import Putty from './services/material/Putty';
import Agents from './services/Agents';
import {ScrollView} from 'react-native-gesture-handler';
import ConstructionMaterial from './services/ConstructionMaterials';
import ConstructionVehicles from './services/ConstructionVehicles';
import ConstructionChemicals from './services/ConstructionChemicals';
import SwiperComponent from '../../Components/SwiperComponent';
import SwiperComponent1 from '../../Components/SwiperComponent1';

const Tab = createMaterialTopTabNavigator();

function LeadsTab() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: Colors.darkgrey}}
      tabBarOptions={{
        scrollEnabled: true,
        style: {
          backgroundColor: Colors.darkgrey,
          marginTop: -20,
          marginBottom: 20,
          height: 63,
          width: '100%',
        },
        labelStyle: {
          color: 'white',
          textTransform: 'none',
          fontSize: 20,
          marginVertical: 23,
        },
        indicatorStyle: {
          backgroundColor: Colors.yellow,
          // width: 100,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          // marginLeft: '10%',
        },
      }}>
      <Tab.Screen
        name="Paint"
        component={ConstructionMaterial}
        options={{title: 'Material'}}
      />
      {/*   <Tab.Screen
        name="Paint"
        // component={Paint}
        options={{title: 'Paint'}}
      />
         <Tab.Screen
        name="Paint"
        // component={Paint}
        options={{title: 'Paint'}}
      /> */}
      <Tab.Screen name="Agent" component={Agents} options={{title: 'Agent'}} />
      <Tab.Screen
        name="ConstructionMaterial"
        component={ConstructionVehicles}
        options={{title: 'Vehicle'}}
      />

      <Tab.Screen
        name="ConstructionVehicle"
        component={ConstructionChemicals}
        options={{title: 'Chemical'}}
      />
    </Tab.Navigator>
  );
}
export default class PaintAndPutty extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.darkgrey} />
<SwiperComponent1/>
        {LeadsTab()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkgrey,
  },
});
