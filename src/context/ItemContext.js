import React, { useState } from "react";
import { supabase } from "../lib/supabase";
export const ItemContext = React.createContext(null);
export default ({ children }) => {

    const [items, setItems] = useState([])
    const [itemsFashion, setItemsFashion] = useState([])
    const [itemsAcademic, setItemsAcademic] = useState([])
    const [itemsOther, setItemsOther] = useState([])




    async function searchAcademic(term) {
        const { data, error } = await supabase
            .from('items').select()
            .like('title', '%' + term + '%').eq('category', 'Academic')
        setItemsAcademic(data)
    }

    async function searchFashion(term) {
        const { data, error } = await supabase
            .from('items').select()
            .like('title', '%' + term + '%').eq('category', 'Fashion')
        setItemsFashion(data)
    }

    async function searchOther(term) {
        const { data, error } = await supabase
            .from('items').select()
            .like('title', '%' + term + '%').eq('category', 'Other')
        setItemsOther(data)
    }




    async function searchItem(term) {

        const { data, error } = await supabase
            .from('items')
            .select()
            .like('title', '%' + term + '%')
        setItems(data)
        console.log(data)

    }

    async function addItem(props) {
        const updates = {
            item_id: Math.floor(Math.random() * 1000),
            title: props.title,
            price: props.price,
            description: props.description,
            img_url: props.imgurls
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

    return <ItemContext.Provider value={{ items, itemsFashion, itemsAcademic, itemsOther, addItem, uploadImg, searchItem, searchAcademic, searchFashion, searchOther }}>{children}</ItemContext.Provider>
}