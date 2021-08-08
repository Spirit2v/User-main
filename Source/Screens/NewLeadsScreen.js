import React, {Component} from 'react';
import { StyleSheet, View,Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Header_Component from '../Components/Header_Component';
import Colors from '../Utils/Colors';

export default class NewLeadsScreen extends Component{
    render(){
        return (
            <ScrollView style={styles.container}>
                <Header_Component Heading="New Leads"/>
                <View style={styles.containerContent}>
                    <View style={styles.userDetailsContainer}>
                        <Text style={styles.userDetailLabel}>User details will be revealed when Order is accepted</Text>
                    </View>
                    <Text style={styles.subtitle}>Order Details</Text>
                    <View style={styles.line}/>
                    <View style={styles.row}>
                        <Text style={styles.label}>Order: </Text>
                        <Text style={styles.value}>Ultratech Cement</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Type: </Text>
                        <Text style={styles.value}>OPC 53</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Quantity: </Text>
                        <Text style={styles.value}>20 bags</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Delivery Address: </Text>
                        <Text style={styles.value}>xyz, 2.234, Earth</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Deliver by: </Text>
                        <View style={styles.urgent}>
                            <Text style={styles.urgencyStatus}>URGENT</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Trade Type: </Text>
                        <View style={styles.tradeItem}>
                            <View style={styles.tradeIcon} />
                            <Text style={styles.tradeLabel}>Trade</Text>
                        </View>
                    </View>
                    <View style={styles.line}/>
                    <View style={Object.assign({...styles.inputContainer}, {marginTop: 10})}>
                        <Text style={styles.inputLabel}>Your price</Text>
                        <TextInput 
                            style={styles.input} 
                            placeholder="Enter an amount" 
                            placeholderTextColor="white"
                            keyboardType="number-pad"/>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>+ GST</Text>
                        <TextInput 
                            style={styles.input} 
                            placeholder="Enter a value" 
                            placeholderTextColor="white"
                            keyboardType="number-pad"/>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>+ Delivery Charges</Text>
                        <TextInput 
                            style={styles.input} 
                            placeholder="Enter an amount" 
                            placeholderTextColor="white"
                            keyboardType="number-pad"/>
                    </View>
                    <View style={styles.line}/>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Total Amount" 
                        placeholderTextColor="white"
                        keyboardType="number-pad"/>
                    <View style={styles.buttons}>
                        <TouchableOpacity 
                            style={{
                                backgroundColor: Colors.yellow, 
                                width: 80, 
                                height: 40, 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                borderRadius: 5,
                                marginRight: 20
                            }}>
                            <Text>Pitch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{
                                borderColor: Colors.yellow,
                                borderWidth: 1,
                                width: 100, 
                                height: 40, 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                borderRadius: 5,
                                marginLeft: 20
                            }}>
                            <Text style={{color: Colors.yellow}}>Decline</Text>
                        </TouchableOpacity>
                    </View>
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