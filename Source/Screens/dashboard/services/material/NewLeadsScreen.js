import React, {Component} from 'react';
import { StyleSheet, View,Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Header_Component from '../../../../Components/Header_Component';
import Colors from '../../../../Utils/Colors';

export default class NewLeadsScreen extends Component{
    render(){
        return (
            <ScrollView style={styles.container}>
               
                <View style={styles.containerContent}>
                  
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkgrey,
    },
    containerContent: {
        padding: 15
    },
    userDetailsContainer: {
        height: 200,
        borderWidth: .2,
        borderColor: 'grey',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userDetailLabel: {
        color: 'white',
        fontSize: 13,
        width: '50%',
        textAlign: 'center',
        lineHeight: 20
    },
    subtitle: {
        marginTop: 15,
        color: 'white',
        fontSize: 15
    },  
    line: {
        height: .4,
        backgroundColor: 'white',
        marginVertical: 5
    },
    row: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
    },
    label: {
        color: 'white'
    },
    value: {
        color: 'grey',
        fontSize: 15,
        marginLeft: 'auto'
    },
    urgent: {
        height: 22,
        backgroundColor: Colors.lightred,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 'auto'
    },
    urgencyStatus: {
        fontSize: 13
    },
    tradeItem: {
        marginLeft: 'auto',
        alignItems: 'center',
        flexDirection: 'row',
    },
    tradeIcon: {
        height: 18, 
        width: 18, 
        borderRadius: 9, 
        backgroundColor: 'green', 
        borderWidth: 1,
        borderColor: 'white'
    },
    tradeLabel: {
        color: 'white',
        marginLeft: 10
    },
    inputContainer: {
    },
    inputLabel: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    },
    input: {
        borderColor: 'white',
        borderWidth: .4,
        borderRadius: 5,
        width: '60%',
        height: 40,
        color: 'white',
        marginVertical: 10,
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    buttons: {
        marginVertical: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})