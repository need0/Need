import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const SecondPage = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Text>This is Second Page of the app</Text>
    <Text>{'\n'}</Text>
      
      <Button
          title='GO TO BACK'
          onPress={()=>navigation.goBack()}/>
      <Button
          title='GO TO SECONDPAGE ... AGAIN'
          onPress={() => navigation.push('Second')}/>
      <Button
          title='GO TO FIRST PAGE'
          onPress={()=>navigation.navigate('First')}/>
      <Button
          title='GO TO THIRD PAGE'
          onPress={()=>navigation.navigate('Third')}/>

    </View>
  )
}

export default SecondPage

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