
import React,{useContext} from 'react'
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import ItemComp from '../compnents/ItemComp';
const AcademicsScreen = ({navigation})=>{


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


    let Tags = () =>{
            return <>
            <View style={styles.tagbox}>
            <View style={styles.row}>
            <View style={styles.tag}><Text>Textbooks</Text></View>
            <View style={styles.tag}><Text>Tutors</Text></View>
            <View style={styles.tag}><Text>Notes</Text></View>
            </View>
            </View></>
        }

return <>

<Tags/>

<FlatList data={items} renderItem={({item})=>{
    if (item.title == 'tags')
    return <Tags/>
    else
    return <ItemComp item={item} />
}} ></FlatList>

</>
}

const styles=StyleSheet.create({
tagbox:{
    alignItems:'center',
    marginTop:10
},
row:{
flexDirection: 'row'
},
tag:{
    backgroundColor:'rgb(210,210,210)',
    margin:5,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10,
    borderRadius:8
}



})

export default AcademicsScreen;