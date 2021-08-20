import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../Utils/Colors';
import Arrow_button from './Arrow_button';

export default class NewPitchItemComponent1 extends Component {
  render() {
    let {item, navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <Text style={styles.label}>Prakash S</Text>
          <Text style={styles.label1}>Company Name</Text>
          <Text style={styles.label1}>{item.name}</Text>
          <View style={styles.timeContainer}>
            <Text style={styles.label1}>{item.timestamp}</Text>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.label}>₹ 6,200 </Text>
            <Text style={styles.label1}>Quantity:20</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NewLeads');
            }}
            style={item.isUrgent ? styles.urgent : styles.inDays}>
            <Text style={styles.urgencyStatus}>Accepted</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.arrowButtonContainer}>
          <Arrow_button />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      borderWidth: 0.5,
  
      borderRadius: 10,
      height: 120,
      flexDirection: 'row',
      paddingVertical: 10,
      paddingHorizontal: 6,
      marginBottom:0
 
    },
    column: {
      flex: 1,
      justifyContent:'space-between'
      ,alignContent:'space-between',
      paddingHorizontal:13
    },
    name: {
      color: Colors.white,
    },
    time: {
      fontWeight: 'bold',
      color: Colors.white,
      fontSize: 13,
    },
    label: {
      color: Colors.white,
      fontWeight: 'bold',
      marginVertical:4
    },
    label1: {
      color: 'grey',
      // fontWeight: 'bold',
      marginVertical:1
    },
    value: {
      fontWeight: 'bold',
      color: Colors.white,
      fontSize: 14,
    },
    row: {
      flexDirection: 'column',
      justifyContent:'space-between',
      alignItems:'stretch',
  
      
      
  
    },
    urgent: {
      height: 26,
      backgroundColor: Colors.lightred,
      width: 90,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      marginTop: 'auto',
    },
    arrowButtonContainer: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    inDays: {
      height: 26,
      backgroundColor: Colors.lightgreen,
      width: 90,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 14,
      marginTop: 'auto',
    },
    timeContainer: {
      marginTop: 'auto',
      justifyContent: 'center',
      height: 26,
    },
  });
  