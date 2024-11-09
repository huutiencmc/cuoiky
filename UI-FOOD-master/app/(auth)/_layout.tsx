import { Stack } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function StackAuthLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="SignIn"
        options={{
          title: 'SignIn',
          headerTintColor: "#f4511e",
        }}
      />
      <Stack.Screen
        name="SignUp"
        options={{
          title: 'SignUp',
          headerTintColor: "#f4511e",
        }}
      />
      <Stack.Screen
        name="VerificationCode"
        options={{
          title: 'OTP',
          headerTintColor: "#f4511e",
        }}
      />
    </Stack>
  );
}
