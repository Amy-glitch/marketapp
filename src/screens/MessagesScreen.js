import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions, Button, TextInput, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { MsgContext } from '../context/MsgContext';
import { useHeaderHeight } from '@react-navigation/elements';
import { supabase } from '../lib/supabase';
const MessagesScreen = ({ route, navigation }) => {


    let MsgCtx = useContext(MsgContext)
    let AuthCtx = useContext(AuthContext)
    let listViewRef;
    const headerHeight = useHeaderHeight();
    const [msg, setMsg] = useState('')

    useEffect(() => {
        MsgCtx.getMsgs(route.params.id)
        MsgCtx.setNewMsgs([])
        let name = route.params.user;
        navigation.setOptions({ title: name })
    }, [])
    const YourMsg = (props) => {
        return <View style={styles.yourmsgframe}><View style={styles.yourmsg}><Text>{props.msg}</Text></View></View>
    }
    const TheirMsg = (props) => {
        return (<View style={styles.theirmsgframe}>
            <View style={styles.theirmsg}>
                <Text>{props.msg}</Text>
            </View></View >)
    }
    return <KeyboardAvoidingView keyboardVerticalOffset={headerHeight} style={{ flex: 1, justifyContent: 'flex-end' }} behavior="padding">
        <FlatList inverted={true} keyExtractor={() => Math.random()} data={[...MsgCtx.newMsgs, ...MsgCtx.msgs]} renderItem={(chat) => {
            if (chat.item.from == AuthCtx.session.user.id) {
                return <YourMsg msg={chat.item.message} />
            } else {
                return <TheirMsg msg={chat.item.message} />

            }
        }}></FlatList>

        <View style={styles.msgbar}>
            <View style={styles.row}>
                <View style={styles.inp}>
                    <TextInput style={styles.childtext} value={msg} onChangeText={(t) => setMsg(t)}></TextInput>
                </View>
                <TouchableOpacity onPress={() => MsgCtx.sendMsg({ to: route.params.other_id, from: AuthCtx.session.user.id, message: msg, chat_id: route.params.id })} style={styles.plusbtn}><Text>+</Text></TouchableOpacity>
            </View>
        </View>

    </KeyboardAvoidingView>
}
const styles = StyleSheet.create({
    inp: {
        flexDirection: 'row',
        flex: 1

    },
    plusbtn: { padding: 15 },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    childtext: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'grey',
        flexDirection: 'row',
        flex: 1,
        borderRadius: 8,
        margin: 3
    },
    msgbar: {
        backgroundColor: 'lightgrey',
    },
    yourmsg: {
        backgroundColor: 'lightblue',
        padding: 8,
        borderRadius: 5,
        margin: 8
    },
    yourmsgframe: {
        alignItems: 'flex-end',
    },
    theirmsgframe: {
        alignItems: 'flex-start',
    },
    theirmsg: {
        backgroundColor: 'lightgrey',
        padding: 8,
        borderRadius: 5,
        margin: 8
    }

})
export default MessagesScreen;