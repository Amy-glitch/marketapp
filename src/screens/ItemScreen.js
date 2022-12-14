
import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import ItemComp from '../components/ItemComp';
import SearchComp from '../components/SearchComp';
import { ItemContext } from '../context/ItemContext';

const ItemScreen = ({ navigation, route }) => {
    let item = route.params
    let photos = item.img_url
    return <>
        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.list}>
            <FlatList horizontal={true} data={photos} renderItem={({ item }) => {
                return <View style={styles.imgView}><Image style={styles.img} source={{ uri: item }} /></View>
            }} ></FlatList>
        </View>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <Text style={styles.price}>Contact</Text>
        <Text style={styles.desc}>user details</Text>
    </>
}
const styles = StyleSheet.create({
    list: { height: 250 },
    title: { fontSize: 30 },
    price: { fontSize: 20 },
    desc: { fontSize: 15 },
    imgView: {
        // alignItems: 'center',
        justifyContent: 'center',

    },
    img: {
        width: Dimensions.get('window').width,
        height: 450,
        borderRadius: 5
    }
})


export default ItemScreen;