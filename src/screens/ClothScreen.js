
import React,{useContext} from 'react'
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
const ClothScreen = ({navigation})=>{

items =[
{title:"Shirt"},
{title:"Shoes"},
{title:"Hat"},
{title:"Jacket"}
]

return <><Text>Explore Clothing</Text>
<FlatList data={items} renderItem={({item})=><Text>{item.title}</Text>} ></FlatList>


</>
}



const styles=StyleSheet.create({


})

export default ClothScreen;