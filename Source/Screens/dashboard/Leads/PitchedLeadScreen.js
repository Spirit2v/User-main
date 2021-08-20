import React, {Component} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import NewPitchItemComponent from '../../../Components/NewPitchItemComponent';
import NewPitchItemComponent1 from '../../../Components/NewPitchItemComponent1';

const LEADS = [
    {id: 1, name: 'Cement', quantity: 20, timestamp: '2 hours ago', time: '2 days', isUrgent: false},
    {id: 2, name: 'Cement', quantity: 10, timestamp: '2 hours ago', time: 'URGENT', isUrgent: true},
    {id: 3, name: 'Bricks', quantity: 20, timestamp: '1 hours ago', time: '2 days', isUrgent: false},
    {id: 4, name: 'TMT Bars', quantity: 10, timestamp: '4 hours ago', time: 'URGENT', isUrgent: true},
]
export default class PitchedLeadScreen extends Component{
    render(){
        return (
        <>
            <FlatList
            data={LEADS}
            style={styles.container}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (<NewPitchItemComponent1 item={item} {...this.props}/>)}
            ItemSeparatorComponent={() => <View style={styles.separator}/>}
            contentContainerStyle={{minHeight: '100%'}}
        />

</>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical:-38
        ,marginTop:19
    },
    separator: {
        height: 30,
    }
})