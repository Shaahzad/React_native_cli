import { View, StatusBar } from 'react-native'
import React from 'react'
import Login from './src/screens/Login'
import Header from './src/components/Header'

const App = () => {
  return (
    <View style={{flex:1}}>
    <StatusBar backgroundColor={'#00ff99'}/>
    <Login/>
    <Header/>
    </View>
  )
}

export default App