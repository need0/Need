import { View, Text } from 'react-native'
import React from 'react'



const Counter = () => {
    <view style ={Style.container}>
        <text>{count}</text>
        <button
         title="Click Me"
         onProgress={()=>{setCount(count+1)}}/>
    </view>
  }

export default Counter