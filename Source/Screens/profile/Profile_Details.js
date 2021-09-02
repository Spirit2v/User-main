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
const Profile_Details = ({navigation, percentage = 0}) => {
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
          <Text style={{color: 'white'}}>Personal Information</Text>
        </View>
        <View style={{paddingHorizontal: 22}}>
          <Text style={{color: 'grey'}}>Name</Text>

          <ProfileInput
            placeholder="Name"
            onChangeText={text => setname(text)}
          />
          <Text style={{color: 'grey', marginVertical: 12}}>Email ID</Text>
          <ProfileInput
            placeholder="Email ID"
            onChangeText={text => setEmail(text)}
          />
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <View style={{width: '47%'}}>
              <Text style={{color: 'grey', marginVertical: 12}}>
                Phone Number
              </Text>
              <ProfileInput
                placeholder="Phone No."
                onChangeText={text => setPhone(text)}
              />
            </View>
            <View style={{width: '48%'}}>
              <Text style={{color: 'grey', marginVertical: 12}}>
                Whatsapp Number
              </Text>
              <ProfileInput
                onChangeText={text => setWhatsapp(text)}
                placeholder="Whatsapp No."
              />
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              height: 65,
              justifyContent: 'center',
              padding: 13,
              borderBottomColor: 'grey',
              borderBottomWidth: 0.3,
              marginBottom: 23,
            }}>
            <Text style={{color: 'white'}}>Security setting</Text>
          </View>

          <View style={{paddingHorizontal: 22}}>
            <View
            style={{flexDirection:'row'}}
            > 
            <View
            style={{width:'77%'}}
            >
              <ProfileInput
              placeholder="Password"
              onChangeText={text => setPassword(text)}
            />
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#FFB600',
                height: 52,
                width:62,

                justifyContent: 'center',
                alignItems: 'center',
                borderRadius:4,
                marginTop:8
                ,marginLeft:9
              }}>
              <Ionicons name="pencil-outline" size={18} color="black" />
              <Text style={{marginLeft: -11, color: 'black'}}>_</Text>
            </View></View>
           
            <View
              style={{
                flexDirection: 'row',
                marginTop: 50,
                justifyContent: 'space-between',
              
                alignSelf: 'center',
              }}>
          <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#FFB600',
                height: 52,
                width:'100%',

                justifyContent: 'center',
                alignItems: 'center',
                borderRadius:4,
                marginTop:-26
                ,marginLeft:9
              }}>
              <Ionicons name="pencil-outline" size={18} color="black" />
              <Text style={{marginLeft: -11, color: 'black'}}>_</Text>
              <Text style={{color: 'black'}}>   Edit detail</Text>
            </View>
              
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile_Details;
