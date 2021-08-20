import React,{useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity,StyleSheet,FlatList} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import Buttonq from '../Components/Buttonq';
import Buttonq1 from '../Components/Buttonq1';
import CartCard from '../Components/CartCard';
import Header_Component from '../Components/Header_Component';
import Cart21 from  './Cart21'
export default function Cart({navigation}) {






  const [selectedId, setSelectedId] = useState('')
  const [Data, setData] = useState([
    {
      id: '1',
      title: 'Ultratech',
      quantity: '12',
    },
    {id: '2', title: 'Ipc', quantity: '12'},
    {id: '3', title: 'Indiaan', quantity: '12'},
  ])


  const renderItem = ({item}) => (
    <View style={styles.box}>
      <View style={styles.border}>
        <View
          style={{
            backgroundColor: 'grey',
            height: 53,
            width: 43,
            borderRadius: 4,
          }}></View>
        <View>
          <Text style={{color: 'white'}}>{item.title}</Text>
          <Text style={{color: 'grey'}}>Quantity:{item.quantity} bags</Text>
        </View>
        <View>
          <TouchableOpacity>
            <View style={styles.boxButton}>
              <Text style={{fontSize: 12}}>Attach</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.border1}>
        <View
          style={{
            height: '100%',
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'grey',
            borderRightWidth: 0.2,
          }}>
          <Text style={{color: '#ffb600'}}>Edit</Text>
        </View>
        <View
          style={{
            height: '100%',
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#ffb600'}}>Delete</Text>
        </View>
      </View>
    </View>
  );






  return (
    <View style={{backgroundColor: '#121417', flex: 1}}>
      <Header_Component Heading="Cart" />
      <ScrollView style={{backgroundColor: '#121417', padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 23,
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            Order Detail
          </Text>
          <Text
            style={{
              color: 'grey',
            }}>
            19 March ,2021
          </Text>
        </View>
        <Text
          style={{
            color: 'white',
            margin: 12,
          }}>
          2 PRODUCT
        </Text>

      <Cart21 
      Data={Data}
      setData={setData}
      />

      </ScrollView>
      <View
      style={{paddingHorizontal:30,marginVertical:42}}
      >
          <TouchableOpacity
          onPress={()=>navigation.navigate('CartSecond')}
          >
 <Buttonq
      title="Continue"
      hi={45}
      wi={'100%'}
      />
      </TouchableOpacity>
      </View>
     
    </View>
  );
}
