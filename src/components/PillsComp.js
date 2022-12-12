
import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const PillsComp = (props) => {
    const Pills = () => {
        return props.pills.map((pill) => <View key={pill} style={styles.tag}><Text>{pill}</Text></View>
        )
    }
    return <>
        <View style={styles.tagbox}>
            <View style={styles.row}>
                <Pills />
            </View>
        </View></>
}
const styles = StyleSheet.create({
    tagbox: {
        alignItems: 'center',
        marginTop: 10
    },
    row: {
        flexDirection: 'row'
    },
    tag: {
        backgroundColor: 'rgb(210,210,210)',
        margin: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 8
    }
})
export default PillsComp;