import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const ProductItem = ({ item }: any) => {
  return (
    <View style={styles.productItem}>
      <Image source={item.imageUrl } style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <View style={styles.deliveryInfo}>
          <Text style={styles.deliveryText}>
            {/* <Image source={require('./assets/truck-icon.png')} style={styles.icon} /> */}
            {item.deliveryTime} mins
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width:290
  },
  productImage: {
    // width: 100,
    // height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // marginRight: 10,
  },
  productInfo: {
    padding: 10,
    width: '100%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  starIcon: {
    width: 15,
    height: 15,
    marginRight: 2,
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryText: {
    fontSize: 14,
    color: 'gray',
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
});

const Restaurant = () => {
  const products = [
    {
      id: 1,
      imageUrl: require('../assets/images/restaurant.png'),
      title: 'Seafood Maki Sushi',
      rating: 4.5,
      deliveryTime: 45,
    },
    {
      id: 2,
      imageUrl: require('../assets/images/restaurant.png'),
      title: 'Seafood Maki Sushi',
      rating: 4.5,
      deliveryTime: 45,
    },
    {
      id: 3,
      imageUrl: require('../assets/images/restaurant.png'),
      title: 'Seafood Maki Sushi',
      rating: 4.5,
      deliveryTime: 45,
    },
  
  ];

  return (
    <View style={{marginTop: 20}}>
      <View style={{display: 'flex',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, marginBottom: 10}}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff' }}>Restaurant</Text>
      <Text style={{ fontSize:20,fontWeight: 'bold', color: '#fff'}}>View All</Text>
      </View>
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item) => item.id as any}
      horizontal
    />
    </View>
  );
};

export default Restaurant;