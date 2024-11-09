import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

const NavBar = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.navbar}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={require('../../assets/images/arrow-left.png')}/>
        </TouchableOpacity>
         <View style={styles.flexItem}>
        <Image source={require('../../assets/images/share-2.png')}/>
        <Image source={require('../../assets/images/shopping-cart.png')}/>
        <Image source={require('../../assets/images/heart.png')}/>

        </View>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    navbar: {
        position: 'absolute',
        top: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
        marginTop: 40
    },
    flexItem:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    }
})