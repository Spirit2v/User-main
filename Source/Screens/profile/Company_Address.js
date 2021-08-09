import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Styles from '../../Assets/Styles/Styles';
import Header_Component from '../../Components/Header_Component';
import ProgressBar from 'react-native-progress/Bar';
import Colors from '../../Utils/Colors';
import Profile_TextinputCard from '../../Components/Profile_TextinputCard';
import Button from '../../Components/Button';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
const Company_Address = ({navigation, route}) => {
  let {percentage} = route.params;

  const submitx = () => {
    setFormData({
      company_building_name: building,
      company_street: area,
      company_city: city,
      company_pincode: pin,
      company_house_no: house_door,
      company_landmark: landmark,
      company_state: state,
    });
    axios
      .post(`http://192.168.156.104:7000/user/updateUser/67`, formData)
      .then(response => {
        console.log(response);
        alert('Company Address Saved');
      });
  };

  const [userId, setUserId] = useState('');
  const [building, setBuilding] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [pin, setPin] = useState('');
  const [house_door, setHouse] = useState('');
  const [landmark, setLandmark] = useState('');
  const [state, setState] = useState('');

  return (
    <ScrollView>
      <View style={Styles.ProfileDetails_container}>
        <Text
          style={{
            color: 'white',
            alignSelf: 'flex-start',
          }}>{`${percentage}% completed`}</Text>
        <ProgressBar
          unfilledColor="#6d6e70"
          color={Colors.yellow}
          progress={0.3}
          width={369}
          height={8}
          borderWidth={0}
          style={{marginVertical: 10}}
        />
        <Profile_TextinputCard
          onChangeText={text => setBuilding(text)}
          placeholder="Building Name"
        />
        <Profile_TextinputCard
          onChangeText={text => setHouse(text)}
          placeholder="H.No./Door No."
        />
        <Profile_TextinputCard
          onChangeText={text => setArea(text)}
          placeholder="Area/Street"
        />
        <Profile_TextinputCard
          onChangeText={text => setLandmark(text)}
          placeholder="Landmark"
        />
        <Profile_TextinputCard
          onChangeText={text => setCity(text)}
          placeholder="City"
        />
        <Profile_TextinputCard
          onChangeText={text => setState(text)}
          placeholder="State"
        />
        <Profile_TextinputCard
          onChangeText={text => setPin(text)}
          placeholder="Pincode"
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            justifyContent: 'space-between',
            width: 152,

            alignSelf: 'center',
          }}>
          <Button
            title="Save"
            onPress={submitx}
            style={{height: 40, width: 70}}
          />
          <Button
            title="Next"
            style={Styles.Next}
            textStyle={{color: Colors.yellow}}
            onPress={() =>
              navigation.navigate('Site_AddressBook', {percentage: 96})
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Company_Address;
