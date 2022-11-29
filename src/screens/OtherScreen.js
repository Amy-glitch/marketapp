
import React,{useContext} from 'react'
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
const OtherScreen = ({navigation})=>{

    items =[
        {title:"Fridge"},
        {title:"Fairylights"},
        {title:"Smartwatch"},
        {title:"Air fryer"}
        ]


return <><Text>other</Text>
<FlatList data={items} renderItem={({item})=><Text>{item.title}</Text>} ></FlatList>

</>
}



const styles=StyleSheet.create({


})

export default OtherScreen;