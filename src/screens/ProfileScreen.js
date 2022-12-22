import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { ItemContext } from '../context/ItemContext';
import MyItemComp from '../components/MyItemComp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserDetailScreen from './UserDetailScreen';
import MyItemScreen from './MyItemScreen';
import HelpScreen from './HelpScreen';

const ProfileScreen = () => {



    const Tab = createBottomTabNavigator();

    const Msgs = () => <Text>messages</Text>

    return (<Tab.Navigator screenOptions={{
        headerShown: false,

    }}
    >
        <Tab.Screen name="MyItems" component={MyItemScreen} />
        <Tab.Screen name="Profile" component={UserDetailScreen} />
        <Tab.Screen name="Messages" component={Msgs} />
        <Tab.Screen name="Help" component={HelpScreen} />
    </Tab.Navigator>)
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