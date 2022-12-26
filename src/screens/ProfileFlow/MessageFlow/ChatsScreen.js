import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../../context/AuthContext';
import { MsgContext } from '../../../context/MsgContext';

const ChatScreen = ({ navigation }) => {
    let MsgCtx = useContext(MsgContext)
    let AuthCtx = useContext(AuthContext)
    useEffect(() => {
        MsgCtx.getChats()
    }, [])
    return <View>
        <FlatList data={MsgCtx.chats} renderItem={({ item }) => {
            let other_user;
            let other_id;
            item.user1 == AuthCtx.session.user.id ? other_user = item.username2 : other_user = item.username1
            item.user1 == AuthCtx.session.user.id ? other_id = item.user22 : other_id = item.user1
            return (<TouchableOpacity onPress={() => navigation.navigate('MsgsScreen', { id: item.id, user: other_user, other_id })}><View style={styles.chat}>
                <Text style={styles.contacttext}  > {other_user}</Text>
            </View></TouchableOpacity>)
        }} />
    </View>
}
const styles = StyleSheet.create({
    contacttext: {
        fontWeight: '400',
        fontSize: 20
    },
    chat: {
        marginHorizontal: 8,
        paddingVertical: 15,
        borderStyle: 'solid',
        borderBottomWidth: 1
    }
})
export default ChatScreen;