import React, { useState } from "react";
import { supabase } from "../lib/supabase";

export const AuthContext = React.createContext(null);
export default ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [session, setSession] = useState(null)
    const [profile, setProfile] = useState(null)

    async function signOut() {
        const { data } = await supabase.auth.signOut()
        setSession(null)
    }


    async function signInWithEmail(email, password) {
        //  const { data } = await supabase.auth.getSession()
        // console.log(data)

        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })


        getSession()
        setLoading(false)
    }

    async function getSession() {

        const res = await supabase.auth.getSession()

        if (res.data.session.user.id) {
            getProfile(res.data.session.user.id)
            setSession(res.data.session)
        }


    }

    async function getProfile(id) {
        const { data, error } = await supabase
            .from('profiles')
            .select()
            .eq('id', id)
        setProfile(data[0])


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


    return <AuthContext.Provider value={{ getProfile, profile, loading, signInWithEmail, signOut, signUpWithEmail, getSession, session }}>{children}</AuthContext.Provider>
}