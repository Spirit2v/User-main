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
const Company_Details = ({navigation, route}) => {
  const submitx = () => {
    setFormData({
      company_detail_name: name,
      company_name: company,
      company_phone_no: phone,
      company_title: title,
      company_email_address: email,
      company_whatsapp_no: wpp,
    });
    axios
      .post(`http://192.168.188.104:7000/user/updateUser/68`, formData)
      .then(response => {
        console.log(response);
        alert('Company Details Saved');
      });
  };
  const [formData, setFormData] = useState('');

  const [company, setcompany] = useState('');
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');

  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [wpp, setWpp] = useState('');
  const [Fax, setFax] = useState('');

  const [state, setstate] = useState('');
  console.log(route);

  let {percentage} = route.params;
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
          placeholder="Name"
          onChangeText={text => setName(text)}
        />
        <Profile_TextinputCard
          placeholder="Company/Firm Name"
          onChangeText={text => setcompany(text)}
        />
        <Profile_TextinputCard
          placeholder="Title"
          onChangeText={text => setTitle(text)}
        />
        <Profile_TextinputCard
          placeholder="Phone No."
          onChangeText={text => setPhone(text)}
        />
        <Profile_TextinputCard
          placeholder="Whatsapp No."
          onChangeText={text => setWpp(text)}
        />
        <Profile_TextinputCard
          placeholder="Email ID"
          onChangeText={text => setEmail(text)}
        />
        <Profile_TextinputCard
          placeholder="Fax No."
          onChangeText={text => setFax(text)}
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
              navigation.navigate('Company_Address', {percentage: 66})
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Company_Details;
