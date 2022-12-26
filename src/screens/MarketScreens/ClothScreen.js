
import React, { useContext, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native';
import ItemComp from '../../components/ItemComp';
import { ItemContext } from '../../context/ItemContext';
import SearchComp from '../../components/SearchComp';

const ClothScreen = ({ navigation }) => {
    const ItemCtx = useContext(ItemContext)
    items = ItemCtx.itemsFashion;
    useEffect(() => {
        ItemCtx.searchFashion('')
    }, []);
    return <>
        <SearchComp pills={['All', 'Top', 'Bottom', 'Accesories', 'Misc']} func={(term, sub) => ItemCtx.searchFashion(term, sub)} />
        <FlatList data={items} renderItem={({ item }) => <ItemComp item={item} navigation={navigation} />} ></FlatList>
    </>
}
const styles = StyleSheet.create({
})
export default ClothScreen;