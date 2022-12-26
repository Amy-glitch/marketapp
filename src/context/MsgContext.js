import React, { useState, useContext, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { AuthContext } from '../context/AuthContext';
export const MsgContext = React.createContext(null);
export default ({ children }) => {


    const AuthCtx = useContext(AuthContext)
    const [chats, setChats] = useState([])
    const [msgs, setMsgs] = useState([])
    const [newMsgs, setNewMsgs] = useState([])




    useEffect(() => {
    }, [])


    let inter = []

    function Test(payload) {
        // let new_arr = [...msgs]

        setNewMsgs([{ ...payload.new }, ...newMsgs])
        //setNewMsgs([...newMsgs, ...msgs])
        console.log(newMsgs)
        //setMsgs([payload.new])
        // console.log('msgs' + msgs)
        // console.log('pay:' + payload.new)
        //setMsgs(inter)
        // console.log('msgs' + msgs)
    }


    async function getChats() {

        const { data, error } = await supabase
            .from('chats_with_profiles')
            .select().or('user2.eq.' + AuthCtx.session.user.id + ',user1.eq.' + AuthCtx.session.user.id)
        setChats(data)

    }

    async function sendMsg(props) {
        const updates = {
            from: props.from,
            to: props.to,
            message: props.message,
            chat_id: props.chat_id
        }
        let { error } = await supabase.from('messages').insert(updates)

    }

    async function getMsgs(id) {

        const { data, error } = await supabase.from('messages').select().eq('chat_id', id).order('time', { ascending: false })
        setMsgs(data)
        const list = supabase.channel('public:messages:chat_id=eq.' + id)
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: 'chat_id=eq.' + id + '' }, (payload) => Test(payload))
            .subscribe();

    }








    return <MsgContext.Provider value={{ setNewMsgs, newMsgs, sendMsg, getChats, chats, getMsgs, msgs }}>{children}</MsgContext.Provider>
}