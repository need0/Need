import { StyleSheet, Text, View ,Button,SafeAreaView,Alert} from 'react-native'
import React from 'react'

const Separtor = () => <View style={styles.separtor}/>

const App_btn = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>
                The title and onPress handler are required. It is recommended to set
                accessibilityLabel to help make your app usable by everyone.
            </Text>
            <Button 
                title='Press Me' 
                onPress={() => alert('Slimple Button pressed')}
            />
        </View>
        <Separtor />
        <View>
            <Text style={styles.title}>
            Adjust the color in a way that looks standard on each platform. On iOS,
            the color prop controls the color of the text. On Android, the color
            adjusts the background color of the button.
            </Text>
            <Button 
                title='Press Me' 
                onPress={() => alert('Slimple Button pressed')}
                color={'#FF66FF'}
            />
        </View>
        <Separtor />
        <View>
            <Text style={styles.title}>
                All interaction for the component are disabled.
            </Text>
            <Button 
                title='Press Me' 
                onPress={() => alert('Slimple Button pressed')}
                color={'#dddddd'}
            />
        </View>
        <Separtor />

        <Text style={styles.title}>The title and onPress handler are required. It is recommended to set
                accessibilityLabel to help make your app usable by everyone.
        </Text>
        <View style={styles.fixToText}>
            <Button
                title='Left Button'
                onPress={() => alert('Left button pressed')}
            />
            <Button
                title='Right Button'
                onPress={() => alert('Right button pressed')}
            />
        </View>
    </SafeAreaView>
  )
}

export default App_btn

const styles = StyleSheet.create({ 
        container:{
           flex:1,   
           justifyContent:'center',    
          marginTop:16,
        },
        title:{
          textAlign:'center',
          marginVertical:8,
        },
        fixToText:{
          flexDirection:'row',
          justifyContent:"space-between",
        },
        separtor:{
          marginVertical:8,
          borderBottomColor:'#737373',
          borderBottomWidth:StyleSheet.hairlineWidth,
        }
})