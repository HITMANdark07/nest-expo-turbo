import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import Constants from 'expo-constants';
import TodoList from '../components/TodoList';

export default function Home() {
  const router = useRouter();

  // Get environment variables from Expo's extra field
  const apiUrl = Constants.expoConfig?.extra?.apiUrl || 'http://localhost:3000';
  const appName = Constants.expoConfig?.extra?.appName || 'Mobile App';
  const nodeEnv = Constants.expoConfig?.extra?.nodeEnv || 'development';
  const debug = Constants.expoConfig?.extra?.debug || false;

  return (
    <View className='flex-1 bg-gray-100'>
      <View className='bg-blue-500 py-4 px-5 mb-2 mt-20'>
        <Text className='text-white font-bold text-xl text-center'>
          {appName}
        </Text>
        <Text className='text-white text-sm text-center mt-1'>
          Environment: {nodeEnv}
        </Text>
      </View>

      <View className='bg-white mx-2 p-4 rounded-lg mb-4'>
        <Text className='text-gray-800 text-sm font-semibold mb-2'>
          Configuration
        </Text>
        <Text className='text-gray-600 text-xs'>API URL: {apiUrl}</Text>
        <Text className='text-gray-600 text-xs'>
          Debug: {debug ? 'Enabled' : 'Disabled'}
        </Text>
      </View>

      <TodoList />
      <StatusBar style='auto' />
    </View>
  );
}
