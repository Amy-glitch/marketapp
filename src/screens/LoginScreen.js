import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import ProfileScreen from './ProfileScreen';

const LoginScreen = () => {
    const [screen2, setScreen2] = useState(false)
    let AuthCtx = useContext(AuthContext)
    useEffect(() => {
        AuthCtx.getSession();

    }, []);
    const SignIn = () => {
        const [email, setEmail] = useState('karenvergeest@gmail.com');
        const [pwd, setPwd] = useState('Abcdef123!')
        return (<View style={styles.frame}>
            <Text style={styles.head}>Sign In</Text>
            <View style={styles.row}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput style={styles.input} value={email} onChangeText={(str) => setEmail(str)} />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} value={pwd} onChangeText={(str) => setPwd(str)} />
            </View>
            <View style={styles.cent}>
                <TouchableOpacity onPress={() => AuthCtx.signInWithEmail(email, pwd)} style={styles.btn}>
                    <Text >Sign In</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.right}>
                <Text onPress={() => setScreen2(true)} >Create new account</Text>
            </TouchableOpacity>
        </View>)
    }

    const SignUp = () => {
        const [email, setEmail] = useState('karenvergeest@gmail.com');
        const [pwd, setPwd] = useState('Abcdef123!')
        const [username, setUsername] = useState('Karen')
        return (<View style={styles.frame}>
            <Text style={styles.head}>Sign Up</Text>
            <View style={styles.row}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput style={styles.input} value={email} onChangeText={(str) => setEmail(str)} />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Username</Text>
                <TextInput style={styles.input} value={username} onChangeText={(str) => setUsername(str)} />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} value={pwd} onChangeText={(str) => setPwd(str)} />
            </View>
            <View style={styles.cent}>
                <TouchableOpacity onPress={() => AuthCtx.signUpWithEmail(email, pwd, username)} style={styles.btn}>
                    <Text >Sign Up</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.right}>
                <Text onPress={() => setScreen2(false)}>Sign In</Text>
            </TouchableOpacity>
        </View>)
    }


    const AuthFlow = () => {
        return (screen2 ? <SignUp /> : <SignIn />)
    }
    // (AuthCtx.session.data.session

    return (AuthCtx.session ? <ProfileScreen /> : <AuthFlow />)
}
const styles = StyleSheet.create({
    right: { alignItems: 'flex-end', margin: 10 },
    cent: { alignItems: 'center' },
    btn: {
        marginTop: 20,
        padding: 5,
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        overflow: 'hidden',
        borderStyle: 'solid'
    },
    label: {
        margin: 7,
        width: 70
    },
    input: {
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        width: 200
    },
    frame: { margin: 30 },
    row: { flexDirection: 'row' },
    head: { fontSize: 35, marginBottom: 15 }
})

export default LoginScreen;