import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import MyItemComp from '../components/MyItemComp';
import { ItemContext } from '../context/ItemContext';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
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
    ]

    const [title, setTitle] = useState("Dress")
    const [price, setPrice] = useState(150)
    const [description, setDesc] = useState("This is a dress")
    const [imgurls, setImgurls] = useState(["https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Norwegian%20Forest.1.jpg?h=8629645f&itok=5eQxIYBQ"])
    const [selectedImgs, setImgs] = useState([])

    let ItemCtx = useContext(ItemContext)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsMultipleSelection: true
        });
        const manipResult = await ImageManipulator.manipulateAsync(
            result.assets[0].uri,
            [{ resize: { width: 250, height: 250 } },],
            { compress: 1, format: ImageManipulator.SaveFormat.PNG }
        );
        setImgs([manipResult])
        let puburl = await ItemCtx.uploadImg(manipResult)
        setImgurls([puburl])
    }

    const SelectedImages = (props) => {
        return (
            <View style={styles.row}>
                {props.arr.map((i) => <Image style={styles.selimg} source={{ uri: i.uri }} key={Math.floor(Math.random() * 1000)} />)}
            </View>)

    }
    return <>
        <Text>Title:</Text>
        <TextInput value={title} onChangeText={(e) => setTitle(e)} />
        <Text>Price:</Text>
        <TextInput value={price} onChangeText={(e) => setPrice(e)} />
        <Text>Description:</Text>
        <TextInput value={description} onChangeText={(e) => setDesc(e)} />
        <Text>Category:</Text>
        <Text>Academics  Fashion  Other</Text>
        <Text>Tags:</Text>
        <Text>Dorm room Tech</Text>
        <TouchableOpacity onPress={() => pickImage()} >
            <Text style={styles.photoupload}>Upload photos</Text>
        </TouchableOpacity>
        <SelectedImages arr={selectedImgs} />
        <Button title="Add item!" onPress={() => ItemCtx.addItem({ title, price, description, imgurls })} />
        <Text style={styles.head}>My Items</Text>
        <FlatList data={items} renderItem={({ item }) => {
            return <MyItemComp item={item} navigation={navigation} />
        }} ></FlatList>
    </>
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    photoupload: {
        borderWidth: 2,
        width: 120,
        textAlign: 'center',
        borderRadius: 5
    },
    head: {
        fontSize: 25
    },
    selimg: {
        height: 50,
        width: 50
    }
})

export default MyShopScreen;