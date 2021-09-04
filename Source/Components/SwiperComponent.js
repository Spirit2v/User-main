import React from 'react'
import { View, Text ,StyleSheet, ImageBackground} from 'react-native'
import Swiper from 'react-native-swiper'
import CFCover from '../Assets/Images/cover.jpg'
import CFCover1 from '../Assets/Images/cover2.jpg'
export default function SwiperComponent() {
    return (
        <Swiper style={styles.wrapper} 
        
        showsButtons={true}>
          
          <View
          sty={{height:100,width:'100%'}}
          >
          <ImageBackground
            
            source={CFCover}
            style={{height:300,width:'100%'}}
          >
               <View style={{marginTop: 158,paddingLeft:52}}>
                  <Text style={{color: 'white', fontSize: 18}}>
                    Best deals!
                  </Text>

                  <Text style={{color: 'white'}}>
                    Sign up now dont miss this year's biggest sale
                  </Text>
                  <Text style={{color: '#FFB600'}}>Check it now ></Text>
                </View> 
             
             </ImageBackground>
             </View>
             <View
          sty={{height:100,width:'100%'}}
          >
          <ImageBackground
            
            source={CFCover1}
            style={{height:300,width:'100%'}}
          >
               <View style={{marginTop: 150,padding:12}}>
                  <Text style={{color: 'white', fontSize: 18}}>
                    Best deals!
                  </Text>

                  <Text style={{color: 'white'}}>
                    Sign up now dont miss this year's biggest sale
                  </Text>
                  <Text style={{color: '#FFB600'}}>Check it now ></Text>
                </View> 
             
             </ImageBackground>
             </View><View
          sty={{height:100,width:'100%'}}
          >
          <ImageBackground
            
            source={CFCover1}
            style={{height:300,width:'100%'}}
          >
               <View style={{marginTop: 150,padding:12}}>
                  <Text style={{color: 'white', fontSize: 18}}>
                    Best deals!
                  </Text>

                  <Text style={{color: 'white'}}>
                    Sign up now dont miss this year's biggest sale
                  </Text>
                  <Text style={{color: '#FFB600'}}>Check it now ></Text>
                </View> 
             
             </ImageBackground>
             </View>
      </Swiper>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        height:290
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })