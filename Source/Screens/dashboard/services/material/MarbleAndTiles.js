import React from 'react';
import {View,TouchableOpacity, Text} from 'react-native';
import Styles from '../../../../Assets/Styles/Styles';
import AddtoCard from '../../../../Components/AddtoCard';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
import {AddToCart} from "@env";
import ServiceCardSand from '../../../../Components/ServiceCardSand';
export default function MarbleAndTiles({navigation}) {






  const submitx = () => {
    
    
    
    setData({"type": Brick, "brand": CementGrades});



    setFormData({data: data, quantity: Quantity, type: 'Cement',});
    navigation.navigate('Cart',{formData})
    axios
      .post(`${AddToCart}`, 
      formData)
      .then(response => {
        console.log(response);
        console.log(formData)
        alert('Saved');
      });
  };
















  const Brand=['Select All',' Kajaria Ceramics Ltd'
   
    ,' Somany Floor Ltd','Bajaj Tiles','Simpolo Tiles'
    ,'HSIL Ltd (Hindware)','Johnson Tiles',
  ' Grindwell Norton Ltd','Asian Granito', 
  'Cera Indai Ltd','Orient Bell',
  ' Nitco Limited','Swastic Tiles'
]
const Types=['Ceramic Tile' , 'Porcelain Tile ',
   'Glass Tile' , 'Cement Tile' ,'Marble Tile',' Mosaic Tile', 'Granite Tile',
    'Limestone Tile',
'Travertine Tile','Quarry Tile','Metal Tilee','Slate Tile']
  
const Sizes=['Select All','120 x 120 cm','60 x 120 cm','30 x 120 cm','20 x 120 cm','90 x 90 cm','60 x 90 cm','60 x 60 cm','30 x 60 cm','20 x 60 cm',]
  return (
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
      <DropdownCheckbox 
   Types={Brand}
   placeholder="Select brands"
   />
     <DropdownCheckbox 
   Types={Types}
   placeholder="Select Types"
   />

<DropdownCheckbox 
   Types={Sizes}
   placeholder="Select Sizes"
   />
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
          onPress={()=>{navigation.navigate('Request')}}>
          <Buttonq1 
           onPress={()=>{navigation.navigate('Request')}}
          title="Request" hi={42} wi={78} />
          </TouchableOpacity>
      
      </View>
      </View>
    </View>
  );
}
