import React, { useContext, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native';
import ItemComp from '../../components/ItemComp';
import { ItemContext } from '../../context/ItemContext';
import SearchComp from '../../components/SearchComp';

const AcademicsScreen = ({ navigation }) => {
    const ItemCtx = useContext(ItemContext)
    items = ItemCtx.itemsAcademic;
    useEffect(() => {
        ItemCtx.searchAcademic('')
    }, []);
    return <>
        <SearchComp pills={['All', 'Textbooks', 'Tutors', 'Notes', 'Misc']} func={(term, sub) => ItemCtx.searchAcademic(term, sub)} />
        <FlatList data={items} renderItem={({ item }) => {
            return <ItemComp item={item} navigation={navigation} />
        }} ></FlatList>
    </>
}
const styles = StyleSheet.create({
})
export default AcademicsScreen;