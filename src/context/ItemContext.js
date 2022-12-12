import React, {useState} from "react";
export const ItemContext = React.createContext(null);
export default ({children})=>{

    items =[
        {title:"Item 1",
        price:100,
        desc: 'This is a very random item that you can buy if you really want to bla bla bla random filled random random lorem ipsum'
        },
        {title:"Item 2",
        price:120,
        desc: 'This is a very random item that you can buy if you really want to bla bla bla random filled random random lorem ipsum'},
        {title:"eveything",
        price:130,
        desc: 'This is a very random item that you can buy if you really want to bla bla bla random filled random random lorem ipsum'},
        {title:"yes",
        price:100,
        desc: 'This is a very random item that you can buy if you really want to bla bla bla random filled random random lorem ipsum'}
        ]
    




return <ItemContext.Provider value={{items}}>{children}</ItemContext.Provider>    
}