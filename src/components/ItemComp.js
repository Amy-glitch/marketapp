
import React from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';


const ItemComp = (props) => {
    return <>
        <TouchableOpacity onPress={() => props.navigation.navigate("ItemNav", props.item)}>
            <View style={styles.block}>
                <Text style={styles.head}>{props.item.title}</Text>
                <View style={styles.imgView}>
                    <Image style={styles.img} source={{ uri: props.item.img_url[0] }} />
                </View>
                <Text style={styles.price}>R {props.item.price}</Text>
                <Text> {props.item.username}</Text>
                <Text style={styles.desc}> {props.item.description} </Text>
            </View>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    imgView: {
        alignItems: 'center'
    },
    desc: {
        fontSize: 16,
        color: "rgb(150,150,150)",
        margin: 10

    },
    head: {
        fontSize: 25,
        margin: 5

    },
    price: {
        fontSize: 20,
        margin: 5
    },


    block: {
        backgroundColor: "rgb(230,230,230)",
        margin: 20,
        borderRadius: 5

    }, img: {
        width: 300,
        height: 250,
        borderRadius: 5

    }
})

export default ItemComp;