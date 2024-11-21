import { View, Text, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{flex:2, justifyContent:'center', alignItems:'center', gap:20, padding: 20, backgroundColor:'#00ff99'}}>
      <Text style={{fontSize:40, fontWeight:'bold', color:'black'}}>Coffee Shop</Text>
      <View style={{flex:1, justifyContent:'center', alignItems:'center', gap:20}}>
        <Image source={{uri:'https://reactnative.dev/img/header_logo.png'}} width={150} height={130}/>
        <Text style={{fontSize:14, fontWeight:'bold', width:400, textAlign:'center', color:'black'}}>React-Native Best For Mobile Application Development</Text>
      </View>
    </View>
  )
}

export default Header