import React from 'react';
import {AddToCart} from '@env';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../../../../Assets/Styles/Styles';
import AddtoCard from '../../../../Components/AddtoCard';
import Button from '../../../../Components/Button';
import Buttonq from '../../../../Components/Buttonq';
import Buttonq1 from '../../../../Components/Buttonq1';
import DropdownCheckbox from '../../../../Components/DropdownCheckbox';
import ServiceCardSand from '../../../../Components/ServiceCardSand';
export default function RMCmixture({navigation}) {








  const [Visible, setVisible] = useState(false);
  const [Brick, setBrick] = useState('');
  const [CementGrades, setCementGrades] = useState('');

  const setFunctio = e => {
    setBrick(e);
    setVisible(!Visible);
  };
  const [firstly, setFirstly] = useState('');
  const setFunctio2 = e => {
    setCementGrades(e);
    setVisible(!Visible);
  };




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

  const Grades = [
    {id: '1', title: 'Select All'},
    {id: '2', title: 'M 10'},
    {id: '3', title: 'M 15'},
    {id: '4', title: 'M 20'},
    {id: '5', title: 'M 25'},
    {id: '6', title: 'M 30'},
    {id: '7', title: 'M 35'},
    {id: '8', title: 'M 40'},
    {id: '9', title: 'M 45'},
  ];
  return (
    <View style={Styles.ProfileDetails_container}>
      <View style={{marginTop: 8, paddingHorizontal: 7}}>
        <DropdownCheckbox title={Grade} placeholder="Select Grade" />
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
