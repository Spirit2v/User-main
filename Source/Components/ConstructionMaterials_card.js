import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Colors from '../Utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextStyles from '../Assets/Styles/TextStyles';

const ConstructionMaterials_card = ({Icon, Title}) => {
  return (
    <View style={styles.Box}>
      <View style={styles.Left_View}>
        <Image source={Icon} style={styles.Icon} />
      </View>
      <View style={styles.Right_view}>
        <View>
        <Text style={{color:'white'
      ,paddingVertical:15
      }}>{Title}</Text>
        </View>
        <View
        style={{
    paddingVertical:12,
 marginRight:'-10%'
        }}
        >
        <View style={styles.Iconview}>
          <Ionicons name="caret-forward-outline" color={Colors.yellow} />
          </View></View>
      </View>
    </View>
  );
};

export default ConstructionMaterials_card;

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 62,
 
    backgroundColor: Colors.blackBlue,
    flexDirection: 'row',
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 10,
marginVertical:10
  },
  Left_View: {
    height: 62,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Right_view: {
    borderLeftWidth: 0.7,
    borderLeftColor: Colors.grey,

    height: 62,
    width: '75%',
    flexDirection: 'row',
justifyContent:'space-between',
    padding: 8,
  },
  Icon: {height: 40, width: 40},
  Iconview: {
    height: 24,
    width: 24,
    backgroundColor: Colors.blackBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: Colors.lightgrey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
