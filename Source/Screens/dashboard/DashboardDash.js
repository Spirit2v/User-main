import React from 'react';
import Colors from '../../Utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../../Assets/Styles/Styles';
import Button from '../../Components/Button';
import Buttonq from '../../Components/Buttonq';
import {ScrollView} from 'react-native-gesture-handler';
export default function DashboardDash({navigation}) {
  return (
    <ScrollView>
      <View style={Styles.ProfileDetails_container}>
        <View
          style={{
            padding: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                borderRadius: 3,
                borderColor: '#ffb600',
                borderWidth: 1,
                height: 42,
                width: 96,
                padding: 10,
                flexDirection: 'row',
              }}>
              <Text style={{color: '#ffb600'}}>Cement</Text>
              <Ionicons
                style={{
                  marginLeft: 8,
                }}
                name="chevron-down-outline"
                size={16}
                color={Colors.yellow}
              />
            </View>
            <TouchableOpacity
            
            onPress={()=>navigation.navigate('Services')}
            ><Buttonq
            
            
            title="Add Product +" wi={110} hi={40} /></TouchableOpacity>
            
          </View>

          <View
            style={{
              padding: 10,
              marginTop: 21,
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: 50,
                width: '45%',
                borderColor: 'grey',
                borderWidth: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                }}>
                Brand
              </Text>
            </View>
            <View
              style={{
                height: 50,
                width: '55%',
                borderColor: 'grey',
                borderWidth: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                }}>
                Grade/Type
              </Text>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              marginTop: -21,
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: 400,
                width: '45%',
                borderColor: 'grey',
                borderWidth: 0.2,
                justifyContent:'space-between',
                alignItems: 'center',
                paddingVertical:32
              }}>
              <Text
                style={{
                  color: 'white'
                }}>
              U
              </Text>
              <Text
                style={{
                  color: 'white'
                }}>
                Grade/Type
              </Text>
              <Text
                style={{
                  color: 'white'
                }}>
                Grade/Type
              </Text>
              <Text
                style={{
                  color: 'white'
                }}>
                Grade/Type
              </Text>

              <Text
                style={{
                  color: 'white'
                }}>
                Grade/Type
              </Text>
              <Text
                style={{
                  color: 'white'
                }}>
                Grade/Type
              </Text>
              <Text
                style={{
                  color: 'white',
                }}>
                Grade/Type
              </Text>
            </View>
            <View
              style={{
                height: 400,
                width: '55%',
                borderColor: 'grey',
                borderWidth: 0.2,
             justifyContent:'space-between',
                alignItems: 'center',
                paddingVertical:32
              }}>
         

          
              <Text
                style={{
                  color: 'white'
                }}>
                Grade/Type
              </Text>
              <Text
                style={{
                  color: 'white'
                }}>
                Grade/Type
              </Text>
              <Text
                style={{
                  color: 'white'
                }}>
                Grade/Type
              </Text>
              <Text
                style={{
                  color: 'white'
                }}>
                Grade/Type
              </Text>

              <Text
                style={{
                  color: 'white'
                }}>
                Grade/Type
              </Text>
              <Text
                style={{
                  color: 'white'
                }}>
                Grade/Type
              </Text>
              <Text
                style={{
                  color: 'white',
                }}>
                Grade/Type
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
