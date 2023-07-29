import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import App_btn from './components/App_btn';
import TouchableExample from './components/TouchableExample';

export default function App() {
  return (
    <View style={styles.container}>

      {/* <App_btn/> */}
      <TouchableExample/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex:1,   
     justifyContent:'center',    
     alignItems:'center' ,
     padding:5,
     margin:10
  }
 })