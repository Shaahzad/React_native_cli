import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <ScrollView style={{flex:1}}>
     <Image source={require('../assets/login.png')} style={{width: 400, height: 420, objectFit: 'cover', alignSelf: 'center'}}/>
      <View style={{justifyContent:'center', alignItems:'center', gap:20, backgroundColor:'#00ff99', paddingVertical: 50, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <TextInput placeholder='Email@gmail.com' keyboardType='email-address' style={{borderWidth: 1, width: 300, height: 50, alignSelf: 'center', borderRadius: 10, paddingHorizontal: 10, backgroundColor:'white'}}/>
        <TextInput placeholder='password' secureTextEntry={true} style={{borderWidth: 1, width: 300, height: 50, alignSelf: 'center', borderRadius: 10, paddingHorizontal: 10, backgroundColor:'white'}}/>
        <TouchableOpacity style={{borderWidth: 1, width: 300, height: 50, borderRadius: 10, paddingHorizontal: 10, backgroundColor:'white'}}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'black', textAlign: 'center', alignSelf: 'center', paddingVertical: 10}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 280}}>
        <Text style={{fontSize:14, fontWeight:'bold', color:'black', textAlign: 'left'}}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Login