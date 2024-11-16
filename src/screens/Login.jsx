import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
    <View style={{paddingHorizontal:40, paddingVertical:30}}>
      <Text style={{fontSize:30, color:'#00ff99', fontWeight:'bold'}}>WhatsApp</Text>
      </View>
      <View style={{flex:1, justifyContent:'center', paddingHorizontal: 20, gap:40, marginTop:20}}>
        <TextInput placeholder='Phone number or email' style={{borderWidth:1, borderColor:'gray', borderRadius:10, paddingHorizontal:10}}/>
        <TextInput placeholder='Phone number or email' style={{borderWidth:1, borderColor:'gray', borderRadius:10, paddingHorizontal:10}}/>
        <TextInput placeholder='Phone number or email' keyboardType='number-pad' style={{borderWidth:1, borderColor:'gray', borderRadius:10, paddingHorizontal:10}}/>
        <TextInput placeholder='Phone number or email' keyboardType='email-address' style={{borderWidth:1, borderColor:'gray', borderRadius:10, paddingHorizontal:10}}/>
        <TextInput placeholder='Password' secureTextEntry={true} style={{borderWidth:1, borderColor:'gray', borderRadius:10, paddingHorizontal:10}}/>
        <TouchableOpacity style={{backgroundColor:'#00ff99', padding:12, borderRadius:10}}>
        <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{paddingHorizontal:25, paddingVertical:20}}>
        <Text style={{fontSize:15, color:'gray'}}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Login