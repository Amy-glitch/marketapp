import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { ItemContext } from '../context/ItemContext';
import MyItemComp from '../components/MyItemComp';

const ProfileScreen = () => {
    let AuthCtx = useContext(AuthContext)
    let ItemCtx = useContext(ItemContext)

    useEffect(() => {
        ItemCtx.getMyItems()

    }, []);

    return (<View>
        <Text>hey {AuthCtx.session.user.email}</Text>
        <Text onPress={() => { AuthCtx.signOut() }}>signout</Text>
        <Text style={styles.head}>My Items</Text>
        <FlatList data={ItemCtx.myitems} renderItem={({ item }) => {
            return <MyItemComp item={item} />
        }} ></FlatList>
    </View>)
}
const styles = StyleSheet.create({
    head: { fontSize: 25 },
    right: { alignItems: 'flex-end', margin: 10 },
    cent: { alignItems: 'center' },
    btn: {
        marginTop: 20,
        padding: 5,
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        overflow: 'hidden',
        borderStyle: 'solid'
    },
    label: {
        margin: 7,
        width: 70
    },
    input: {
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        width: 200
    },
    frame: { margin: 30 },
    row: { flexDirection: 'row' },
    head: { fontSize: 35, marginBottom: 15 }
})

export default ProfileScreen;