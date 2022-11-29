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
      <Tab.Screen name="All" component={AllScreen} />
      <Tab.Screen name="Clothing" component={ClothScreen} /> 
      <Tab.Screen name="Academics" component={AcademicsScreen} /> 
      <Tab.Screen name="Other" component={OtherScreen} /> 
      </Tab.Navigator> )
 
}


export default function App() {
 return <NavigationContainer>
  <Stack.Navigator screenOptions={({navigation})=>({
    headerRight: ()=>{
      console.log(navigation.getState())
      let index=navigation.getState().index;
      if (navigation.getState().routes[index].name=='MatieMarket')
      return <Button title="Profile" onPress={()=> navigation.navigate('Login')}/>
      else return <></>
    }
     
      
  })}>
    <Stack.Screen name = 'MatieMarket' component={Tabnav}/>
    <Stack.Screen name ='Login' component={LoginScreen}/>
  </Stack.Navigator>
 </NavigationContainer>
}

const styles = StyleSheet.create({
body:{marginTop: 20}
});
