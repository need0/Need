import { StyleSheet,View, Text,Button } from 'react-native'
import React from 'react'

const HomeScreen = ({route,navigation}) => {

  return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Text>{"\n"}</Text>

      <Button
       title='Go to Details'
       onPress={()=>navigation.navigate('Details',{
        itemId :1088,
        otherParam : 'React Native App'
       })}/>
    </View>
  )
}

export default HomeScreen