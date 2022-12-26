import React from 'react'
import { StyleSheet, View, Text } from 'react-native';


const TheirMsg = (props) => {

    return (<View style={styles.theirmsgframe}>
        <View style={styles.theirmsg}>
            <Text>{props.msg}</Text>
        </View></View >)
}
const styles = StyleSheet.create({
    theirmsgframe: {
        alignItems: 'flex-start',
    },
    theirmsg: {
        backgroundColor: 'lightgrey',
        padding: 8,
        borderRadius: 5,
        margin: 8
    }

})
export default TheirMsg;