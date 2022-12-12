
import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ItemComp from '../components/ItemComp';
import SearchComp from '../components/SearchComp';
import { ItemContext } from '../context/ItemContext';

const AllScreen = ({ navigation }) => {
    const ItemCtx = useContext(ItemContext)
    items = ItemCtx.items;
    return <>
        <SearchComp />
        <FlatList data={items} renderItem={({ item }) => {
            return <ItemComp item={item} navigation={navigation} />
        }} ></FlatList>
    </>
}
const styles = StyleSheet.create({

})
export default AllScreen;