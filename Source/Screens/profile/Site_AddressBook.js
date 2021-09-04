import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Styles from '../../Assets/Styles/Styles';
import Header_Component from '../../Components/Header_Component';
import ProgressBar from 'react-native-progress/Bar';
import Colors from '../../Utils/Colors';
import ProfileInput from '../../Components/ProfileInput';
import Button from '../../Components/Button';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SiteAddressComponent from '../../Components/SiteAddressComponent';
const Site_AddressBook = ({navigation, percentage = 0}) => {
  const submitx = () => {
    setFormData({
      first_name: name,
      phone_no: phone,
      email: email,
      whatsapp_no: wpp,
    });
    axios
      .post(`http://192.168.254.103:7000/user/updateUser/67`, formData)
      .then(response => {
        console.log(response);
        alert('Saved');
      });
  };
  const [formData, setFormData] = useState('');

  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [wpp, setWhatsapp] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView>
      <View style={Styles.ProfileDetails_container}>
 <View
          style={{
            height: 65,
            justifyContent: 'center',
            padding: 13,
            borderBottomColor: 'grey',
            borderBottomWidth: 0.3,
            marginBottom: 23,
          }}>
          <Text 
          style={{color: 'white'}}>
          Site Address
            </Text>
        </View>
<View
style={{paddingHorizontal:22}}
>
<SiteAddressComponent />
<SiteAddressComponent />
</View>
    
        </View>
    </ScrollView>
  );
};

export default Site_AddressBook;
