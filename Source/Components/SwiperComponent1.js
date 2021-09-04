import React from 'react'
import { View, Text ,StyleSheet, ImageBackground} from 'react-native'
import Swiper from 'react-native-swiper'
import { height } from 'styled-system'
import CFCover from '../Assets/Images/cover.jpg'
import CFCover1 from '../Assets/Images/cover2.jpg'
export default function SwiperComponent1() {
    return (<View
    style={{height:153}}
    >
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
     top:52
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
                top:52
              }}
            />
          }
          paginationStyle={{
            bottom: 70
          }}
          loop={false}

        >
          
          <View style={styles.slide1}>
          <Text style={styles.text}>Advertisement</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Advertisement</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Advertisement</Text>
        </View>
      </Swiper>
      </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        height:190
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
 
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey'
    },
    text: {
      color: '#fff',
      fontSize: 23,
    }
  })