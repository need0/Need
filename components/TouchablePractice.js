import { StyleSheet, Text, View, Image , Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

const TouchablePractice = () => {
  return (
    <View style={styles.container}>

    <TouchableOpacity style={styles.buttonFacebookStyle}>
        <Image 
            style={styles.buttonImageIconStyle}
            source={require('../assets/facebook.png')}/>
        <View style={styles.buttonIconSeparatorStyle}/>
        <Text style={styles.buttonTextStyle}>Login Using Facebook</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonGPlusStyle}>
        <Image 
            style={styles.buttonImageIconStyle}
            source={require('../assets/google-plus.png')}/>
        <View style={styles.buttonIconSeparatorStyle}/>
        <Text style={styles.buttonTextStyle}>Login Using Google Plus</Text>
    </TouchableOpacity>

    </View>
  )
}

export default TouchablePractice

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
        width: '100%',
    },
    buttonGPlusStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonFacebookStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonImageIconStyle:{
        padding: 10,
        margin: 25,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
    },
    buttonIconSeparatorStyle:{
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
})