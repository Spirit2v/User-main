import React,{useState} from 'react';
import {View, Text} from 'react-native';
import Styles from '../../Assets/Styles/Styles';
import Header_Component from '../../Components/Header_Component';
import ProgressBar from 'react-native-progress/Bar';
import Colors from '../../Utils/Colors';
import Profile_TextinputCard from '../../Components/Profile_TextinputCard';
import Button from '../../Components/Button';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

const Profile_Details = ({navigation, percentage = 0}) => {

const submitx =()=>{
  axios.get(
"http://localhost:7000/user/users"
  )
  .then((res)=>{
    console.log
  })

}


 const [name, setname] = useState('')
 const [Email, setEmail] = useState('')
 const [Phone, setPhone] = useState('')
const [Whatsapp, setWhatsapp] = useState('')
const [Password, setPassword] = useState('')
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
        progress={0}
        width={340}
        height={8}
        borderWidth={0}
        style={{marginVertical: 10}}
      />
      <Profile_TextinputCard placeholder="Name" 
      
      />
      <Profile_TextinputCard placeholder="Email ID" />
      <Profile_TextinputCard placeholder="Phone No." />
      <Profile_TextinputCard placeholder="Whatsapp No." />
      <Profile_TextinputCard placeholder="Password" />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          justifyContent: 'space-between',
          width: 152,
   
      
          alignSelf: 'center'
        }}>
        <Button
          title="Save"

onPress={submitx}

          style={{height: 40, width: 70}}
          textStyle={{color: Colors.blackBlue}}
        />
        <Button
          title="Next"
          style={Styles.Next}
          textStyle={{color: Colors.yellow}}
          onPress={() =>
            navigation.navigate('Company_Details', {percentage: 33})
          }
        />
      </View>
    </View>
</ScrollView>


   
  );
};

export default Profile_Details;
