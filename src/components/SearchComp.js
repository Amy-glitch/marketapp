import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
const SearchComp = ({ navigation }) => {

    const [str, setStr] = useState("")

    return <>

        <TextInput onChangeText={(s) => setStr(s)} value={str} style={styles.searchbar} />

    </>
}



const styles = StyleSheet.create({
    searchbar: {
        borderColor: 'grey',
        borderWidth: 1,
        margin: 8,
        borderRadius: 5,
        padding: 5,
        marginTop: 8
    }

})

export default SearchComp;