import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Checkbox1 from '../Components/Checkbox';

import Colors from '../Utils/Colors';
import TextStyles from '../Assets/Styles/TextStyles';
import Arrow_button from '../Components/Arrow_button';
import ArrowDownward from '../Components/ArrowDownward';
import {
  Menu,
  VStack,
  Select,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from 'native-base';
import SelectDropdown from 'react-native-select-dropdown';
import CheckBox from 'react-native-check-box';

import {Touchable} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {flexDirection} from 'styled-system';
import ArrowUpward from './ArrowUpward';

const DropdownCheckbox = ({Types, placeholder, setFunction}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [value, setValue] = useState('');
  const [checked, onChange] = useState(false);
  const [Clay, setClay] = useState('');
  const [title, setTitle] = useState('');
  const [test, settest] = useState('')
  const nol="";
const work=(item)=>{

    setSelectedId('')
      setFunction(nol)
setTitle(item.title)

}
  const onclick = item => {
    {item.id === selectedId ?

       work(item)
      :  setSelectedId(item.id)
      setFunction(item.title)
setTitle(item.title)
    }
  

    // onChange(!checked);
    //   {
    //     !checked ?  setSelectedId(item.id):  setSelectedId('');
    //   }
  };

  const Data = Types;
  const [shouldShow, setShouldShow] = useState(true);
  const renderItem = ({item}) => (
    <View style={[styles.secondbox1]}>
      <View style={styles.cont}>
        <TouchableOpacity
          style={[styles.checkboxBase, checked && styles.checkboxChecked]}
          onPress={() => onclick(item)}>
          {item.id === selectedId ? (
            <Ionicons name="checkmark" size={24} color="#00FF00" />
          ) : (
            <View></View>
          )}
        </TouchableOpacity>
      </View>

      <View style={{width: 12}}></View>
      <Text style={{color: 'white'}}>{item.title}</Text>
    </View>
  );
  return (
    <View>
      {shouldShow ? (
        <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
          <View style={styles.firstbox}>
            <Text style={{color: 'white'}}>{title ? title : placeholder}</Text>
            <ArrowDownward />
          </View>
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
            <View style={styles.secondbox}>
              <Text style={{color: 'white'}}>
                {title ? title : placeholder}
              </Text>
              <ArrowUpward />
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderRadius: 12,
              height: 20,
              backgroundColor: 'black',
              marginBottom: -10,
              marginTop: 0.6,
            }}></View>
          <FlatList
            nestedScrollEnabled={true}
            data={Data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
          <View
            style={{
              borderRadius: 12,
              height: 20,
              backgroundColor: 'black',
              marginBottom: 10,
              marginTop: -10,
            }}></View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  secondbox1: {
    width: '100%',
    height: 43,
    paddingLeft: 20,
    backgroundColor: Colors.blackBlue,
    flexDirection: 'row',

    justifyContent: 'flex-start',
    borderRadius: 0,
    padding: 10,
  },
  secondbox: {
    borderRadius: 8,
    padding: 16,
    width: '100%',
    height: 53,
    backgroundColor: Colors.blackBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  firstbox: {
    borderRadius: 6,
    padding: 16,
    width: '100%',
    height: 53,
    backgroundColor: Colors.blackBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
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

  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 0,

    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    backgroundColor: 'transparent',
  },

  cont: {
    shadowColor: 'grey',

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8.65,
    marginBottom: 17,
    elevation: 8,
    justifyContent: 'center',

    height: 20,
    borderRadius: 3,
    width: 20,
    borderColor: 'grey',
    borderWidth: 1,
  },
});

export default DropdownCheckbox;
