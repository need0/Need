import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AntDesign, Ionicons } from '@expo/vector-icons';

function HomeScreen(){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Home</Text>
        </View>
    )
}

function SettingScreen(){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Setting!!!</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator 
            screenOptions={({route})=>({
                tabBarIcon : ({focused,color,size}) =>{
                    let iconName;
                    if(route.name=='Home'){
                        iconName= focused
                        ? 'logo-windows'
                        : 'home'
                    }else if(route.name=='Setting'){
                        iconName= focused
                        ? 'settings'
                        : 'settings-outline'
                    }
                    //You can return any component that you like here
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor : 'tomato',
                tabBarInactiveTintColor : 'gray'
            }
            )}
        >
            <Tab.Screen name = 'Home' component={HomeScreen}/>
            <Tab.Screen name='Setting' component={SettingScreen}/>
        </Tab.Navigator>
    )
}

const App = () => {
  return (
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})