import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import globalStyles from '../../GlobalStyles';
const UserDetailScreen = () => {
    let AuthCtx = useContext(AuthContext)
    return (<View>
        <TouchableOpacity style={styles.btn} onPress={() => AuthCtx.signOut()}>
            <Text >Sign Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => AuthCtx.signOut()}>
            <Text >Delete account</Text>
        </TouchableOpacity>
        <Text>User details</Text>
        <Text>E-mail: </Text>
        <Text>Username:{AuthCtx.profile.username} </Text>
    </View>)
}
const styles = StyleSheet.create({
    btn: {
        fontSize: 20,
        margin: 10,
        padding: 10,
        backgroundColor: globalStyles.profileButton,
        borderRadius: 8,
        overflow: 'hidden',
        borderStyle: 'solid'
    }
})
export default UserDetailScreen;