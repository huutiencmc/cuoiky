import { router } from 'expo-router';
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const Discount = () => {
  const data = [
    {
      id: 1,
      image: require('../../assets/images/deal.png'),
      price: '$30',
    },
    {
      id: 2,
      image: require('../../assets/images/deal.png'),
      price: '$30',
    },
    {
      id: 3,
      image: require('../../assets/images/deal.png'),
      price: '$30',
    },
    {
      id: 4,
      image: require('../../assets/images/deal.png'),
      price: '$30',
    },
    {
        id: 5,
        image: require('../../assets/images/deal.png'),
        price: '$30',
      },
      {
        id: 6,
        image: require('../../assets/images/deal.png'),
        price: '$30',
      },
    // ... các sản phẩm khác
  ];

  return (
    <View style={{marginTop: 20}}>
      <View style={{display: 'flex',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10}}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Discount for you</Text>
      <Text style={{ fontSize:16,fontWeight: 'bold'}}>See more</Text>
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

export default Discount;