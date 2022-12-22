
import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { ItemContext } from '../context/ItemContext';

const MyItemComp = (props) => {

    ItemCtx = useContext(ItemContext)
    return <>
        <View style={styles.block}>
            <View style={styles.btnrow}>
                <View >
                    <Text style={styles.head}>{props.item.title}</Text>
                    <Text style={styles.price}>R {props.item.price}</Text>
                </View>
                <View style={styles.btns}>
                    <Text style={styles.delete} onPress={() => ItemCtx.deleteItem(props.item.item_id)}>Delete</Text>
                </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.desc}> {props.item.description} </Text>
                <Image style={styles.img} source={{ uri: props.item.img_url[0] }} />
            </View>
        </View>
    </>
}
const styles = StyleSheet.create({
    btns: {
        alignItems: 'center'
    },
    delete: {
        margin: 10,
        backgroundColor: 'red',
        padding: 7,
        borderRadius: 5,
        overflow: 'hidden',
        borderStyle: 'solid',
        color: 'white'

    }
    ,
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
        borderRadius: 5,

    }, img: {
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 10

    },
    btnrow: {
        flexDirection: 'row',

        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        width: 320,
        justifyContent: 'space-between'
    }
})

export default MyItemComp;