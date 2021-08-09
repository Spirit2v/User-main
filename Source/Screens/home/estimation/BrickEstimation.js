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
            <Text style={{color: 'white', margin: 1,marginLeft:11}}>Add new rooms</Text>
          </View>
          <View
          style={{paddingRight:200,paddingLeft:30,justifyContent:'flex-start'}}
          >
          <DropdownCheckbox
          placeholder="Thickness"
          />
          <DropdownCheckbox
          placeholder="Motor Ratio"
          />
          </View>
          
        </ScrollView>
      </View>
    </>
  );
}
