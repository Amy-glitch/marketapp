import React from 'react'
import { StyleSheet, TextInput, View, Dimensions } from 'react-native';
import globalStyles from '../GlobalStyles';

const SearchBar = () => {

    return <View ><TextInput style={{
        color: globalStyles.searchInputFont,
        borderColor: globalStyles.searchInputBorder, ...styles
    }}>searchbar</TextInput></View>
}

const styles = StyleSheet.create({
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    width: Dimensions.get('window').width - 24 - 50
})

export default SearchBar;