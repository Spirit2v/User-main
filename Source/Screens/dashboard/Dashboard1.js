import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Styles from '../../Assets/Styles/Styles';
import TextStyles from '../../Assets/Styles/TextStyles';
import Ad_card from '../../Components/Ad_card';
import Dashboard_card from '../../Components/Dashboard_card';
import Main_HeaderComponent from '../../Components/Main_HeaderComponent';
import ServicesIcon from '../../Assets/Icons/Services_icon.png';
import Services from './Services';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../Utils/Colors';
import settin from '../../Assets/Icons/settin.jpg'
import Profile_card from '../../Components/Profile_card';
import Arrow_button from '../../Components/Arrow_button';
import NewLead from '../../Components/NewLead';
import PitchLead from '../../Components/PitchedLead';
const Dashboard = ({navigation}) => {
  return (
    <View
    style={{
      flex:1,
      backgroundColor:"#121417"
    }}
    >

  
    <ScrollView>
      <View >
        <Ad_card />
        <View style={{paddingHorizontal: 20}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Services');
            }}>
            <Dashboard_card Icon={ServicesIcon} Title="Services" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('Request'); ->this is before
              navigation.navigate('Leads');
            }}>
            <Dashboard_card Icon={settin} Title="Requests" />
          </TouchableOpacity>
        </View>
        <View style={Styles.Dashboard_footer}>
          <Text style={TextStyles.Yellow_Text}>Quick Actions</Text>
          <View style={Styles.Quickaction_container}>
            <View style={Styles.Quickaction_box}>
              <Image />
            </View>
            <View style={Styles.Quickaction_textView}>
              <Text style={TextStyles.White_text}>Construction Flow</Text>
              <Text style={[TextStyles.QuickAction_text, {color: 'white'}]}>
                New feature added
              </Text>
              <Text style={[TextStyles.QuickAction_text, {color: '#ffb600'}]}>
                Check Now...!
              </Text>
            </View>
            <Ionicons name="caret-forward-outline" color={Colors.grey} />
          </View>
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

export default Dashboard;
