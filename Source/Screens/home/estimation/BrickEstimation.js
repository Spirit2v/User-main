import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Dropdown from '../../../Components/Dropdown';
import Header_Component from '../../../Components/Header_Component';
import DropDownPicker from 'react-native-dropdown-picker';
import {Container} from 'native-base';
import InputDropdown from '../../../Components/InputDropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropdownCheckbox from '../../../Components/DropdownCheckbox';
import Buttonq from '../../../Components/Buttonq';
import EstimationResult from '../../../Components/EstimationResult';
export default function BrickEstimation() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'cm', value: 'apple'},
    {label: 'm', value: 'banana'},
  ]);

  const navigation = useNavigation();
  return (
    <>
      <View style={{backgroundColor: '#121417', flex: 1}}>
        <Header_Component Heading="Brick Estimation" />
        <ScrollView nestedScrollEnabled={true}>
          <View style={{padding: 20}}>
            <Text style={{color: 'white', marginBottom: 20}}>
              Room Area Calculation
            </Text>
            <Text style={{color: 'white'}}>Room 1</Text>
          </View>
          <InputDropdown
            items={items}
            setItems={setItems}
            open={setOpen}
            value={setValue}
            value={value}
            open={open}
          />
          <View style={{marginVertical: 12}}></View>
          <InputDropdown
            items={items}
            setItems={setItems}
            open={setOpen}
            value={setValue}
            value={value}
            open={open}
          />
          <View style={{padding: 20, flexDirection: 'row'}}>
            <View
              style={{
                borderRadius: 22,
                backgroundColor: 'black',
                width: 24,
                height: 24,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons name="add" size={22} color="#ffb600" />
            </View>
            <Text style={{color: 'white', margin: 1, marginLeft: 11}}>
              Add new rooms
            </Text>
          </View>
          <View
            style={{
              paddingRight: 200,
              paddingLeft: 30,
              justifyContent: 'flex-start',
            }}>
            <DropdownCheckbox placeholder="Thickness" />
            <DropdownCheckbox placeholder="Motor Ratio" />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View>
              <TextInput
                placeholder="Enter text"
                placeholderColor="white"
                style={{
                  borderColor: 'grey',
                  borderWidth: 1,
                  borderRadius: 4,
                  marginLeft: 0,
                  color: 'white',
                }}
                height={40}
                width={200}
              />
            </View>
            <Buttonq title="Calculate" hi={43} wi={93} />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                width: '95%',
                backgroundColor: 'grey',
                height: 1,
                marginTop: 30,
                justifyContent: 'center',
              }}></View>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text
              style={{
                color: 'white',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginVertical:6
              }}>
              Deduction For opening
            </Text>
          </View>
          <View
            style={{marginVertical:20,
              paddingRight: 200,
              paddingLeft: 30,
              justifyContent: 'flex-start',
            }}>
            <DropdownCheckbox placeholder="Thickness" />
           
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View>
              <TextInput
                placeholder="Enter text"
                placeholderColor="white"
                style={{
                  borderColor: 'grey',
                  borderWidth: 1,
                  borderRadius: 4,
                  marginLeft: 0,
                  color: 'white',
                }}
                height={40}
                width={200}
              />
            </View>
            <Buttonq title="Calculate" hi={43} wi={93} />
          </View>
          <View
          style={{paddingHorizontal:20}}>
          <EstimationResult/>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
