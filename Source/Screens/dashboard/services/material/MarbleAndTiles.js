import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Styles from '../../../../Assets/Styles/Styles';
import AddtoCard from '../../../../Components/AddtoCard';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
import {AddToCart} from '@env';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
export default function MarbleAndTiles({navigation}) {
  const submitx = () => {
    setData({type: Brick, brand: CementGrades});

    setFormData({data: data, quantity: Quantity, type: 'Cement'});
    navigation.navigate('Cart', {formData});
    axios.post(`${AddToCart}`, formData).then(response => {
      console.log(response);
      console.log(formData);
      alert('Saved');
    });
  };

  const Brand = [
    {id: '1', title: 'Select All'},
    {id: '2', title: 'Kajaria Ceramics Ltd'},
    {id: '3', title: 'Somany Floor Ltd'},
    {id: '2', title: 'Bajaj Tiles'},
    {id: '3', title: 'Simpolo Tiles'},
    {id: '4', title: 'HSIL Ltd (Hindware)'},
    {id: '5', title: 'Johnson Tiles'},
    {id: '6', title: 'Grindwell Norton Ltd'},
    {id: '7', title: 'Asian Granito'},
    {id: '6', title: 'Cera Indai Ltd'},
    {id: '9', title: 'Orient Bell'},
    {id: '10', title: 'Nitco Limited'},
    {id: '11', title: 'Swastic Tiles'},
  ];
  const Types = [
    {id: '1', title:'Ceramic Tile'},
    {id: '2', title:'Porcelain Tile '},
    {id: '3', title:'Glass Tile'},
    {id: '4', title:'Cement Tile'},
    {id: '5', title:'Marble Tile'},
    {id: '6', title: 'Mosaic Tile'},
    {id: '7', title:'Granite Tile'},
    {id: '8', title:'Limestone Tile'},
    {id: '9', title:'Travertine Tile'},
    {id: '10', title:'Quarry Tile'},
    {id: '11', title:'Metal Tilee'},
    {id: '12', title:'Slate Tile'},
  ];

  const Sizes = [
    {id: '1', title: 'Select All',},
    {id: '2', title:'120 x 120 cm',},
    {id: '3', title:    '60 x 120 cm',},
    {id: '4', title: '30 x 120 cm',},
    {id: '5', title:'20 x 120 cm',},
    {id: '6', title: '90 x 90 cm',},
    {id: '7', title:  
    '60 x 90 cm',},
    {id: '8', title: '60 x 60 cm',},
    {id: '9', title: '30 x 60 cm',},
    {id: '10', title:  '20 x 60 cm',},
  ];
  return (
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
        <DropdownCheckbox Types={Brand} placeholder="Select brands" />
        <DropdownCheckbox Types={Types} placeholder="Select Types" />
        <DropdownCheckbox Types={Sizes} placeholder="Select Sizes" />
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <AddtoCard />
          <View style={{paddingHorizontal: 10}}></View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Request');
            }}>
            <Buttonq1
              onPress={() => {
                navigation.navigate('Request');
              }}
              title="Request"
              hi={42}
              wi={78}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
