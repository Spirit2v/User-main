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

import headerImage from '../../Assets/Images/HomeWall.png';

import CFlogo from '../../Assets/Icons/CFlogo.png';
import CheckBox from 'react-native-check-box';

import RecentConversionComponent from '../../Components/RecentConversionComponent';
import LeadComponent from '../../Components/LeadComponent';
import UnitConvertorComponent from '../../Components/UnitConvertorComponent';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HomeHeader from '../../Components/HomeHeader';
import {useNavigation} from '@react-navigation/native';
import Buttonq1 from '../../Components/Buttonq1';
export default class HomeScreen extends Component {
  render() {
    // let {dropDownVisible} = this.state;

    let array = new Array(1, 2, 3, 4, 5, 6, 7);
    return (
      <>
        <HomeHeader />
        <ScrollView
        style={{flex: 1, backgroundColor: 'black',marginTop:-12}}
        >
        <View >
          <View style={{padding: 10}}>
            <Image source={headerImage} style={styles.headerImage} />
            <Image
              source={CFlogo}
              style={{marginVertical: 20, height: 40, width: '40%'}}
            />
            <Text style={{color: '#FFB600'}}>We are here to help you.</Text>
            <Text style={{marginTop:12,color: 'white',fontSize:28,fontWeight:'bold',justifyContent:'center',alignItems:'center',alignContent:'center',textAlign:'center'}}>Welcome to Construction</Text>

            <Text style={{color: 'white', marginVertical: 22}}>
              Can’t find your product in market? Surely you’ll find here with
              best price and great quality.
            </Text>
            <Buttonq1 hi={43} wi={83} title="About us" />
          </View>
          <View style={{backgroundColor: '#FFB600',height:93,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color: 'black',fontSize:18,fontWeight:'bold'}}>
             Be a real Business
            </Text>
            <Text style={{color: 'black',fontSize:18,fontWeight:'bold'}}>
             Be a part of Construction flow
            </Text>
          </View>
          <View>
            <UnitConvertorComponent />
            <View style={{height: 134}}></View>
            <RecentConversionComponent />
            <LeadComponent navigation={this.props.navigation} />
          </View>
        </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121417',
    flex: 1,
    marginTop: -12,
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
