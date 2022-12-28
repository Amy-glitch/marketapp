import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import globalStyles from '../GlobalStyles';

const SignIn = (props) => {
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
            <TouchableOpacity onPress={() => props.AuthCtx.signInWithEmail(email, pwd)} style={styles.btn}>
                <Text >Sign In</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.right}>
            <Text onPress={() => props.setScreen2(true)} >Create new account</Text>
        </TouchableOpacity>
    </View>)
}
const styles = StyleSheet.create({
    right: { alignItems: 'flex-end', margin: 10 },
    cent: { alignItems: 'center' },
    btn: {
        marginTop: 20,
        padding: 5,
        backgroundColor: globalStyles.signInBtn,
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
export default SignIn;