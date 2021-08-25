import axios from 'axios';
import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

export default function Cart1({navigation, Data, setData}) {
  const deletebyId = id => {
    const filteredData = Data.filter(item => item.id == id);
    axios
      .post(`${global.URL}/product/delete_cart_item/23}`, id)
      .then(response => {
        console.log(response);

        alert('Deleted');
      });
    const NewData = Data.filter(item => item.id !== id);
    setData(NewData);
  };
  const [selectedId, setSelectedId] = useState('');

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
          <Text style={{color: 'white'}}>
            {item.data}
            {item.brand}
            {item.type}
          </Text>
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
        <TouchableOpacity
          style={{
            height: '100%',
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'grey',
            borderRightWidth: 0.2,
          }}>
          <Text style={{color: '#ffb600'}}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deletebyId(item.id)}
          style={{
            height: '100%',
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#ffb600'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        nestedScrollEnabled={true}
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    flex: 1,
    height: 150,
    width: '100%',
    marginBottom: 20,
  },
  border: {
    borderWidth: 1,
    height: '70%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0A0A0B',
  },
  border1: {
    borderColor: 'grey',
    borderWidth: 0.2,
    height: '29%',
    flexDirection: 'row',
    paddingVertical: 6,
    backgroundColor: 'black',
  },
  boxButton: {
    flexDirection: 'row',
    borderRadius: 9,
    padding: 1,
    height: 23,
    width: 69,
    backgroundColor: '#E92323',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
  },
});
