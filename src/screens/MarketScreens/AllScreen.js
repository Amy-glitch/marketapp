
import React, { useContext, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native';
import ItemComp from '../../components/ItemComp';
import SearchComp from '../../components/SearchComp';
import { ItemContext } from '../../context/ItemContext';
import { AuthContext } from '../../context/AuthContext';


const AllScreen = ({ navigation }) => {
    const ItemCtx = useContext(ItemContext)
    const AuthCtx = useContext(AuthContext)
    items = ItemCtx.items;
    useEffect(() => {
        AuthCtx.getSession()
        ItemCtx.searchItem('');



    }, []);


    return <>
        {ItemCtx.searchbar ? <SearchComp pills={[]} func={(term) => ItemCtx.searchItem(term)} /> : <></>}
        <FlatList numColumns={2} keyExtracor={(item) => item} data={items} renderItem={({ item }) => {
            return <ItemComp item={item} navigation={navigation} />
        }} ></FlatList>
    </>
}
const styles = StyleSheet.create({
})
export default AllScreen;