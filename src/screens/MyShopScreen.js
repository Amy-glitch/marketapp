import React, { useContext } from 'react'
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import MyItemComp from '../components/MyItemComp';

const MyShopScreen = ({ navigation }) => {
    items = [
        {
            title: "Item 1",
            price: 100,
            desc: 'This is a very random item that you can buy if you really want to bla bla bla random filled random random lorem ipsum'
        },
        {
            title: "Item 2",
            price: 120,
            desc: 'This is a very random item that you can buy if you really want to bla bla bla random filled random random lorem ipsum'
        },
        {
            title: "eveything",
            price: 130,
            desc: 'This is a very random item that you can buy if you really want to bla bla bla random filled random random lorem ipsum'
        },
        {
            title: "yes",
            price: 100,
            desc: 'This is a very random item that you can buy if you really want to bla bla bla random filled random random lorem ipsum'
        }
    ]
    return <>
        <Text>Title:</Text>
        <TextInput />
        <Text>Price:</Text>
        <TextInput />
        <Text>Description:</Text>
        <TextInput />
        <Text>Category:</Text>
        <Text>Academics  Fashion  Other</Text>
        <Text>Tags:</Text>
        <Text>Dorm room Tech</Text>
        <Text style={styles.photoupload}>Upload photos</Text>
        <Button title="Add item!" />
        <Text style={styles.head}>My Items</Text>
        <FlatList data={items} renderItem={({ item }) => {
            return <MyItemComp item={item} navigation={navigation} />
        }} ></FlatList>
    </>
}



const styles = StyleSheet.create({
    photoupload: {
        borderWidth: 2,
        width: 120,
        textAlign: 'center',
        borderRadius: 5
    },
    head: {
        fontSize: 25
    }
})

export default MyShopScreen;