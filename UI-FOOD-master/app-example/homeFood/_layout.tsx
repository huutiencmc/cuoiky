import * as React from 'react';
import { Tabs } from 'expo-router';
import { Image } from 'react-native';

import HomeIcon from '../../assets/images/Frame2.png';
import HeartIcon from '../../assets/images/Frame3.png';
import ProfileIcon from '../../assets/images/Frame7.png';
import BellIcon from '../../assets/images/Frame5.png';
import CartIcon from '../../assets/images/Frame8.png';

export default function TabHomeLayout() {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFBF68', // Set the background color
          borderTopWidth: 0, // Remove the top border
            position: 'absolute', // Đặt tab bar ở vị trí tuyệt đối
            bottom: 10, // Đặt tab bar ở dưới cùng
            left: 0,
            right: 0,
            height: 60, // Điều chỉnh chiều cao tab bar
            paddingHorizontal: 10, // Thêm padding ngang để tạo khoảng cách
            paddingVertical:20,
            elevation: 10,
            borderRadius: 50,
            margin:10,
        },
        tabBarActiveTintColor: '#F87146', // Set the active tab color
        tabBarInactiveTintColor: '#fff', // Set the inactive tab color
      }}>
      <Tabs.Screen name="index" 
      options={{
        title: '',
        tabBarIcon: ({ color }) => <Image source={HomeIcon} style={{ tintColor: color }} />,
      }}
      />
      <Tabs.Screen name="Heart" 
      options={{
        title: '',
        tabBarIcon: ({ color }) => <Image source={HeartIcon} style={{ tintColor: color }} />,
      }}/>
      <Tabs.Screen name="Search" 
      options={{
        title: '',
        tabBarIcon: ({ color }) => <Image source={ProfileIcon} style={{ tintColor: color }} />,
      }}/>
      <Tabs.Screen name="Bell" 
      options={{
        title: '',
        tabBarIcon: ({ color }) => <Image source={BellIcon} style={{ tintColor: color }} />,
      }}/>
      <Tabs.Screen name="Cart" 
      options={{
        title: '',
        tabBarIcon: ({ color }) => <Image source={CartIcon} style={{ tintColor: color }} />,
      }}/>
    </Tabs>
  );
}