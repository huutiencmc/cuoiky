import { router } from 'expo-router';
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const BestSeller = () => {
  const data = [
    {
      id: 1,
      image: require('../assets/images/sushi.png'),
      title: 'Sushi',
      price: '$103.0',
    },
    {
      id: 2,
      image: require('../assets/images/sushi.png'),
      title: 'Sushi',
      price: '$103.0',
    },
    {
      id: 3,
      image: require('../assets/images/sushi.png'),
      title: 'Sushi',
      price: '$103.0',
    },
    {
      id: 4,
      image: require('../assets/images/sushi.png'),
      title: 'Sushi',
      price: '$103.0',
    },
    {
        id: 5,
        image: require('../assets/images/sushi.png'),
        title: 'Sushi',
        price: '$103.0',
      },
      {
        id: 6,
        image: require('../assets/images/sushi.png'),
        title: 'Sushi',
        price: '$103.0',
      },
    // ... các sản phẩm khác
  ];

  return (
    <View style={{marginTop: 20}}>
      <View style={{display: 'flex',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10}}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff' }}>Best Seller</Text>
      <Text style={{ fontSize:20,fontWeight: 'bold', color: '#fff'}}>View All</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push('/detailFood')}>
          <View style={{ position: 'relative', padding: 10 }} >
            <Image source={item.image} style={{  }} />
            <View style={{position: 'absolute', bottom: 30, right: 0, backgroundColor: '#E95322', paddingHorizontal:5 ,borderRadius:5}}>
              <Text style={{color: '#fff'}}>{item.price}</Text>
            </View>
          </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id as any}
        horizontal
      />
    </View>
  );
};

export default BestSeller;