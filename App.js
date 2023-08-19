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
import RandomUsersScreen from './components/RandomUsersScreen';
import FlatList_Example1 from './components/FlatList_Example1';
import FlatList_HeaderFooter from './components/FlatList_HeaderFooter';

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
      {/* <UseEffectFlatList/> */}

      {/* <RandomUsersScreen/> */}
      {/* <FlatList_Example1/> */}
      <FlatList_HeaderFooter/>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex:1,   
  }
 })