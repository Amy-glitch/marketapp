
import React,{useContext} from 'react'
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
const AllScreen = ({navigation})=>{

items =[
{title:"All"},
{title:"Anything"},
{title:"eveything"},
{title:"yes"}
]

return <><Text></Text>
<FlatList data={items} renderItem={({item})=><Text>{item.title}</Text>} ></FlatList>


</>
}



const styles=StyleSheet.create({


})

export default AllScreen;