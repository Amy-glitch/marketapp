import React,{useContext, useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
const SearchComp = ({navigation})=>{

const [str, setStr]=useState("")

return <>

<TextInput onChangeText={(s)=>setStr(s)} value={str}  style={styles.searchbar}/>

</>
}



const styles=StyleSheet.create({
searchbar:{
    borderColor:'red',
    borderWidth:1,
    margin:5
}

})

export default SearchComp;