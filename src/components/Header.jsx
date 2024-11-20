import { View, Text, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{flex:2, justifyContent:'center', alignItems:'center', gap:20, padding: 20, backgroundColor:'#00ff99'}}>
      <Text style={{fontSize:40, fontWeight:'bold', color:'white'}}>Coffee Shop</Text>
      <View>
        <Image source={{uri:'https://reactnative.dev/img/header_logo.png'}} width={140} height={130}/>
      </View>
    </View>
  )
}

export default Header