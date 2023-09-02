import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const ThirdPage = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Text>This is Third Page of the app</Text>
    <Text>{'\n'}</Text>
      
      <Button
          title='GO BACK'
          onPress={()=>navigation.goBack()}/>
      <Button
          title='GO TO SECOND PAGE'
          onPress={()=>navigation.navigate('Second')}/>
      <Button
          title='RESET NAVIGATOR TO FIRST PAGE'
          onPress={()=>navigation.navigate('First')}/>

    </View>
  )
}

export default ThirdPage

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    },
    textStyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16
    },
    });