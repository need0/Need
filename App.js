import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import IndexScreen from './screens/IndexScreen';
import CreatePostScreen from './screens/CreatePostScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>

      <NavigationContainer>
      <Stack.Navigator 
      mode = 'model'
      screenOptions={{
        headerStyle:{
          backgroundColor:'#7faaff'
        },
        headerTintColor:'#ffff',
        headerTitleStyle:{
          fontWeight:'bold',
        }
      }}>

        <Stack.Screen 
         name='Index' 
         component={IndexScreen}
         options={{title:'MainPage'}}/>

         <Stack.Screen 
         name='CreatePost' 
         component={CreatePostScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex:1,
  }
 })