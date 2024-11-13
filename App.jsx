import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Login from './src/screens/Login'

const App = () => {
  return (
    <View style={{flex:1}}>
    <StatusBar backgroundColor={'#00ff99'}/>
    <Login/>
    </View>
  )
}

export default App