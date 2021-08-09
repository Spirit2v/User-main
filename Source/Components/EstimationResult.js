import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function EstimationResult() {
  return (
    <View style={styles.box}>
        <View
        style={{justifyContent:'center',alignItems:'center'}}
        >
        <Text style={{color: 'white', fontSize: 22}}>Result</Text>
        </View>
     
      <View style={styles.line}></View>
      <View>
        <View style={styles.text}>
          <Text style={{color: 'grey', fontSize: 14}}>Quantity of bricks</Text>
          <View
          style={{flexDirection:'row'}}
          >
            <View
              style={{height: 15, width: 32, backgroundColor: 'grey'}}></View>
                <View
              style={{height: 15, width: 32, backgroundColor: 'grey',marginHorizontal:12}}></View>
          </View>
          
        </View>


        <View style={styles.text}>
          <Text style={{color: 'grey', fontSize: 14}}>Quantity of bricks</Text>
          <View
          style={{flexDirection:'row'}}
          >
            <View
              style={{height: 15, width: 32, backgroundColor: 'grey'}}></View>
                <View
              style={{height: 15, width: 32, backgroundColor: 'grey',marginHorizontal:12}}></View>
          </View>
          
        </View>
        <View style={styles.text}>
          <Text style={{color: 'grey', fontSize: 14}}>Quantity of bricks</Text>
          <View
          style={{flexDirection:'row'}}
          >
            <View
              style={{height: 15, width: 32, backgroundColor: 'grey'}}></View>
                <View
              style={{height: 15, width: 32, backgroundColor: 'grey',marginHorizontal:12}}></View>
          </View>
          
        </View>
        <View>
          <Text></Text>
          <View></View>
        </View>

        <View>
          <Text></Text>
          <View></View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 170,
    backgroundColor: 'black',
    borderRadius: 12,
  
    marginVertical: 23,
    paddingHorizontal:10
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical:8
  },

  line: {
    width: '105%',
    backgroundColor: 'grey',
    height: 1,
    marginTop: 10,
    justifyContent: 'center',
    marginLeft:-9,

  },
});
