import { StyleSheet, Text, View, TextInput, Platform, Image, ScrollView } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'; 
import { SafeAreaView } from "react-native";
import GlobalStyle from "@/utils/GlobalStyles"
import Search from '@/components/Search';
import ListCategory from '@/components/ListCategory';
import BestSeller from '@/components/BestSeller';
import SpecialOffer from '@/components/SpecialOffer';
import Restaurant from '@/components/Restaurant';

const HomeFood = () => {
  return (
    <SafeAreaView style={GlobalStyle.droidSafeArea}>
    
     
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
        <Text style={styles.title}>Good Morning</Text>
        <Text style={styles.subtitle}>Rise And Shine! It's Breakfast Time</Text>
        </View>
        <View style={styles.iconsContainer}>
          <Icon name="bell" type="font-awesome" size={20} color="#e95322" backgroundColor={'#fff'} style={{ borderRadius: 5, padding:5}} />
          <Icon name="shopping-cart" type="font-awesome" size={20} color="#e95322" backgroundColor={'#fff'} style={{ borderRadius: 5, padding:5}} />
          <Icon name="user" type="font-awesome" size={20} color="#e95322" backgroundColor={'#fff'} style={{ borderRadius: 5, padding:5}} />
        </View>
      </View>
      
        <View style={{display: 'flex',flexDirection: 'row', alignItems: 'center' , justifyContent: 'space-around'}}>
        <Search onSearch={()=>{}}/>
        <View style={styles.menuButton}>
        <Icon name="bars" type="font-awesome" size={28} color="white" />
        </View>
        </View>
        <ScrollView style={{marginBottom: 30}}>
        <ListCategory/>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent:'center', width: '100%'}}>
            <View style={{width: '40%', backgroundColor: '#E95322', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, paddingTop:30, paddingBottom:30, paddingHorizontal:20}}>
              <Text style={{color: '#fff'}}>Experience our delicious new dish</Text>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize : 25}}>30% OFF</Text>
            </View>
            <Image source={require('../../assets/images/pizza.png')} style={styles.viewImage}/>
        </View>

        <BestSeller/>
        <SpecialOffer/>
        <Restaurant/>
        </ScrollView>
    </View>
    </SafeAreaView>
  )
}

export default HomeFood

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 60
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between', // Align items to the start and end
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    title: {
      fontSize: 24,
      color: '#fff',
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 16,
      color: '#E95322',
    },
    iconsContainer: {
      flexDirection: 'row',
      gap: 5
    },
    menuButton: {
      padding: 10
    },
    viewImage:{
      // resizeMode: 'contain',
      // width:200,
      height:127,
      borderRadius: 0,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    }
  });