import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserDetailScreen from './UserDetailScreen';
import MyItemScreen from './MyItemScreen';
import HelpScreen from './HelpScreen';
import ChatScreen from './MessageFlow/ChatsScreen';

const ProfileFlowNav = () => {
    const Tab = createBottomTabNavigator();
    return (<Tab.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Tab.Screen name="MyItems" component={MyItemScreen} />
        <Tab.Screen name="Profile" component={UserDetailScreen} />
        <Tab.Screen name="Messages" component={ChatScreen} />
        <Tab.Screen name="Help" component={HelpScreen} />
    </Tab.Navigator>)
}
export default ProfileFlowNav;