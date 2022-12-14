import React, { useState } from "react";
import { supabase } from "../lib/supabase";

export const ItemContext = React.createContext(null);
export default ({ children }) => {

    const [items, setItems] = useState([])

    async function getData() {
        let { data, error, status } = await supabase
            .from('items')
            .select(`*`)
        setItems(data)
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
        console.log(updates)
    }



    async function uploadImg(file) {

        const photo = {
            uri: file.uri,
            type: file.type,
            name: file.fileName,
        }

        const formData = new FormData()
        formData.append('file', photo)

        const fileExt = file.fileName.split('.').pop()
        const filePath = `${Math.random()}.${fileExt}`

        let { error } = await supabase.storage.from('item-images').upload(filePath, formData)

        const { data, err } = await supabase.storage.from('item-images').getPublicUrl(filePath)

        return data.publicUrl
    }



    return <ItemContext.Provider value={{ items, getData, addItem, uploadImg }}>{children}</ItemContext.Provider>
}