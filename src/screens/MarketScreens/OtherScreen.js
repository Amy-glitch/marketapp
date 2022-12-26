
import React, { useContext, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native';
import ItemComp from '../../components/ItemComp';
import { ItemContext } from '../../context/ItemContext';
import SearchComp from '../../components/SearchComp';
const OtherScreen = ({ navigation }) => {
    const ItemCtx = useContext(ItemContext)
    items = ItemCtx.itemsOther;
    useEffect(() => {
        ItemCtx.searchOther('')
    }, []);
    return <>
        <SearchComp func={(term, sub) => ItemCtx.searchOther(term, sub)} pills={['All', 'Dorm', 'Tech', 'Misc']} />
        <FlatList data={items} renderItem={({ item }) => <ItemComp item={item} navigation={navigation} />} ></FlatList>
    </>
}
const styles = StyleSheet.create({
})
export default OtherScreen;