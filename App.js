import { Button, StyleSheet, Text, View, } from 'react-native';
import ProfileScreen from './src/screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
import ClothScreen from './src/screens/ClothScreen';
import AcademicsScreen from './src/screens/AcademicsScreen';
import OtherScreen from './src/screens/OtherScreen';
import AllScreen from './src/screens/AllScreen';
import ItemContextProvider from './src/context/ItemContext'
import ItemScreen from './src/screens/ItemScreen';
import MyShopScreen from './src/screens/MyShopScreen';
import MyItemScreen from './src/screens/MyItemScreen'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Tabnav() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name="Home" component={AllScreen} />
      <Tab.Screen name="Fashion" component={ClothScreen} />
      <Tab.Screen name="My Shop" component={MyShopScreen} />
      <Tab.Screen name="Academics" component={AcademicsScreen} />
      <Tab.Screen name="Other" component={OtherScreen} />

    </Tab.Navigator>)

}

function StackVsTabNav() {

  return <Stack.Navigator
    screenOptions={{
      title: "Matie Market"
    }}
  >
    <Stack.Screen name="TabNav" component={Tabnav} />
    <Stack.Screen name="ItemNav" component={ItemScreen} />
    <Stack.Screen name="MyItemNav" component={MyItemScreen} />
  </Stack.Navigator>

}


export default function App() {
  return <ItemContextProvider>
    <NavigationContainer>

      <StackVsTabNav />
    </NavigationContainer>
  </ItemContextProvider>
}

const styles = StyleSheet.create({
  body: { marginTop: 5 }
});
