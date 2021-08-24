import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {StyleSheet, View, StatusBar} from 'react-native';
import Header_Component from '../../../../Components/Header_Component';
import Colors from '../../../../Utils/Colors';

import PitchedLeadScreen from './PitchLeadScreen';
import NewLeadScreen from './NewLeadsScreen';

const Tab = createMaterialTopTabNavigator();

function LeadsTab() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: Colors.darkgrey}}
      tabBarOptions={{
        style: {backgroundColor: '#323436',marginTop:7},
        labelStyle: {color: 'white', textTransform: 'none', fontSize: 20},
        indicatorStyle: {
          backgroundColor: Colors.yellow,
          width: 100,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          marginLeft: 53,
        },
      }}>
      <Tab.Screen
        name="Paint"
        component={NewLeadScreen}
        options={{title: 'Paint'}}
      />
      <Tab.Screen
        name="Putty"
        component={PitchedLeadScreen}
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
