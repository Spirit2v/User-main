import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native';
export default function HomeCard({}) {
  const navigation = useNavigation();
    return (<>
        <View style={{padding: 25,marginTop:-132}}>
        <View
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              height: 113,
              width: '50%',
              backgroundColor: 'grey',
              padding: 12,
            }}>
            <View>
              <View
                style={{
                  backgroundColor: '#FFB600',
                  height: 12,
                  width: 32,
                  borderRadius: 2,
                  marginBottom: 2,
                }}></View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    backgroundColor: '#FFB600',
                    height: 20,
                    width: 10,
                    borderRadius: 2,
                    marginRight: 2,
                  }}></View>

                <View
                  style={{
                    backgroundColor: 'white',
                    height: 20,
                    width: 20,
                    borderRadius: 2,
                  }}></View>
              </View>
              <View></View>
            </View>
            <Text style={{color: 'white', marginBottom: 12, marginTop: 6}}>
              Construction Materials
            </Text>
            <TouchableOpacity
            
            onPress={()=>navigation.navigate('Dashboard')}
            >
            <Text style={{color: '#FFB600'}}>Browse ></Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 113,
              width: '45%',
              backgroundColor: 'grey',
            }}>
            <View
              style={{
                height: 113,
                width: '50%',
                backgroundColor: 'grey',
                padding: 7,
       
       paddingLeft:6
                // paddingHorizontal:12
              }}>
              <View>
              
                <View style={{flexDirection: 'row',padding:4}}>
                  <View
                    style={{
                      backgroundColor: '#FFB600',
                      height: 27,
                      width: 9,
                      borderRadius: 2,
                      marginRight: 2,
                    }}></View>

                  <View
                    style={{
                      backgroundColor: 'white',
                      height: 27,
                      width: 9,
                      borderRadius: 2,
                    }}></View>
                </View>
                <View></View>
              </View>
              <Text
                style={{color: 'white', marginBottom: 20, marginTop: 6}}>
             Agent
              </Text>
              <TouchableOpacity
            
            onPress={()=>navigation.navigate('Dashboard')}
            >
            <Text style={{color: '#FFB600'}}>Browse ></Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>






<View style={{padding: 25,marginTop:-32}}>
<View
  style={{flexDirection: 'row', justifyContent: 'space-between'}}>
  <View
    style={{
      height: 113,
      width: '46%',
      backgroundColor: 'grey',
      padding: 12,
    }}>
    <View>
      <View
        style={{
          backgroundColor: '#FFB600',
          height: 12,
          width: 32,
          borderRadius: 2,
          marginBottom: 2,
        }}></View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#FFB600',
            height: 20,
            width: 10,
            borderRadius: 2,
            marginRight: 2,
          }}></View>

        <View
          style={{
            backgroundColor: 'white',
            height: 20,
            width: 20,
            borderRadius: 2,
          }}></View>
      </View>
      <View></View>
    </View>
    <Text
      style={{color: 'white', marginBottom: 12, marginTop: 6}}>
      Construction Vehicle
    </Text>
    <Text style={{color: '#FFB600'}}>Browse ></Text>
  </View>

  <View
    style={{
      height: 113,
      width: '49%',
      backgroundColor: 'grey',
    //   justifyContent:'center'
    }}>
    <View
      style={{
        height: 113,
        width: '50%',
        backgroundColor: 'grey',
        padding: 7,

paddingLeft:6,
justifyContent:'center'
        // paddingHorizontal:12
      }}>
      <View>
      
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#FFB600',
              height: 27,
              width: 9,
              borderRadius: 2,
              marginRight: 2,
            }}></View>

          <View
            style={{
              backgroundColor: 'white',
              height: 27,
              width: 9,
              borderRadius: 2,
            }}></View>
        </View>
        <View></View>
      </View>
      <Text
        style={{color: 'white', marginBottom: 0, marginTop: 6}}>
     Constructio
      </Text>
      <Text
        style={{color: 'white', marginBottom: 9, marginTop: 0}}>
     Chemical
      </Text>
      <TouchableOpacity
            
            onPress={()=>navigation.navigate('Dashboard')}
            >
            <Text style={{color: '#FFB600'}}>Browse ></Text>
            </TouchableOpacity>
    </View>
  </View>
</View>
</View>
</>    )
}
