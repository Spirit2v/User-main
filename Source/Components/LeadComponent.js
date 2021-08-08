import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class LeadComponent extends Component{
    render(){
        return (

            <>
            <Text
            style={{
                color:'white',
                fontSize:17,
                marginTop:23
                ,marginBottom:12
            }}
            >



                Estimates
            </Text>
         
         
            <View style={styles.container} 
              >



               
                <View style={styles.Box}>
                
                    <Text style={styles.status}>Completed</Text>
                    <Text style={styles.label}>Leads</Text>
                </View>
                <View style={styles.Box}>
                   
                    <Text style={styles.status}>Completed</Text>
                    <Text style={styles.label}>Leads</Text>
                </View>
                <View style={styles.Box1}>
                    
                    <Text style={styles.status}>Completed</Text>
                    <Text style={styles.label}>Leads</Text>
                </View>
            
            </View>


            <View style={styles.container1} 
                pointerEvents="none">



               
<View style={styles.Box}>
             
                    <Text style={styles.status}>Completed</Text>
                    <Text style={styles.label}>Leads</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                   
                    <Text style={styles.status}>Completed</Text>
      <Text style={styles.label}>Leads</Text>
                </View>
                <View style={styles.Box1}>
                
                    <Text style={styles.status}>Completed</Text>
                    <Text style={styles.label}>Leads</Text>
                </View>
            
            </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 6, 
        borderTopRightRadius: 6, 
        backgroundColor: '#2D2D2D',
        height: 60,   
             
     marginBottom:.7,
        justifyContent: 'center',
        flexDirection: 'row',
        width:'100%'    },
        container1: {
            borderBottomLeftRadius: 6, 
            borderBottomRightRadius: 6, 
           
            backgroundColor: '#2D2D2D',
            height: 60,   
                 
         marginBottom:.7,
            justifyContent: 'center',
            flexDirection: 'row',
            width:'100%'    },
    Box:{
        borderTopLeftRadius:12,
        alignItems: 'center', justifyContent: 'center', flex: 1,
    },
    Box1:{
        alignItems: 'center', justifyContent: 'center', flex: 1,borderLeftWidth:.6,
    },

    count: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    status: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 25
    },
    label: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    }
})