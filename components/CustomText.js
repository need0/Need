import { View, Text } from 'react-native'
import React from 'react'

const Name = ({fName,lName}) =>{
    return (
        <view>
            <text>Your First Name is {fName} ! and Last Name is {lName}</text>
        </view>
    )
}

const CustomText = () => {
  return (
    <View>
        <Name fName="Attawit" lName="Padungkiatwong"/>
        <Name fName="Thanawuth" lName="Bunthai"/>
    </View>
  )
}

export default CustomText