import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

const YourMsg = (props) => {
    return <View style={styles.yourmsgframe}><View style={styles.yourmsg}><Text>{props.msg}</Text></View></View>
}
const styles = StyleSheet.create({
    yourmsg: {
        backgroundColor: 'lightblue',
        padding: 8,
        borderRadius: 5,
        margin: 8
    },
    yourmsgframe: {
        alignItems: 'flex-end',
    }
})
export default YourMsg;