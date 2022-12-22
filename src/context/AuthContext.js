import React, { useState } from "react";
import { supabase } from "../lib/supabase";

export const AuthContext = React.createContext(null);
export default ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [session, setSession] = useState(null)

    async function signOut() {
        const { data } = await supabase.auth.signOut()
        getSession()
    }


    async function signInWithEmail(email, password) {
        const { data } = await supabase.auth.getSession()
        console.log(data)
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })


        getSession()
        if (error) console.log(error.message)
        setLoading(false)
    }

    async function getSession() {

        const res = await supabase.auth.getSession()
        setSession(res.data.session)
        // console.log(session)

    }

    async function signUpWithEmail(email, password, username) {
        setLoading(true)
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
            username: "hey",
            options: {
                data: { username: username }
            }

        })

        if (error) console.log(error.message)

        setLoading(false)
    }


    return <AuthContext.Provider value={{ loading, signInWithEmail, signOut, signUpWithEmail, getSession, session }}>{children}</AuthContext.Provider>
}