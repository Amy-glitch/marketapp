
import React,{useContext} from 'react'
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
const AcademicsScreen = ({navigation})=>{


    items =[
        {title:"Engineering math textbook"},
        {title:"Applied math textbook"},
        {title:"Tutoring"},
        {title:"Comp systems textbook"}
        ]

return <>
<FlatList data={items} renderItem={({item})=><Text>{item.title}</Text>} ></FlatList>

</>
}



const styles=StyleSheet.create({


})

export default AcademicsScreen;