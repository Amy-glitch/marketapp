
import React from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import globalStyles from '../GlobalStyles';

const ItemComp = (props) => {
    return <>
        <TouchableOpacity onPress={() => props.navigation.navigate("ItemNav", props.item)}>
            <View style={styles.block}>
                <Text style={styles.head}>{props.item.title}</Text>
                <View style={styles.imgView}>
                    <Image style={styles.img} source={{ uri: props.item.img_url[0] }} />
                </View>
                <Text style={styles.price}>R {props.item.price}</Text>
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
        fontSize: 16,
        margin: 5,
        color: globalStyles.itemLabelColor
    },
    price: {
        fontSize: 14,
        margin: 0,
        color: globalStyles.itemLabelColor
    },


    block: {
        //  borderBottomWidth: 1,
        borderBottomColor: globalStyles.itemLabelColor,
        margin: 4,
        //borderRadius: 5,
        flex: 0.5

    }, img: {
        width: 170,
        height: 150,
        borderRadius: 5

    }
})

export default ItemComp;