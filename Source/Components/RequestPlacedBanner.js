import React from 'react'
import { View, Text } from 'react-native'

export default function RequestPlacedBanner() {
    return (
        <View
        style={
        { position:'absolute', justifyContent:'center',
          alignItems:'center',
          bottom:-250,
          left:-99,
        backgroundColor:'black'
        
        }}
        >
          <View
        style={styles.box}
        >
            <View
            
            style={{flexDirection:'row',paddingHorizontal:12,justifyContent:'space-between',}}
            >
                <View
                   style={{flexDirection:'row',padding:2,paddingVertical:12}}
                
                >
                <Text
                
                style={{color:'white',fontSize:17,marginRight:6}}
                >
             Construction</Text>   
             <Buttonq 
          title="Flow" hi={25} wi={58}
             />
                </View>
         <View>
             <TouchableOpacity
             
             onPress={()=>setSwitch(!Switch)}
             >
             <Ionicons
        name="close-outline"
        size={40}
        color='white'
      />
            
             </TouchableOpacity>
           
         </View>
            </View>
         
<View

style={{padding:39,justifyContent:'center',alignItems:'center'}}
>
    <Text
    style={{color:'white',fontSize:18}}
    
    >
    To Add services to your Cart
    </Text>
    <Text
    style={{color:'white',fontSize:18,marginBottom:10}}
    
    >
   Please Log In
    </Text>
    <Buttonq 
          title="Sign In" hi={45} wi={78}
             />
</View>

        </View>
        </View>
      
    )
}
