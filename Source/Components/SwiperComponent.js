import React from 'react'
import { View, Text ,StyleSheet, ImageBackground} from 'react-native'
import Swiper from 'react-native-swiper'
import { height } from 'styled-system'
import CFCover from '../Assets/Images/cover.jpg'
import CFCover1 from '../Assets/Images/cover2.jpg'
export default function SwiperComponent() {
    return (
        <Swiper style={styles.wrapper} 
        // paginationStyle={}
        showsPagination={true}

        dot={
            <View
              style={{
     width:12
     ,height:4,
     backgroundColor:'white',
     borderRadius:9,marginHorizontal:3,
     top:62
              }}
            />
          }
          activeDot={
            <View
              style={{
                width:30
                ,height:4,
                backgroundColor:'#FFB600',
                borderRadius:9,marginHorizontal:3,
                top:62
              }}
            />
          }
          paginationStyle={{
            bottom: 70
          }}
          loop={false}

        >
          
          <View
          sty={{height:100,width:'100%'}}
          >
          <ImageBackground
            
            source={CFCover}
            style={{height:300,width:'100%'}}
          >
               <View style={{marginTop: 188,paddingLeft:22}}>
                  <Text style={{color: 'white', fontSize: 18}}>
                    Best deals!
                  </Text>

                  <Text style={{color: 'white',marginVertical:5}}>
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
               <View style={{marginTop: 180,paddingLeft:22}}>
                  <Text style={{color: 'white', fontSize: 18}}>
                   New year's Eve 10% off
                  </Text>

                  <Text style={{color: 'white',marginVertical:5}}>
                  Celebrate christmas with a 10% off to all materials when you place your order today
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
               <View style={{marginTop: 188,paddingLeft:22}}>
                  <Text style={{color: 'white', fontSize: 18}}>
                    Best deals!
                  </Text>

                  <Text style={{color: 'white',marginVertical:5}}>
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