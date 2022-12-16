
import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ItemComp from '../components/ItemComp';
import PillsComp from '../components/PillsComp';
import { ItemContext } from '../context/ItemContext';
import SearchComp from '../components/SearchComp';

const ClothScreen = ({ navigation }) => {
    const ItemCtx = useContext(ItemContext)
    items = ItemCtx.itemsFashion;
    return <>
        <SearchComp func={(term) => ItemCtx.searchFashion(term)} />
        <PillsComp pills={['Top', 'Bottom', 'Shoes', 'Accesories']} />
        <FlatList data={items} renderItem={({ item }) => <ItemComp item={item} navigation={navigation} />} ></FlatList>
    </>
}
const styles = StyleSheet.create({
})
export default ClothScreen;