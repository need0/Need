import { View, Text } from 'react-native'
import React from 'react'

const Greeting = (props) =>{
    return(
        <view>
            <text>Hello {props.name}</text>
        </view>
    )
}

const LostOfGreeting = () => {
  return (
    <View style={{alignItems:'center',top:50}}>
      <Greeting name="Marry Christmas"/>
      <Greeting name="Happy New Year"/>
      <Greeting name="(っ´ Ι `)っ"/>
    </View>
  )
}

export default LostOfGreeting