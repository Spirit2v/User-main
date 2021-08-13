import React, {useState} from 'react';

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

const DropdownCheckbox = ({Types, placeholder}) => {
  //   const Types = [
  //     '   Select All         ',
  //     'Cementitious repair motars            ',
  //     '     Cementitious micro concrete       ',
  //     '    Epoxy resing based concrete        ',
  //     '  Epoxy resin based motars          ',
  //     '   Epoxy and PU injection grouts         ',
  //     '  Structural reinforcement protection          ',
  //     '     Fibre reinforced polymers       ',
  //   ];
  const Data = Types;
  const [shouldShow, setShouldShow] = useState(true);
  const renderItem = ({item}) => (
    <View style={[styles.secondbox1]}>
      <Checkbox1 />
      <View style={{width: 12}}></View>
      <Text style={{color: 'white'}}>{item}</Text>
    </View>
  );
  return (
    <SafeAreaView>
      <View>
        {shouldShow ? (
          <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
            <View style={styles.firstbox}>
              <Text style={{color: 'white'}}>{placeholder}</Text>
              <ArrowDownward />
            </View>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
              <View style={styles.secondbox}>
                <Text style={{color: 'white'}}>{placeholder}</Text>
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
              keyExtractor={item => item.index}
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
    </SafeAreaView>
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
    borderRadius: 2,
    padding: 10,
  },
  secondbox: {
    borderRadius: 10,
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
    borderRadius: 10,
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
});

export default DropdownCheckbox;
