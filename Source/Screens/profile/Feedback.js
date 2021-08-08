import React, {Component} from 'react';


import {View, Text, TouchableOpacity} from 
'react-native';










import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Styles from '../../Assets/Styles/Styles';
import Header_Component from '../../Components/Header_Component';
import Colors from '../../Utils/Colors';
import Button from '../../Components/Button';
import TextStyles from '../../Assets/Styles/TextStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export default class Feedback extends Component {
  state = {
    Help: '',
  };

  async submitHandler() {
    const help = 'suyash fyufjfj hjkjhkihklhlihl';

    axios.get('http://localhost:7000/user/users').then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#121417'}}>
        <Header_Component Heading="Feedback" />
        <View
          style={[
            Styles.Aboutus_container,
            {height: 369, alignItems: 'center', marginTop: -2},
          ]}>
          <View style={Styles.Feedback_Input1}>
            <TextInput
              onChangeText={input => {
                this.setState({Help: input});
              }}
              multiline={true}
              placeholder="Give your feedback"
              placeholderTextColor={Colors.lightgrey}
              style={{fontFamily: 'Open Sans'}}
            />
            <Text>{this.state.Help}</Text>
            <View style={{alignItems: 'center'}}></View>
          </View>
          <View
          style={{flexDirection:'row',marginTop:20}}
          >
          <Ionicons name="star" size={32} color="#ffb600" />
          <Ionicons name="star" size={32} color="#ffb600" /> 
           <Ionicons name="star" size={32} color="#ffb600" />
          <Ionicons name="star" size={32} color="#ffb600" />
          <Ionicons name="star-outline" size={32} color="#ffb600" />
          </View>
        
          <Button
            onPress={this.submitHandler}
            title="Submit"
            style={{alignSelf: 'center', margin: 20}}
          />
        </View>

        <View style={[Styles.Aboutus_Footer, {marginTop: 45}]}>
          <Text style={[TextStyles.White_text, {margin: 10}]}>
            Privacy and terms
          </Text>
          <Text style={[TextStyles.White_text, {margin: 10}]}>Contact Us</Text>
        </View>
      </ScrollView>
    );
  }
}
