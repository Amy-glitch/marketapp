
import React,{useContext} from 'react'
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import ItemComp from '../compnents/ItemComp';
import SearchComp from '../compnents/SearchComp';

const AllScreen = ({navigation})=>{

items =[
{title:"Item 1",
price:100,
desc: 'This is a very random item that you can buy if you really want to bla bla bla random filled random random lorem ipsum'
},
{title:"Item 2",
price:120,
desc: 'This is a very random item that you can buy if you really want to bla bla bla random filled random random lorem ipsum'},
{title:"eveything",
price:130,
desc: 'This is a very random item that you can buy if you really want to bla bla bla random filled random random lorem ipsum'},
{title:"yes",
price:100,
desc: 'This is a very random item that you can buy if you really want to bla bla bla random filled random random lorem ipsum'}
]

return <>
<SearchComp/>
<FlatList data={items} renderItem={({item})=>{
return <ItemComp item={item} />}} ></FlatList>
</>
}



const styles=StyleSheet.create({


})

export default AllScreen;