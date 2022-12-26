import React, { useState, useContext, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { AuthContext } from '../context/AuthContext';
export const MsgContext = React.createContext(null);
export default ({ children }) => {


    const AuthCtx = useContext(AuthContext)
    const [chats, setChats] = useState([])
    const [msgs, setMsgs] = useState([])
    const [newMsgs, setNewMsgs] = useState([])
    const [id, setId] = useState(1)
    const list = supabase.channel('public:messages:chat_id=eq.' + id)
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: 'chat_id=eq.' + id + '' }, (payload) => Test(payload))
        .subscribe();

    function Test(payload) {
        setNewMsgs([{ ...payload.new }, ...newMsgs])
        console.log(newMsgs)
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
        console.log(error)

    }

    async function getMsgs(id) {
        setMsgs([])
        const { data, error } = await supabase.from('messages').select().eq('chat_id', id).order('time', { ascending: false })
        setMsgs(data)
        setId(id)
    }

    async function getMsgsWithUid(uid) {
        setMsgs([])
        const { data, error } = await supabase
            .from('chats_with_profiles')
            .select().filter("user1", "in", '(' + AuthCtx.session.user.id + ',' + uid + ')').filter("user2", "in", '(' + AuthCtx.session.user.id + ',' + uid + ')')

        if (data[0]) {
            getMsgs(data[0].id)
        } else {
            let updates = {
                user1: uid,
                user2: AuthCtx.session.user.id
            }
            const { data, error } = await supabase.from('chats').insert(updates)
            console.log(error)

        }



    }







    return <MsgContext.Provider value={{ id, getMsgsWithUid, setNewMsgs, newMsgs, sendMsg, getChats, chats, getMsgs, msgs }}>{children}</MsgContext.Provider>
}