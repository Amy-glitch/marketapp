import React, { useState, useContext } from 'react'
import { StyleSheet, TextInput, View } from 'react-native';
import PillsComp from './PillsComp';
import { ItemContext } from '../context/ItemContext';

const SearchComp = (props) => {
    const [str, setStr] = useState("")
    const ItemCtx = useContext(ItemContext)
    return <>
        {ItemCtx.searchbar ? <TextInput onSubmitEditing={() => props.func(str)} onChangeText={(s) => setStr(s)} value={str} style={styles.searchbar} /> : <></>}
        <PillsComp func={(pill) => {
            if (pill != 'All') { props.func(str, pill) } else { props.func(str, '') }
        }} pills={props.pills} />
    </>
}
const styles = StyleSheet.create({
    searchbar: {
        borderColor: 'grey',
        borderBottomWidth: 1,
        margin: 8,
        borderRadius: 5,
        padding: 5,
    }
})
export default SearchComp;