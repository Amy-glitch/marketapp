import { StyleSheet, Text, Dimensions, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
import ClothScreen from './src/screens/ClothScreen';
import AcademicsScreen from './src/screens/AcademicsScreen';
import OtherScreen from './src/screens/OtherScreen';
import AllScreen from './src/screens/AllScreen';
import ItemContextProvider from './src/context/ItemContext'
import AuthContext from './src/context/AuthContext';
import ItemScreen from './src/screens/ItemScreen';
import MyShopScreen from './src/screens/MyShopScreen';
import { ItemContext } from './src/context/ItemContext';
import { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, CommonActions } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Tabnav() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,

    }}>
      <Tab.Screen name="Home" component={AllScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={24} color="grey" />
        ),

      }} />
      <Tab.Screen name="Fashion" component={ClothScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="shirt" size={24} color="grey" />
        )
      }} />
      <Tab.Screen name="My Shop" component={MyShopScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="md-add-circle-sharp" size={36} color="black" />
        )
      }} />
      <Tab.Screen name="Academics" component={AcademicsScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="book" size={24} color="grey" />
        )
      }} />
      <Tab.Screen name="Other" component={OtherScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="basket-sharp" size={24} color="grey" />
        )
      }} />
    </Tab.Navigator>)
}

function StackVsTabNav() {
  const navigation = useNavigation();
  const ItemCtx = useContext(ItemContext)

  return <Stack.Navigator
    screenOptions={{
      title: "MatieMarket",
      headerTitleStyle: {
        color: 'green',

      },
      headerStyle: {

      },


      headerRight: () => (
        //<AntDesign onPress={() => ItemCtx.setSearchbar(!ItemCtx.searchbar)} name="search1" size={24} color="black" />

        <View style={styles.hr}>
          <Ionicons onPress={() => { navigation.dispatch(CommonActions.navigate('LoginFlow')); }} style={styles.profile} name="person" size={24} color="black" />
          <Ionicons onPress={() => ItemCtx.setSearchbar(!ItemCtx.searchbar)} name="search" size={24} color="black" />
        </View>
      )
    }}>
    <Stack.Screen options={{
      headerTitle: () => <Text style={styles.title}>MatieMarket</Text>,
    }} name="TabNav" component={Tabnav} />
    <Stack.Screen options={{ title: "" }} name="ItemNav" component={ItemScreen} />
    <Stack.Screen options={{ title: "" }} name="LoginFlow" component={LoginScreen} />

  </Stack.Navigator>
}

export default function App() {
  return <AuthContext>
    <ItemContextProvider>
      <NavigationContainer>
        <StackVsTabNav />
      </NavigationContainer>
    </ItemContextProvider>
  </AuthContext>
}

const styles = StyleSheet.create({
  profile: { marginRight: 4 },
  hr: { flexDirection: 'row' },
  body: { marginTop: 1 },
  title: {

    fontWeight: 'bold',
    fontSize: 20,
    width: Dimensions.get('window').width
  }
});
