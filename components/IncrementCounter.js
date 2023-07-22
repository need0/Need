import {StyleSheet, View, Text ,Button} from 'react-native'
import React, {useState} from 'react'

const IncrementCounter = () => {

    const [ age, setAge ] = useState(23);

    const increment = () =>{
        setAge (a => a+1);
    }
    const increment3 = () =>{
        setAge (a => a+3);
    }

  return (
    <View style={styles.container}>
        <Text >
            Your age : {age}
        </Text>

        <Text>{'\n\n'}</Text>
        <Button title='+3'
            onPress={increment3}/>
            
        <Text>{'\n\n'}</Text>
        <Button title='+1'
            onPress={increment}/>
    </View>
  )
}

export default IncrementCounter

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        width:'40%',
        height:70,
        
    }
})