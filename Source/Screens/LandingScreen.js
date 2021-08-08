import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Styles from '../Assets/Styles/Styles';
import LandingButtons from '../Components/LandingButtons';
import Usericonblack from '../Assets/Icons/Usericonblack.png';
import Usericonyellow from '../Assets/Icons/Usericonyellow.png';
import CFlogo from '../Assets/Icons/CFlogo.png';
import Landingimage from '../Assets/Icons/Landingpageimage.png';
const LandingScreen = ({navigation}) => {
  const [screenWidth, setScreenWidth] = useState(null);
  const [screenHeight, setscreenHeight] = useState(null);
  const _onLayout = e => {
    setScreenWidth(Dimensions.get('window').width);
    setscreenHeight(Dimensions.get('window').height);
  };
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <SafeAreaView
        style={
          screenHeight > screenWidth
            ? Styles.Landingpage_View
            : Styles.container2
        }
        onLayout={_onLayout}>
        <View>
          <Image
            source={CFlogo}
            style={{marginVertical:20,
              height: 100, width: 340}}
          />
          <Image
            source={Landingimage}
            style={{
              marginTop: -30,
              marginLeft: 59,
              height: 230,
              width: 230,
              marginBottom: 40
             
            }}
          />
        </View>

        <View>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontWeight: 'bold',
              fontSize: 12,
              marginLeft: 99,
              marginTop: 20,
              marginBottom: 10,
            }}>
            Construct With Flow.
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 39,
              textAlign: 'center',
              width: 230,
              fontFamily: 'Open Sans',
              fontSize: 12,
              marginBottom: 30,
            }}>
            Get all services at your fingertips. Now keeping records of your
            products and deals has become easier with construction flow.
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <LandingButtons
              style={Styles.Button1}
              UserIcon={Usericonblack}
              Textt="Sign Up As User"
              colorr={{color: 'black', marginLeft: 7, fontSize: 17}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginBottom: 40}}
            onPress={() => {
              navigation.navigate('SignInComponent');
            }}>
            <LandingButtons
              style={Styles.Button2}
              UserIcon={Usericonyellow}
              Textt="Sign In As User"
              colorr={{color: 'yellow', fontSize: 17, marginLeft: 7}}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LandingScreen;
