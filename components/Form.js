import { View, Text ,Button , StyleSheet,TextInput} from 'react-native'
import React, {useState} from 'react'

const Form = () => {

    const[name,setName]= useState('Taylor')
    const[age,setAge]=useState(42)

    const increment = () =>{
        setAge (a => a+1);
    }

  return (
    <View style = {styles.container}>
        <TextInput
            placeholder={name}
            style={styles.TextInput}
            value={name}
            onChangeText={(value)=>{setName(value)}}/>
            <Text>{'\n\n'}</Text>
            <Button title='INCREMENT AGE'
                onPress={increment} />
            <Text>{'\n\n'}</Text>
        <Text style = {{fontSize:20}}>Hello,{name}. You are {age}</Text>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35,
        justifyContent:'center',    
        alignItems:'center' ,
    },
    TextInput:{
        width:'100%',
        height:40,
        paddingHorizontal:5,
        borderWidth : 0.5,
        marginTop:15,
        fontSize:20
    }
})