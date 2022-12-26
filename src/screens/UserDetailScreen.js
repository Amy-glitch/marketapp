import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { ItemContext } from '../context/ItemContext';

const UserDetailScreen = () => {

    let AuthCtx = useContext(AuthContext)
    //let user = AuthCtx.session.user;



    return (<View>
        <TouchableOpacity style={styles.btn} onPress={() => AuthCtx.signOut()}>
            <Text >Sign Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => AuthCtx.signOut()}>
            <Text >Delete account</Text>
        </TouchableOpacity>
        <Text>User details</Text>
        <Text>E-mail: </Text>
        <Text>Username:{AuthCtx.profile.username} </Text>

    </View>)
}
const styles = StyleSheet.create({
    btn: {
        fontSize: 20,
        margin: 10,
        padding: 10,
        backgroundColor: 'lightgrey',
        borderRadius: 8,
        overflow: 'hidden',
        borderStyle: 'solid'
    }

})

export default UserDetailScreen;