import React from 'react'
import { View, Text,TextInput } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
export default function InputDropdown({items,value,open,setItems,setValue,setOpen}) {
    return (
        <View
        style={{flexDirection:'row',paddingHorizontal:20}}
        >
        <View>

            <TextInput
            placeholder="Enter text"
            placeholderColor="white"
            style={{borderColor:'grey',borderWidth:1,borderRadius:4,marginLeft:0,color:'white'}}
            height={40}
            width={300}
            />

        </View>
<View
style={{flex:1,height:20}}
>
<DropDownPicker
            listMode="SCROLLVIEW"  
            placeholder="cm"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      textStyle={{color:"white"}}
      setValue={setValue}
      setItems={setItems}
      style={{height:40,width:78,
    backgroundColor:'#121417',borderRadius:4,borderColor:'grey',borderWidth:1
}}
      containerStyle={{
        backgroundColor:'#121417',color:'#121417',
height:40,width:60

    }}
    
    />
    </View>
    </View>
    )
}
