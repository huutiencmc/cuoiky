import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { Icon } from 'react-native-elements'; 

const MENU_ITEMS = [
    {
      id: 1,
      name: 'Cơm gà xới',
      description: 'Gà ta luộc, cơm thơm, rau sống',
      price: 35000,
      image: require('../assets/images/sp1.png'),
      category: 'Com'
    },
    {
        id: 2,
        name: 'Cơm gà xới',
        description: 'Gà ta luộc, cơm thơm, rau sống',
        price: 35000,
        image: require('../assets/images/sp1.png'),
        category: 'Com'
      },
      {
        id: 3,
        name: 'Cơm gà xới',
        description: 'Gà ta luộc, cơm thơm, rau sống',
        price: 35000,
        image: require('../assets/images/sp1.png'),
        category: 'Com'
      },
      {
        id: 4,
        name: 'Cơm gà xới',
        description: 'Gà ta luộc, cơm thơm, rau sống',
        price: 35000,
        image: require('../assets/images/sp1.png'),
        category: 'Com'
      },
      {
        id: 5,
        name: 'Cơm gà xới',
        description: 'Gà ta luộc, cơm thơm, rau sống',
        price: 35000,
        image: require('../assets/images/sp1.png'),
        category: 'Com'
      },
    // ... các món ăn khác
  ];

const MenuItem = ({ item, onAddToCart }:{item: any, onAddToCart: any}) => {
    return (
      <TouchableOpacity onPress={() => onAddToCart(item)}>
        <View style={styles.menuItemList}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.info}>
            <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            </View>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  export const MenuScreen = () => {
    const [cartItems, setCartItems] = useState<any>([]);
  
    const addToCart = (item: any) => {
      setCartItems([...cartItems, item]);
    };
  
    return(
        <FlatList
          data={MENU_ITEMS}
          renderItem={({ item }) => <MenuItem item={item} onAddToCart={addToCart} />}
          keyExtractor={item => item.id}
          style={{
            marginBottom: 70
          }}
        />
  
    );
  };

const ListCategory = () => {
  const menuItems = [
    {
      icon: 'fastfood',
      label: 'Snacks',
    },
    {
      icon: 'restaurant',
      label: 'Meal',
    },
    {
      icon: 'local_dining',
      label: 'Vegan',
    },
    {
      icon: 'cake',
      label: 'Dessert',
    },
    {
      icon: 'local_bar',
      label: 'Drinks',
    },
  ];

  return (
    <>
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={[styles.menuItem, item.icon === 'fastfood' && styles.active]}>
          
          <Icon name={item.icon} size={24} color="white"  />
          {/* <Image source={require('../../assets/images/eye_icon.png')} style={styles.eyeIcon} /> */}
          <Text style={styles.menuItemText}>{item.label}</Text>
          
        </TouchableOpacity>
      ))}
    </View>
    <MenuScreen/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#E95322',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    marginTop:40,
    // paddingBottom:

  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
  },
  active :{
    backgroundColor: '#F5CB58',
    borderTopLeftRadius:20,
    // borderBottomLeftRadius: -100,
    borderTopRightRadius:20,
    position: 'relative',
  },
  beforeEffect :{
    position: "absolute",
    bottom: -13,
    height: 30,
    left: -25,
    width: 25,
    backgroundColor: '#E95322',
    borderBottomRightRadius: 20,
  },
  afterEffect :{
    position: "absolute",
    bottom: 0,
    height: 17,
    right: -19,
    width: 20,
    backgroundColor: '#blue',
    borderBottomLeftRadius: 6,
    shadowRadius: 20
  },
  menuItemText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
    paddingBottom:10
  },
  menuItemList: {
    borderRadius: 10,
    shadowRadius: 5,
    flexDirection: 'column',
    padding: 20,
    marginBottom: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1
   
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#E95322',
    fontWeight: 'bold',
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ListCategory;