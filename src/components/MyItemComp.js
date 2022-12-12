
import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';


const MyItemComp = (props) => {

    return <>
        <TouchableOpacity onPress={() => props.navigation.navigate("MyItemNav", props.item)}>

            <View style={styles.block}>
                <View style={styles.btnrow}>
                    <View >
                        <Text style={styles.head}>{props.item.title}</Text>
                        <Text style={styles.price}>R {props.item.price}</Text>
                    </View>
                    <View style={styles.btns}>
                        <Text>Edit</Text>
                        <Text>Delete</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.desc}> {props.item.desc} </Text>
                    <Image style={styles.img} source={{ uri: 'https://stickerly.pstatic.net/sticker_pack/kd7ZooCY2IKkjvCjsszw/T01DIS/7/6fac0144-9bd1-40f5-b968-885621484b39.png' }} />
                </View>
            </View>


        </TouchableOpacity>
    </>
}
//

const styles = StyleSheet.create({
    btns: {
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
        borderRadius: 5,

    }, img: {
        width: 70,
        height: 70,
        borderRadius: 5

    },
    btnrow: {
        flexDirection: 'row',

        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        width: 250,
        justifyContent: 'space-between'
    }
})

export default MyItemComp;