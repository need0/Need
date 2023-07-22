import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Counter from './components/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      <Counter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex:1,   
     justifyContent:'center',    
     alignItems:'center' 
  }
 })
