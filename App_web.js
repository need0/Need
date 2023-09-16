import 'react-native-gesture-handler';
import { View, Text, style, Linking } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,DrawerItem} from '@react-navigation/drawer';

import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';

const Stack = createNativeStackNavigator();

function First(){
    return(

        <Stack.Navigator 
        initialRouteName='First'
        screenOptions={{
          headerStyle:{
            backgroundColor:'#0f8aff85'
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
          }
        }}
        >
            <Stack.Screen name='FirstPage' component={FirstPage}/>
        </Stack.Navigator>

    )
}

function Second(){
    return(

        <Stack.Navigator
        initialRouteName='First'
        screenOptions={{
          headerStyle:{
            backgroundColor:'#0f8aff85'
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
          }
        }}>
            <Stack.Screen name='SecondPage' component={SecondPage}/>
        </Stack.Navigator>

    )
}

function CustomDrawerContent (props){
  return(
      <DrawerContentScrollView {...props}>
          <DrawerItemList {...props}/>
          <DrawerItem
           label="Help"
           onPress={()=>Linking.openURL('https://reactnative.dev')}
           
          />
      </DrawerContentScrollView>

  )
}

const Drawer = createDrawerNavigator();

function MyDrawer(){
    return(
        <Drawer.Navigator
        drawerContent={(props)=><CustomDrawerContent{...props}/>}  
            screenOptions={{
            drawerStyle:{
                backgroundColor: '#eef',
                width:240,
            },overlayColor:'#61bfe875',
            headerTintColor:'#bad6f6',
            headerTitleStyle:{
              fontWeight:'bold',
            },
            headerStyle:{
                backgroundColor:'#555'
            }
            
         }}>
            <Drawer.Screen name='First' component={First}/>
            <Drawer.Screen name='Second' component={Second}/>
        </Drawer.Navigator>
    )
}


const App = () => {
  return (
    <NavigationContainer>
        <MyDrawer/>
    </NavigationContainer>
  )
}

export default App