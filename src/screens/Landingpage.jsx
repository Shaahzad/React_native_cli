import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Landingpage = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
         <Text>ByKea</Text>
        </View>
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
    }
})

export default Landingpage