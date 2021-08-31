import React, {Component,useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {StyleSheet, View, StatusBar} from 'react-native';
import Header_Component from '../../Components/Header_Component';
import Colors from '../../Utils/Colors';
import Paint from './Paint';
import Putty from './services/material/Putty';
import Agents from './services/Agents';
import { ScrollView } from 'react-native-gesture-handler';



const Tab = createMaterialTopTabNavigator();

function LeadsTab() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: Colors.darkgrey}}
      tabBarOptions={{
        scrollEnabled: true,
        style: {backgroundColor: Colors.darkgrey,marginTop:0,height:43,width:'100%'},
        labelStyle: {color: 'white', textTransform: 'none', fontSize: 20},
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
        component={Paint}
        options={{title: 'Construction Material'}}
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
      <Tab.Screen
        name="Agent"
        component={Agents}
        options={{title: 'Agent'}}
      />
          <Tab.Screen
        name="ConstructionMaterial"
        component={Agents}
        options={{title: 'Construction Material'}}
      />
          
          <Tab.Screen
        name="ConstructionVehicle"
        component={Agents}
        options={{title: 'Construction Vehicle'}}
      />
          
            <Tab.Screen
        name="Putty"
        component={Putty}
        options={{title: 'Putty'}}
      />
    </Tab.Navigator>
  );
}
export default class PaintAndPutty extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.darkgrey} />

        {LeadsTab()}
        <View style={{height: 3}}></View>
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
