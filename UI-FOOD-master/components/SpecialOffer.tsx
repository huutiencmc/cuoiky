import React from 'react';
import { View, Text, FlatList, Image, Button } from 'react-native';

const SpecialOffer = () => {
  const data = [
    {
      id: 1,
      image: require('../assets/images/burger.png'),
      title: 'Burger King',
      color: '#FF6B57',
      price: '$103.0',
    },
    {
      id: 2,
      image: require('../assets/images/burger.png'),
      title: 'Burger King',
      color: '#FF6B57',
      price: '$103.0',
    },
    {
      id: 3,
      image: require('../assets/images/burger.png'),
      title: 'Burger King',
      color: '#FF6B57',
      price: '$103.0',
    },
    {
      id: 4,
      image: require('../assets/images/burger.png'),
      title: 'Burger King',
      color: '#FF6B57',
      price: '$103.0',
    }
    // ... các sản phẩm khác
  ];

  return (
    <View style={{marginTop: 20}}>
      <View style={{display: 'flex',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, marginBottom: 10}}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff' }}>Special Offer</Text>
      <Text style={{ fontSize:20,fontWeight: 'bold', color: '#fff'}}>View All</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: 20,paddingVertical: 10, display: 'flex', flexDirection: 'row', alignItems :'center', justifyContent: 'space-between', backgroundColor: item.color, borderRadius: 20, marginHorizontal: 5}}>
            <Image source={item.image} style={{  }} />
            <View style={{}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>{item.title}</Text>
              <Text style={{color: '#fff'}}>Free delivery</Text>
              <View style={{display: 'flex', flexDirection: 'row',alignItems: 'center', margin:5 , gap: 5}}>
                <View style={{}}>
                    <Text style={{fontWeight: 'bold', color: '#fff', backgroundColor: '#E54630',padding: 5, borderRadius: 10 }}>Buy Now</Text>
                </View>
              <Text style={{color: '#fff'}}>{item.price}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id as any}
        horizontal
      />
    </View>
  );
};

export default SpecialOffer;