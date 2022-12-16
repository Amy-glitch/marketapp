
import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ItemComp from '../components/ItemComp';
import PillsComp from '../components/PillsComp';
import { ItemContext } from '../context/ItemContext';
import SearchComp from '../components/SearchComp';

const AcademicsScreen = ({ navigation }) => {
    const ItemCtx = useContext(ItemContext)
    items = ItemCtx.itemsAcademic;
    return <>
        <SearchComp func={(term) => ItemCtx.searchAcademic(term)} />
        <PillsComp pills={['Textbooks', 'Tutors', 'Notes']} />
        <FlatList data={items} renderItem={({ item }) => {
            return <ItemComp item={item} navigation={navigation} />
        }} ></FlatList>
    </>
}
const styles = StyleSheet.create({
})
export default AcademicsScreen;