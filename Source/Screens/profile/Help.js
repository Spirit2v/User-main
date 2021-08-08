import React, {useState} from 'react';
import {View, Text,StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Styles from '../../Assets/Styles/Styles';
import Header_Component from '../../Components/Header_Component';
import Colors from '../../Utils/Colors';
import Button from '../../Components/Button';
import TextStyles from '../../Assets/Styles/TextStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Help = () => {
  const [should, setshould] = useState(true);
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#121417'}}>
      <Header_Component Heading="Help" />
      <View
        style={[
          Styles.Aboutus_container,
          {height: 369, alignItems: 'center', marginTop: -2},
        ]}>
        {should ? (
          <View style={{marginTop: 100}}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                marginBottom: 10,
                fontWeight: 'bold',
              }}>
              How can we help you?
            </Text>

            <TouchableOpacity onPress={() => setshould(!should)}>
              <View style={Styles.Feedback_Input}>
                <Text
                  style={{
                    color: 'grey',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Tell us more about your problem
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                marginTop: 70,
                fontWeight: 'bold',
              }}>
              How can we help you?
            </Text>
            <View style={Styles.Feedback_Input1}>
              <TextInput
                multiline={true}
                placeholder="Tell us more about your problem"
                placeholderTextColor={Colors.lightgrey}
                style={{fontFamily: 'Open Sans'}}
              />

              <View
                style={{
                  marginLeft: '30%',
                  marginTop: 92,
                  flexDirection: 'row',
                }}>
                  <TouchableOpacity>
                  <View style={styles.boxButton}>
                  <Ionicons name="attach-outline" size={16} color="black" />
                  <Text
                  style={{fontSize:12}}
                  >Attach</Text>
                </View>
                  </TouchableOpacity>
               <TouchableOpacity>
               <View style={styles.boxButton}>
                  <Ionicons name="send-outline" size={12} color="black" />
                  <Text
                   style={{fontSize:12,fontWeight:'800'}}>Send</Text>
                </View>
               </TouchableOpacity>
                
              </View>
            </View>
          </>
        )}
      </View>

      <View style={[Styles.Aboutus_Footer, {marginTop: 45}]}>
        <Text style={[TextStyles.White_text, {margin: 10}]}>
          Privacy and terms
        </Text>
        <Text style={[TextStyles.White_text, {margin: 10}]}>Contact Us</Text>
      </View>
    </ScrollView>
  );
};

export default Help;

const styles = StyleSheet.create({
  boxButton: {
    flexDirection: 'row',
    borderRadius: 9,
    padding: 1,
    height: 23,
    width: 69,
    backgroundColor: '#ffb600',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:6
  },
});
