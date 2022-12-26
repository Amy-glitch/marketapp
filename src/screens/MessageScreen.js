import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { MsgContext } from '../context/MsgContext';



const MessageScreen = ({ route, navigation }) => {

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


            return <Text onPress={() => navigation.navigate('MsgsScreen', { id: item.id, user: other_user, other_id })} > {other_user}</Text>
        }} />
    </View>



}
const styles = StyleSheet.create({

})
export default MessageScreen;