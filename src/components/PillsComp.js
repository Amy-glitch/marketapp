import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import globalStyles from '../GlobalStyles.js'

const PillsComp = (props) => {
    const Pills = () => {
        return props.pills.map((pill) => {
            return <TouchableOpacity onPress={() => props.func(pill)} key={pill} ><View style={styles.pill
            }><Text>{pill}</Text></View></TouchableOpacity>
        }
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
    pill: {
        backgroundColor: globalStyles.pillColor,
        margin: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 8
    }
})
export default PillsComp;