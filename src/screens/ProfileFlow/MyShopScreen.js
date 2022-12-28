import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import MyItemComp from '../../components/MyItemComp';
import { ItemContext } from '../../context/ItemContext';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import globalStyles from '../../GlobalStyles';

const MyShopScreen = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(150)
    const [description, setDesc] = useState("add more space")
    const [imgurls, setImgurls] = useState(["https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Norwegian%20Forest.1.jpg?h=8629645f&itok=5eQxIYBQ"])
    const [selectedImgs, setImgs] = useState([])
    const [category, setCategory] = useState('Other')
    const [subCat, setSubCat] = useState('Misc');
    const [subCats, setSubCats] = useState(['Dorm', 'Tech', 'Misc']);
    let ItemCtx = useContext(ItemContext)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsMultipleSelection: true
        });
        let manipResult = await Promise.all(result.assets.map(async (asset) => await ImageManipulator.manipulateAsync(
            asset.uri,
            [{ resize: { width: 250, height: 250 } },],
            { compress: 1, format: ImageManipulator.SaveFormat.PNG }
        )
        ))
        setImgs(manipResult)
        let puburls = await Promise.all(manipResult.map(async (res) => await ItemCtx.uploadImg(res)))
        setImgurls(puburls)
    }

    const SelectedImages = (props) => {
        return (
            <View style={styles.row}>
                {props.arr.map((i) => <Image style={styles.selimg} source={{ uri: i.uri }} key={Math.floor(Math.random() * 1000)} />)}
            </View>)
    }

    return <>
        <View style={styles.form}>
            <View style={styles.row}>
                <Text style={styles.head2}>Title:</Text>
                <TextInput style={styles.input} value={title} onChangeText={(e) => setTitle(e)} />
            </View>
            <View style={styles.row}>
                <Text style={styles.head2}>Price:</Text>
                <TextInput style={styles.input} value={price} onChangeText={(e) => setPrice(e)} />
            </View>

            <Text style={styles.head2}>Description:</Text>
            <TextInput multiline={true}
                numberOfLines={2} style={styles.descinput} value={description} onChangeText={(e) => setDesc(e)} />

            <Text style={styles.head2}>Category:</Text>
            <View style={styles.row}>
                <Text style={(category == "Academic") ? styles.selectedCat : styles.normal} onPress={() => { setCategory("Academic"); setSubCats(["Textbooks", "Tutors", "Notes", "Misc"]) }}>Academics</Text>
                <Text style={(category == "Fashion") ? styles.selectedCat : styles.normal} onPress={() => { setCategory("Fashion"); setSubCats(['Top', 'Bottom', 'Accesories', 'Misc']) }}> Fashion</Text>
                <Text style={(category == "Other") ? styles.selectedCat : styles.normal} onPress={() => { setCategory("Other"); setSubCats(["Tech", "Dorm", "Misc"]) }}> Other</Text>
            </View>
            <Text style={styles.head2}>Sub-category:</Text>
            <View style={styles.row}>
                {subCats.map((t) => <Text style={(subCat == t) ? styles.selectedCat : styles.normal} onPress={() => setSubCat(t)} >{t}</Text>)}
            </View>
            <TouchableOpacity onPress={() => pickImage()} >
                <Text style={styles.photoupload}>Upload photos</Text>
            </TouchableOpacity>
            <SelectedImages arr={selectedImgs} />
        </View>
        <View style={styles.btn}><Text style={styles.btntext} onPress={() => ItemCtx.addItem({ title, price, description, imgurls, category, subCat })}>Add item!</Text></View>
        <View style={styles.frame}>
        </View>
    </>
}

const styles = StyleSheet.create({
    btntext: {
        backgroundColor: globalStyles.addItemButtons,
        padding: 5,
        borderRadius: 6,
        borderStyle: 'solid',
        overflow: 'hidden'
    },
    btn: {
        alignItems: 'center'
    },
    head2: {
        fontSize: 16,
        margin: 5
    },
    form: {
        margin: 20,

    },
    frame: { marginLeft: 20 },
    descinput: {
        marginLeft: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 5
    },
    input: { borderBottomWidth: 1, width: 200 },
    normal: { padding: 5 },
    selectedCat: {
        backgroundColor: globalStyles.addItemButtons,
        borderStyle: 'solid',
        borderRadius: 5,
        overflow: 'hidden',
        padding: 5


    },
    row: {
        flexDirection: 'row'
    },
    photoupload: {
        borderWidth: 2,
        width: 120,
        textAlign: 'center',
        borderRadius: 5,
        borderColor: globalStyles.addItemPhotos,
        backgroundColor: globalStyles.addItemPhotos,
        overflow: 'hidden',
        margin: 8

    },
    head: {
        fontSize: 25
    },
    selimg: {
        height: 50,
        width: 50,
        margin: 2,
        borderRadius: 7,
        marginTop: 5
    }
})

export default MyShopScreen;