import React, {Component, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';

// import headerImage from '../Assets/Icons/HeaderIcon.png'
import imp1 from '../../Assets/Icons/HeaderQuestion.png';
import imp2 from '../../Assets/Icons/HeaderNotification.png';
import headerImage from '../../Assets/Images/HomeWall.png';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../Utils/Colors';

import CheckBox from 'react-native-check-box';

import RecentConversionComponent from '../../Components/RecentConversionComponent';
import LeadComponent from '../../Components/LeadComponent';
import UnitConvertorComponent from '../../Components/UnitConvertorComponent';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HomeHeader from '../../Components/HomeHeader';

export default class HomeScreen extends Component {
  render() {
    // let {dropDownVisible} = this.state;
    let array = new Array(1, 2, 3, 4, 5, 6, 7);
    return (
      <>

    <HomeHeader
    
    />
      <FlatList
        style={styles.container}
        contentContainerStyle={{padding: 0}}
        ListEmptyComponent={
          <>
            <Image source={headerImage} style={styles.headerImage} />
            <View style={styles.contentContainer}>
              <UnitConvertorComponent />
              <RecentConversionComponent />
              <LeadComponent
              navigation={this.props.navigation}
              />
            </View>
          </>
        }
      />
     </>       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121417',
    flex: 1,
    marginTop:-12
  },
  headerImage: {
    height: 170,
    width: '100%',
    // resizeMode: 'cover',
  },
  contentContainer: {
    padding: 10,
  },
});
