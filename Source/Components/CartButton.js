import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import Colors from '../Utils/Colors';
export default function CartButton({placeholder}) {
    return (
        <View>
            <TouchableOpacity >
            <View style={styles.firstbox}>
              <Text style={{color: 'white'}}>Deliver to:{placeholder}</Text>
            <Text
            
            style={{color:'#ffb600'}}>
                Change
            </Text>
              </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
 
  firstbox: {
    borderRadius: 10,
   paddingHorizontal:10,
    width: '100%',
    height: 49,
    backgroundColor: Colors.blackBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    marginBottom: 20,
  },
  boxe: {
    width: '100%',
    height: 53,
    backgroundColor: Colors.blackBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  boxe1: {
    width: '100%',
    height: 253,
    backgroundColor: Colors.blackBlue,
    borderRadius: 10,

    padding: 8,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    marginBottom: 17,
    elevation: 8,
    marginBottom: 20,
  },
});
