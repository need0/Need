import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Counter from './components/Counter';
import MyInput from './components/MyInput';
import IncrementCounter from './components/IncrementCounter';
import Form from './components/Form';
import Login from './components/Login';
import TouchablePractice from './components/TouchablePractice';
import Example_useEffect from './components/Example_useEffect';
import UseEffectFlatList from './components/UseEffectFlatList';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Counter/> */}
      {/* <MyInput/> */}
      {/* <IncrementCounter/> */}
      {/* <Form/> */}
      {/* <Login/> */}

      {/* <TouchablePractice/> */}
      {/* <Example_useEffect/> */}
      <UseEffectFlatList/>
      
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