import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native';
import { TextInput } from 'react-native';

const MyInput = () => {

    const [text, setText] = useState('');

    return (
        <view style = {styles.container}>
            <TextInput
                placeholder='Enter Your Text !!!'
                style={styles.textInputStyle}
                value={text}
                onChangeText={(value)=>{setText(value)}}
            />
            <Text>{'\n\n'}Your typed: {text}</Text>
            <Text>{'\n\n'}</Text>
            <Button
            title='Reset'
            onPress={()=>setText('Hell O !!!')}
            />
        </view>
  )
}

export default MyInput

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35
    },
    textInputStyle:{
        width:'100%',
        height:40,
        paddingHorizontal:5,
        borderWidth : 0.5,
        marginTop:15,
    }
})