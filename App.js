import { Button, StyleSheet, Text, View,  } from 'react-native';
import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
import ClothScreen from './src/screens/ClothScreen';
import AcademicsScreen from './src/screens/AcademicsScreen';
import OtherScreen from './src/screens/OtherScreen';
import AllScreen from './src/screens/AllScreen';
const Stack = createNativeStackNavigator(); 
const Tab = createBottomTabNavigator();


function Tabnav()
{
  return ( 
    <Tab.Navigator> 
      <Tab.Screen name="Home" component={AllScreen} />
      <Tab.Screen name="Fashion" component={ClothScreen} /> 
      <Tab.Screen name="Academics" component={AcademicsScreen} /> 
      <Tab.Screen name="Other" component={OtherScreen} /> 
      <Tab.Screen name="Profile" component={LoginScreen} /> 
      </Tab.Navigator> )
 
}


export default function App() {
 return <NavigationContainer>
  <Tabnav/>
 </NavigationContainer>
}

const styles = StyleSheet.create({
body:{marginTop: 20}
});
