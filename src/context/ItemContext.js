import React, { useContext, useState } from "react";
import { supabase } from "../lib/supabase";
import { AuthContext } from '../context/AuthContext';
export const ItemContext = React.createContext(null);
export default ({ children }) => {

    const [items, setItems] = useState([])
    const [myitems, setMyItems] = useState([])
    const [itemsFashion, setItemsFashion] = useState([])
    const [itemsAcademic, setItemsAcademic] = useState([])
    const [itemsOther, setItemsOther] = useState([])

    const [searchbar, setSearchbar] = useState(false)

    const AuthCtx = useContext(AuthContext)



    async function searchAcademic(term, sub) {
        if (!sub) {
            const { data, error } = await supabase
                .from('items').select()
                .like('title', '%' + term + '%').eq('category', 'Academic')
            setItemsAcademic(data)
        } else {
            const { data, error } = await supabase
                .from('items').select()
                .like('title', '%' + term + '%').eq('category', 'Academic').eq('sub_category', sub)
            setItemsAcademic(data)

        }

    }

    async function searchFashion(term, sub) {

        if (!sub) {
            const { data, error } = await supabase
                .from('items').select()
                .like('title', '%' + term + '%').eq('category', 'Fashion')
            setItemsFashion(data)
        } else {
            const { data, error } = await supabase
                .from('items').select()
                .like('title', '%' + term + '%').eq('category', 'Fashion').eq('sub_category', sub)
            setItemsFashion(data)

        }

    }

    async function searchOther(term, sub) {
        if (!sub) {
            const { data, error } = await supabase
                .from('items').select()
                .like('title', '%' + term + '%').eq('category', 'Other')
            setItemsOther(data)
        }

        else {
            const { data, error } = await supabase
                .from('items').select()
                .like('title', '%' + term + '%').eq('category', 'Other').eq('sub_category', sub)
            setItemsOther(data)

        }

    }

    async function deleteItem(id) {

        const { error } = await supabase
            .from('items')
            .delete()
            .eq('item_id', id)

    }


    async function getMyItems() {
        const { data, error } = await supabase
            .from('items')
            .select()
            .eq('uid', AuthCtx.session.user.id)
        setMyItems(data)


    }




    async function searchItem(term) {

        const { data, error } = await supabase
            .from('item_join_profile')
            .select('*')
            .like('title', '%' + term + '%')
        console.log(data)
        setItems(data)


    }

    async function addItem(props) {
        const updates = {
            item_id: Math.floor(Math.random() * 1000),
            title: props.title,
            price: props.price,
            description: props.description,
            img_url: props.imgurls,
            category: props.category,
            sub_category: props.subCat,
            uid: AuthCtx.session.user.id
        }
        let { error } = await supabase.from('items').upsert(updates)
    }

    async function uploadImg(file) {
        const photo = {
            uri: file.uri,
            type: file.type,
            name: file.uri,
        }
        const formData = new FormData()
        formData.append('file', photo)
        const fileExt = file.uri.split('.').pop()
        const filePath = `${Math.random()}.${fileExt}`
        let { error } = await supabase.storage.from('item-images').upload(filePath, formData)
        const { data, err } = await supabase.storage.from('item-images').getPublicUrl(filePath)
        return data.publicUrl
    }

    return <ItemContext.Provider value={{ deleteItem, getMyItems, myitems, searchbar, setSearchbar, items, itemsFashion, itemsAcademic, itemsOther, addItem, uploadImg, searchItem, searchAcademic, searchFashion, searchOther }}>{children}</ItemContext.Provider>
}