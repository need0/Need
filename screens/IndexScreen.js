import { View, Text, Button } from 'react-native'
import React from 'react'

const IndexScreen = ({route,navigation}) => {



  React.useEffect(()=>{
    if(route.params?.post){
    //post update,do something with 'route.params.post'
    //for example, sent the post to the sever
    }
  },[route.params?.post])

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Button
       title='CREATE POST'
       onPress={()=>navigation.navigate('CreatePost')}/>
      <Text>
        Post : {route.params?.post}
      </Text>
    </View>
  )
}

export default IndexScreen