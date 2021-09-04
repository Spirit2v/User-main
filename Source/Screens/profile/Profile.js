import React from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import Styles from '../../Assets/Styles/Styles';
import Main_HeaderComponent from '../../Components/Main_HeaderComponent';
import Profile_card1 from '../../Components/Profile_card1';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Colors from '../../Utils/Colors';
import TextStyles from '../../Assets/Styles/TextStyles';
import Arrow_button from '../../Components/Arrow_button';
import Profile_Details from './Profile_Details';
import Company_Details from './Company_Details';
import Company_Address from './Company_Address';
import Site_AddressBook from './Site_AddressBook';
import Help from './Help';
import Ionicons from 'react-native-vector-icons/Ionicons';
import About_Us from './About_Us';
import Feedback from './Feedback';
import {CommonActions} from '@react-navigation/native';
import Buttonq1 from '../../Components/Buttonq1';
import Buttonq from '../../Components/Buttonq';
import ProfileButton from '../../Components/ProfileButton';
import SocialIcons from '../../Components/SocialIcons';

const Profile = ({navigation}) => {
  return (
    <ScrollView style={Styles.Profile_container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 23,
          // paddingHorizontal:'50%'
        }}>
        {/* <Text style={[TextStyles.White_text, {width: 230}]}>
            Please complete your Profile by adding remaining information.
          </Text>
          <Arrow_button /> */}
        <AnimatedCircularProgress
          style={Styles.CircularProgressBar}
          size={90}
          width={6}
          fill={40}
          tintColor={Colors.yellow}
          lineCap="round"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor={Colors.grey}
          children={fill => (
            <Text style={[TextStyles.Yellow_Text, {fontWeight: 'bold'}]}>
              {'40%'}
            </Text>
          )}
        />
        <View
        style={{flexDirection:'row',marginVertical:22}}
        >
          <Text style={{color: 'white', fontSize: 18}}>Customer name</Text>
         
         <View
        style={{marginTop:3,marginLeft:6}}
        >
          <Ionicons name="checkmark-circle" size={22} color="grey" />
          </View>
        </View>
        <Buttonq1 title="Customer" hi={30} wi={94} />
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            marginVertical: 23,
            marginLeft: 12,
          }}>
          <View>
            <Text style={{color: 'grey', marginHorizontal: 24}}>Phone</Text>
            <Text style={{color: 'white', marginHorizontal: 24}}>
              4646416164
            </Text>
          </View>
          <View>
            <Text style={{color: 'grey', marginHorizontal: 24}}>Whatsapp</Text>
            <Text style={{color: 'white', marginHorizontal: 24}}>
              954924745
            </Text>
          </View>
          <View>
            <Text style={{color: 'grey', marginHorizontal: 24}}>Email</Text>
            <Text style={{color: 'white', marginHorizontal: 24}}>
              uyfi@hg.gu
            </Text>
          </View>
        </View>

        <View style={{paddingHorizontal: 22, flexDirection: 'row'}}>
          <View
            style={{
              height: 47,
              width: '41%',
              backgroundColor: 'grey',
              marginHorizontal: 14,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              flexDirection: 'row',
            }}>
            <Ionicons name="help-circle-outline" size={18} color="white" />

            <Text style={{color: 'white', marginLeft: 7}}>Help</Text>
          </View>
          <View
            style={{
              height: 47,
              height: 47,
              width: '45%',
              backgroundColor: 'grey',
              marginHorizontal: 14,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              flexDirection: 'row',
            }}>
            <Ionicons name="chatbox-outline" size={18} color="white" />
            <Text style={{color: 'white', marginLeft: 7}}>Feedback</Text>
          </View>
          <View></View>
        </View>

        <View
          style={{
            height: 230,
            backgroundColor: 'black',
            marginVertical: 23,

            paddingHorizontal: 22,
            justifyContent: 'space-between',
            paddingVertical: 37,
          }}>
          <Text style={{color: 'white', fontSize: 18}}>
            Complete your profile
          </Text>
          <Text style={{color: 'grey'}}>
            complete your profile complete your profile complete your profile
            complete your profile complete your
          </Text>
          <Buttonq1 hi={44} wi={139} title="Complete profile" />
        </View>

        <View style={{paddingHorizontal: 22}}>
          <Text style={{color: 'grey', marginVertical: 22}}>
            Account Setting
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile_Details');
            }}>
            <ProfileButton text="Personal Details" icon="save-outline" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Company_Details', {percentage: 33})
            }>
            <ProfileButton text="Company Details" icon="save-outline" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Company_Address', {percentage: 66})
            }>
            <ProfileButton text="Company Address" icon="save-outline" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Site_AddressBook', {percentage: 90});
            }}>
            <ProfileButton text="Address Book" icon="save-outline" />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 34,
            }}>
            <View>
              <Text style={{color: 'white'}}>Any questions?</Text>
              <Text style={{color: '#FFB600'}}>Contact us here</Text>
              <SocialIcons />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: 'center',
              }}>
              <Buttonq wi={116} hi={45} title="Logout" />
            </View>
          </View>
        </View>

        {/* </View>
    
      </View>
      <View style={{flex: 1, paddingHorizontal: 20, 
        marginBottom: 0}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile_Details');
          }}>
          <Profile_card1 title="Profile Details" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Company_Details', {percentage: 33})
          }>
          <Profile_card1 title="Company Details" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Company_Address', {percentage: 66})
          }>
          <Profile_card1 title="Company Address" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Site_AddressBook',{percentage: 90});
          }}>
          <Profile_card1 title="Site Address Book" />
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Help');
          }}>
          <Profile_card1 title="Help" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('About_Us');
          }}>
          <Profile_card1 title="About Us" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Feedback');
          }}>
          <Profile_card1 title="Feedback" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'LandingScreen'}],
              }),
            );
          }}>
          <Profile_card1 title="Logout" />
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

export default Profile;
