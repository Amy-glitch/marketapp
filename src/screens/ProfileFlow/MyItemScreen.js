import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button, FlatList } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { ItemContext } from '../../context/ItemContext';
import MyItemComp from '../../components/MyItemComp';
const MyItemScreen = () => {
    let ItemCtx = useContext(ItemContext)
    useEffect(() => {
        ItemCtx.getMyItems()
    }, [])

    return (<View>
        <Text style={styles.head}>My Items</Text>
        <FlatList data={ItemCtx.myitems} renderItem={({ item }) => {
            return <MyItemComp item={item} />
        }} ></FlatList>
    </View>)
}
const styles = StyleSheet.create({
    head: { fontSize: 25, margin: 10 }

})

export default MyItemScreen;