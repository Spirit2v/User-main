import React from 'react'
import { View, Text } from 'react-native'
import Styles from '../../../../Assets/Styles/Styles';
import Button from '../../../../Components/Button';
import Profile_TextinputCard from '../../../../Components/Profile_TextinputCard';
export default function BasicInformation({navigation}) {
    return (
        <View style={Styles.ProfileDetails_container}>
              
              
        <View style={{marginTop:10,paddingHorizontal:10}}>

<Profile_TextinputCard placeholder="Product Name"/>
<Profile_TextinputCard placeholder="Brand name"/>

<Profile_TextinputCard placeholder="Model Name"/>
<Profile_TextinputCard placeholder="MFG Year"/>
<Profile_TextinputCard placeholder="Current Location"/>
<Profile_TextinputCard placeholder="Add Specification"/>
</View>
<View style={{marginTop:40,justifyContent:'center',alignItems:'center'}}>
<Button title="continue"/>

</View>

        </View>
    )
}
<Profile_TextinputCard placeholder="Name"/>