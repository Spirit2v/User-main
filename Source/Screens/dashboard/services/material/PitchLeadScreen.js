import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class PitchLeadScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121417',
        padding: 10
    },
    card: {
        flex: 1/4,
        borderWidth: .1,
        borderColor: 'grey',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        color: 'grey',
        width: '50%',
        textAlign: 'center',
        lineHeight: 18
    },
    subTitle: {
        color: 'white',
        fontSize: 16,
        marginTop: 30
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'grey',
        marginVertical: 5
    }
})