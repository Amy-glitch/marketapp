import { StyleSheet, Text, Dimensions, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/ProfileFlow/LoginScreen';
import ClothScreen from './src/screens/MarketScreens/ClothScreen';
import AcademicsScreen from './src/screens/MarketScreens/AcademicsScreen';
import OtherScreen from './src/screens/MarketScreens/OtherScreen';
import AllScreen from './src/screens/MarketScreens/AllScreen';
import ItemContextProvider from './src/context/ItemContext'
import AuthContext from './src/context/AuthContext';
import ItemScreen from './src/screens/ItemScreen';
import MsgContextProvider from './src/context/MsgContext';
import MyShopScreen from './src/screens/ProfileFlow/MyShopScreen';
import { ItemContext } from './src/context/ItemContext';
import { useContext, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, CommonActions } from '@react-navigation/native';
import MessagesScreen from './src/screens/ProfileFlow/MessageFlow/MessagesScreen';
import SearchBar from './src/components/SearchBar';
import globalStyles from './src/GlobalStyles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Tabnav() {

  return (
    <Tab.Navigator screenOptions={{
      tabBarInactiveTintColor: globalStyles.bottomTabNotFocused,
      tabBarActiveTintColor: globalStyles.bottomTabFocused,
      headerShown: false,
      tabBarStyle: {
        backgroundColor: globalStyles.bottomBarColor
      }
    }}  >
      <Tab.Screen name="Home" component={AllScreen} options={{
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name="home" size={24} color={focused ? globalStyles.bottomTabFocused : globalStyles.bottomTabNotFocused} />
        ),
      }} />
      <Tab.Screen name="Fashion" component={ClothScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons name="shirt" size={24} color={focused ? globalStyles.bottomTabFocused : globalStyles.bottomTabNotFocused} />
        )
      }} />
      <Tab.Screen name="My Shop" component={MyShopScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons name="md-add-circle-sharp" size={36} color={focused ? globalStyles.bottomTabFocused : globalStyles.bottomTabNotFocused} />
        )
      }} />
      <Tab.Screen name="Academics" component={AcademicsScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons name="book" size={24} color={focused ? globalStyles.bottomTabFocused : globalStyles.bottomTabNotFocused} />
        )
      }} />
      <Tab.Screen name="Other" component={OtherScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons name="basket-sharp" size={24} color={focused ? globalStyles.bottomTabFocused : globalStyles.bottomTabNotFocused} />
        )
      }} />
    </Tab.Navigator>)
}


export default function App() {


  function StackVsTabNav(props) {
    const navigation = useNavigation();

    return <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <View style={styles.hr}>
            <Ionicons color={globalStyles.profileColor} onPress={() => { navigation.dispatch(CommonActions.navigate('LoginFlow')); }} style={styles.profile} name="person" size={24} />

          </View>
        )
      }}>
      <Stack.Screen options={{
        headerTitle: () => <SearchBar />,
      }} name="TabNav" component={Tabnav} />
      <Stack.Screen options={{ title: "", headerRight: () => <></> }} name="ItemNav" component={ItemScreen} />
      <Stack.Screen options={{ title: "", headerRight: () => <></> }} name="LoginFlow" component={LoginScreen} />
      <Stack.Screen options={{ title: "", headerRight: () => <></> }} name="MsgsScreen" component={MessagesScreen} />
    </Stack.Navigator>
  }




  return <AuthContext>
    <ItemContextProvider>
      <MsgContextProvider>
        <NavigationContainer>
          <StackVsTabNav />
        </NavigationContainer>
      </MsgContextProvider>
    </ItemContextProvider>
  </AuthContext>

}

const styles = StyleSheet.create({
  profile: {
    marginRight: 4,

  },
  hr: {
    flexDirection: 'row',

  },
  body: { marginTop: 1 },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    width: Dimensions.get('window').width
  }
});
