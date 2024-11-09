import { StyleSheet, Text, View,SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import GlobalStyle from "@/utils/GlobalStyles"
import NavBar from '@/components/navBar'
import Discount from '@/components/Discount'
import { Icon } from 'react-native-elements'; 
import Search from '@/components/Search';
import YourOffer from '@/components/YourOffer'

const DetailFood = () => {
  return (
    <SafeAreaView style={{position: 'relative'}} >
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Image style={{width: '100%', backgroundColor: '#F5CB58'}} source={require('../../assets/images/bgDetail.png')}/>
                <NavBar/>
            </View>
        </View>
        <ScrollView style={styles.mainBody}>
        <View>
        
        <Text style={styles.textName}>Name Of Restaurant</Text>
        <Discount/>
        <Search onSearch={()=>{}} style={{height: '100%'}}/>
        
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{color: '#FF6B57', fontWeight: 'bold' , fontSize: 22}}>What's delicious around here?</Text>
            <Icon name="arrow-right" type="font-awesome" size={24} color="gray" />
        </View>
        <YourOffer/>
        
    </View>
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent:'center', width: '100%'}}>
        <View style={{width: '40%', backgroundColor: '#E95322', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, paddingTop:30, paddingBottom:30, paddingHorizontal:20}}>
          <Text style={{color: '#fff'}}>Experience our delicious new dish</Text>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize : 25}}>30% OFF</Text>
        </View>
        <Image source={require('../../assets/images/pizza.png')} style={styles.viewImage}/>
    </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default DetailFood

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#F5CB58',
        marginBottom: 60,
      },
      navBar:{
        
      },
      mainBody:{
        flex: 1,
        backgroundColor: '#fff',
        position: 'absolute',
        top: 200,
        width: '100%',
        height: 600,
        padding: 20,
        borderRadius: 40
      },
      textName: {
        fontWeight: 'bold',
        fontSize: 18
      },
      viewImage:{
        // resizeMode: 'contain',
        // width:200,
        height:127,
        borderRadius: 0,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
      }
})