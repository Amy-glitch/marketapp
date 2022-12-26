import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { AuthContext } from '../../../context/AuthContext';
import { MsgContext } from '../../../context/MsgContext';
import { useHeaderHeight } from '@react-navigation/elements';
import YourMsg from '../../../components/YourMsg';
import TheirMsg from '../../../components/TheirMsg';
const MessagesScreen = ({ route, navigation }) => {
    let MsgCtx = useContext(MsgContext)
    let AuthCtx = useContext(AuthContext)
    const headerHeight = useHeaderHeight();
    const [msg, setMsg] = useState('')

    useEffect(() => {
        route.params.id ? MsgCtx.getMsgs(route.params.id) : MsgCtx.getMsgsWithUid(route.params.uid)
        MsgCtx.setNewMsgs([])
        navigation.setOptions({
            title: route.params.user
        })
    }, [])

    return (
        <KeyboardAvoidingView keyboardVerticalOffset={headerHeight} style={{ flex: 1, justifyContent: 'flex-end' }} behavior={(Platform.OS === 'ios') ? "padding" : null}>
            <FlatList inverted={true} data={[...MsgCtx.newMsgs, ...MsgCtx.msgs]} renderItem={(chat) => {
                { return chat.item.from == AuthCtx.session.user.id ? <YourMsg msg={chat.item.message} /> : <TheirMsg msg={chat.item.message} /> }
            }}></FlatList>
            <View style={styles.msgbar}>
                <View style={styles.row}>
                    <View style={styles.inp}>
                        <TextInput style={styles.childtext} value={msg} onChangeText={(t) => setMsg(t)}></TextInput>
                    </View>
                    <TouchableOpacity onPress={() => MsgCtx.sendMsg({ to: route.params.other_id ? route.params.other_id : route.params.uid, from: AuthCtx.session.user.id, message: msg, chat_id: route.params.id ? route.params.id : MsgCtx.id })} style={styles.plusbtn}><Text>+</Text></TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>)
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
})
export default MessagesScreen;