import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../../Assets/Styles/Styles';
import Header_Component from '../../Components/Header_Component';
import ProgressBar from 'react-native-progress/Bar';
import Colors from '../../Utils/Colors';
import Profile_TextinputCard from '../../Components/Profile_TextinputCard';
import Button from '../../Components/Button';
import { ScrollView } from 'react-native-gesture-handler';

const Site_AddressBook = ({navigation, route}) => {
  let {percentage } = route.params;
  return (

<ScrollView>
<View style={Styles.ProfileDetails_container}>
      <Text style={{color: 'white', alignSelf: 'flex-start'}}>{`${percentage}% completed`}</Text>
      <ProgressBar
        unfilledColor="#6d6e70"
        color={Colors.yellow}
        progress={0.3}
        width={369}
        height={8}
        borderWidth={0}
        style={{marginVertical: 10}}
      />
      <Profile_TextinputCard placeholder="Building Name" />
      <Profile_TextinputCard placeholder="H.No./Door No." />
      <Profile_TextinputCard placeholder="Area/Street" />
      <Profile_TextinputCard placeholder="Landmark" />
      <Profile_TextinputCard placeholder="City" />
      <Profile_TextinputCard placeholder="State" />
      <Profile_TextinputCard placeholder="Pincode" />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          justifyContent: 'space-between',
          width: 152,
       
          alignSelf: 'center'
        }}>
        <Button title="Save" style={{height: 40, width: 70}} />
        <Button 
          title="Done" 
          style={Styles.Next} textStyle={{color: Colors.yellow}}
          onPress={() => navigation.navigate('Profile')}/>
      </View>
    </View>

</ScrollView>


 
  );
};

export default Site_AddressBook;
