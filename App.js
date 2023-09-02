import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';

import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import ThirdPage from './Pages/ThirdPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='First'
      screenOptions={{
        headerStyle:{
          backgroundColor:'#0f8aff'
        },
        headerTintColor:'#ffff',
        headerTitleStyle:{
          fontWeight:'bold',
        }
      }}>
        <Stack.Screen 
         name='First' 
         component={FirstPage}
         options={{title:'Overview'}}/>

         <Stack.Screen 
         name='Second' 
         component={SecondPage}/>

         <Stack.Screen
         name='Third'
         component={ThirdPage}/>

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})