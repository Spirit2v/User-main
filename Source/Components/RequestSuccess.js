import React, {useState} from 'react';
import {View, Text,Image, TouchableOpacity, StyleSheet} from 'react-native';

import Button from './Button';
import Buttonq from './Buttonq';
import Buttonq1 from './Buttonq1';
import DropdownCheckbox from './DropdownCheckbox';
import ServiceCardSand from './ServiceCardSand';
import SignupCard from './SignupCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {backgroundColor} from 'styled-system';
import CFlogo from '../Assets/Icons/CFlogo.png';
export default function RequestSuccess({Should,setShould,navigation}) {
  return (
    <>
      <View
        style={{
          flex: 1,
          height: '100%',
          width: '100%',

          backgroundColor: 'grey',
          color: 'black',
          position: 'absolute',
          opacity:.13
        }}></View>
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          top: '35%',
          left: '15%',
          backgroundColor:'#1A1B1C',
          opacity: 1,
          borderRadius:23,
          shadowColor: 'white',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
      
          elevation: 8,
        }}>
        <View style={styles.box}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 12,
              justifyContent: 'space-between',
            }}>
            <View
              style={{flexDirection: 'row', padding: 2, paddingVertical: 12}}>
              <Image
            source={CFlogo}
            style={{
              height: 35, width: 150}}
          />
            </View>
            <View
            style={{padding:10}}
            >
              <TouchableOpacity onPress={() => navigation.navigate('Request')}>
                <Ionicons name="close-outline" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View
             style={{
        
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
          
              }}>
          <View
            style={{
            
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 23,
              width: 42,
              height:42,
              marginTop:23,
              padding:-16,
            
              flexDirection:'row'
            }}>
    
    
    <View
            style={{
            
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 23,
              width: 22,
              height:22,
              marginTop:46,
              padding:-16,
            
              flexDirection:'row',
              position:'absolute',
              left:10,
              backgroundColor:'white'
            }}>

            </View>
              <Ionicons 
                    name="checkmark-circle" size={43} color="#ffb600" />
          </View>
          </View>
          <View
            style={{
              padding: 39,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop:-24
            }}>
            <Text style={{color: '#ffb600', fontSize: 18}}>
              Your request has been sent!
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
