import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from '../../Assets/Styles/Styles';
import TextStyles from '../../Assets/Styles/TextStyles';
import Header_Component from '../../Components/Header_Component';
import Colors from '../../Utils/Colors';
import Email from '../../Assets/Icons/Email.png';
import Insta from '../../Assets/Icons/Insta.png';
import Twitter from '../../Assets/Icons/twitter.png';
import {ScrollView} from 'react-native-gesture-handler';
import {ImageBackground} from 'react-native';
import AboutCover from '../../Assets/Images/AboutCover.jpg';
import About2 from '../../Assets/Images/about2.jpg';
const About_Us = () => {
  return (
    <ScrollView>
      <View style={Styles.Profile_container}>
        <Header_Component Heading="About Us" />
        <ImageBackground
          source={AboutCover}
          resizeMode="stretch"
          style={{height: 240, width: '100%'}}></ImageBackground>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 22,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            marginVertical: 50,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              marginHorizontal: 12,
            }}>
            <Text style={{color: '#FFB600', fontSize: 24, marginVertical: 12}}>
              5234
            </Text>
            <Text style={{color: 'white'}}>LOREN</Text>
            <Text style={{color: 'grey'}}>echewoiuhcccccccoihh</Text>
            <Text style={{color: 'grey'}}>echewoiuhoihcxxcccxccxh</Text>
            <Text style={{color: 'grey'}}>echewoiuhoihh</Text>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              marginHorizontal: 22,
            }}>
            <Text style={{color: '#FFB600', fontSize: 24, marginVertical: 12}}>
              5234
            </Text>
            <Text style={{color: 'white'}}>LOREN</Text>
            <Text style={{color: 'grey'}}>echewoiuhccccccccccoihh</Text>
            <Text style={{color: 'grey'}}>echewoiuhoihcxxcccxccxh</Text>
            <Text style={{color: 'grey'}}>echewoiuhoihh</Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            marginHorizontal: 22,
          }}>
          <Text style={{color: '#FFB600', fontSize: 24, marginVertical: 12}}>
            5234
          </Text>
          <Text style={{color: 'white'}}>LOREN</Text>
          <Text style={{color: 'grey'}}>echewoiuhccccccccccoihh</Text>
          <Text style={{color: 'grey'}}>echewoiuhoihcxxcccxccxh</Text>
          <Text style={{color: 'grey'}}>echewoiuhoihh</Text>
        </View>

        <ImageBackground
          source={About2}
          resizeMode="stretch"
          style={{height: 240, width: '100%'}}></ImageBackground>

        <Text
          style={[
            TextStyles.White_text,
            {
              width: 350,
              textAlign: 'justify',
              marginLeft: 15,
              color: 'grey',
              marginVertical: 23,
            },
          ]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
          convallis aliquam laoreet senectus donec mauris eget etiam euismod.
          Metus, ligula tortor vel ut at nunc nisl potenti. Sit amet, pulvinar
          at mi. Consequat egestas a.
        </Text>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            marginHorizontal: 12,
          }}>
          <Text style={{color: '#FFB600', fontSize: 20, marginVertical: 12}}>
            WHY WE CHOOSE US
          </Text>
          <Text style={{color: 'white'}}>Metus, ligula tortor vel ut at nunc nisl potenti. Sit amet, pulvinar
          at mi. Consequat egestas a.</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 22,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            marginVertical: 50,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              marginHorizontal: 12,
            }}>
            <Text style={{color: '#FFB600', fontSize: 24, marginVertical: 12}}>
              5234
            </Text>
            <Text style={{color: 'white'}}>LOREN</Text>
            <Text style={{color: 'grey'}}>echewoiuhcccccccoihh</Text>
            <Text style={{color: 'grey'}}>echewoiuhoihcxxcccxccxh</Text>
            <Text style={{color: 'grey'}}>echewoiuhoihh</Text>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              marginHorizontal: 22,
            }}>
            <Text style={{color: '#FFB600', fontSize: 24, marginVertical: 12}}>
              5234
            </Text>
            <Text style={{color: 'white'}}>LOREN</Text>
            <Text style={{color: 'grey'}}>echewoiuhccccccccccoihh</Text>
            <Text style={{color: 'grey'}}>echewoiuhoihcxxcccxccxh</Text>
            <Text style={{color: 'grey'}}>echewoiuhoihh</Text>
          </View>
        </View>

  
        <View style={[Styles.Aboutus_view, {marginTop: 10}]}>
          <Text
            style={[TextStyles.White_text, {fontSize: 16, fontWeight: '700'}]}>
            Reach us at :
          </Text>
          <Image source={Email} />
        </View>
        <View style={[Styles.Aboutus_view]}>
          <Text
            style={[TextStyles.White_text, {fontSize: 16, fontWeight: '700'}]}>
            Connect with us on :
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image source={Insta} />
            <Image source={Twitter} style={{marginLeft: 15}} />
          </View>
        </View>
        <View style={Styles.Aboutus_Footer}>
          <Text style={[TextStyles.White_text, {margin: 10}]}>
            Privacy and terms
          </Text>
          <Text style={[TextStyles.White_text, {margin: 10}]}>Contact Us</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default About_Us;
