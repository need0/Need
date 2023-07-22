import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Button } from 'react-native-web'


const Counter = () => {
    const[count, setCount]= useState(0);

    return(
        <View style={styles.container}>
            <Text>{count}</Text>
            <Button title='Click me'
                    onPress={()=>{setCount(count+1)}}/>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
})