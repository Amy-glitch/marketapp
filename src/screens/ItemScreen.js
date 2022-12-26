import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';


const ItemScreen = ({ route, navigation }) => {
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
        <TouchableOpacity onPress={() => navigation.navigate('MsgsScreen', { uid: item.uid, user: item.username })}>
            <Text>Message seller</Text>
        </TouchableOpacity>
    </>
}
const styles = StyleSheet.create({
    list: { height: 250 },
    title: { fontSize: 30 },
    price: { fontSize: 20 },
    desc: { fontSize: 15 },
    imgView: {
        justifyContent: 'center',

    },
    img: {
        width: Dimensions.get('window').width,
        height: 450,
        borderRadius: 5
    }
})
export default ItemScreen;