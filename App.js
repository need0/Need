import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './components/Cat';
import ViewBoxesWithColorAndText from './components/ViewBoxesWithColorAndText';
import DisplayandImage from './components/DisplayandImage';
import LostOfGreeting from './components/LostOfGreeting';
import CustomText from './components/CustomText';
import Counter from './components/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ViewBoxesWithColorAndText/> */}
      {/* <DisplayandImage/> */}
      {/* <LostOfGreeting/> */}
      {/* <CustomText/> */}
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
