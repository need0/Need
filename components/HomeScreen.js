import { StyleSheet,View, Text,Button } from 'react-native'
import React from 'react'

const HomeScreen = ({route,navigation}) => {
  const {itemId} = route.params;
  return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Text>Initial param : itemId - {itemId}{'\n'}</Text>
      <Button 
      title='UPDATE PARAM'
      onPress={()=>navigation.setParams({
        itemId: Math.floor(Math.random()*100)
      })}/>

      <Button
       title='Go to Details'
       onPress={()=>navigation.navigate('Details')}/>
    </View>
  )
}

export default HomeScreen