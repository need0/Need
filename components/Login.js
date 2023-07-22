import { StyleSheet, Text, View ,TextInput,Button} from 'react-native'
import React, { useState } from 'react'

const Login = () => {


        const[textInputName, setTextInputName] = useState('');
        const[textInputEmail, setTextInputEmail] = useState('');


    const checkTextInput = () =>{
        if(!textInputName.trim()){
            alert('Please Enter Name');
            return;
        }
        if(!textInputEmail.trim()){
            alert('Please Enter Email');
            return;
        }
    };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.textInputStyle} 
        placeholder='Enter Name' 
        value={textInputName}
        onChangeText={(value)=>{setTextInputName(value)}}/>


      <TextInput 
        style={styles.textInputStyle} 
        placeholder='Enter Email'
        value={textInputEmail}
        keyboardType='email-address'
        onChangeText={(value)=>{setTextInputEmail(value)}}/>
      <Text>{'\n\n'}</Text>

      <Button title='SUBMIT'onPress={checkTextInput}/>

    </View>

    
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35,
        width:'95%',
    },
    textInputStyle:{
        width:'100%',
        height:40,
        paddingHorizontal:5,
        borderWidth:0.5,
        marginTop:15,
    },
});