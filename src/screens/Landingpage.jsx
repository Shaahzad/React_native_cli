import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"



const SCREEN_HEIGHT = Dimensions.get("screen").height;

const Landingpage = () => {
  return (
    <View style={styles.container}>
      {/* Header   */}
        <View style={styles.header}>
         <Ionicons name="menu" size={24} color="black" />
         <Text style={styles.headertxt}>BYKEA</Text>
         <MaterialIcons name="add-call" size={24} color="black" />
        </View>

     {/* banner image view */}
      <View style={styles.bannerimgview}>
       <Image source={require('../assets/banner.png')} style={styles.bannerImg}/>
      </View>
  {/* info view */}
  <View style={styles.infoview}>
  <MaterialIcons name="attach-money" size={24} color="green" />
  <MaterialIcons name="message" size={24} color="green" />
  </View>
   

   {/* Bottom Container */}
   <View style={styles.BottomContainer}>
   <View style={styles.row}>
    <View style={styles.card}></View>
    <View style={styles.card}></View>
   </View>
   <View style={styles.row}>
   <View style={styles.card}></View>
    <View style={styles.card}></View>
   </View>
   <View style={styles.row}>
   <View style={styles.card}></View>
    <View style={styles.card}></View>
   </View>
   </View>
    </View>
  )
}


const Card = ({bgcolor, title, icon}) => {
  return(
    <View>
      <Text style={{textAlign: 'right'}}>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 50,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    headertxt: {
      fontWeight: 'bold',
      letterSpacing: 3,
      fontSize: 21,
      paddingHorizontal: 16      
    },
    bannerimgview:{
      height: SCREEN_HEIGHT / 3.7,
      backgroundColor: "#DEE3E8",
      paddingHorizontal: 30,
      paddingTop: 10
    },
    bannerImg:{
      height: "84%",
      borderRadius: 12
    },
    infoview:{
      height: 40,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 12,
      marginTop: -15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.00,
      elevation: 1,
      marginHorizontal: 20
    },
    BottomContainer:{
      flex: 1,
      margin: 20,
      gap: 15
    },
    row: {
      flex:1,
      flexDirection: 'row',
      gap: 15
    },
    card: {
      flex: 1,
      borderWidth:1,
      borderColor: 'blue',
      borderRadius: 15
    }
})

export default Landingpage