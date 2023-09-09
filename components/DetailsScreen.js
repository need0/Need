import { Text, View, Button } from 'react-native'
import React from 'react'

const DetailsScreen = ({route,navigation}) => {

  const {itemId, otherParam} = route.params;

    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text>Details Screen</Text>
          <Text>itemId : {JSON.stringify(itemId)}</Text>
          <Text>otherParam : {JSON.stringify(otherParam)}</Text>
          <Text>{'\n'}</Text>
          
          <Button title='Go to Details ... again'
          onPress={() => 
            navigation.push('Details',{
            itemId : Math.floor(Math.random()*100),
            otherParam: 'anyone Helppp!!!'
          })}/>

          <Button
          title='Go to Home'
          onPress={()=>navigation.navigate('Home')}/>

          <Button
          title='Go to Back'
          onPress={()=>navigation.goBack()}/>
        </View>
      )  
}

export default DetailsScreen


