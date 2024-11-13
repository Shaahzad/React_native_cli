import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const App = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#00ff99'}}>
    <StatusBar backgroundColor={'#00ff99'}/>
    <Image source={require('./src/assets/shahzad.jpg')} resizeMode='contain' style={{width:200, height:200}}/>
    </View>
  )
}

export default App