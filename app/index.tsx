import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Link, useRouter } from 'expo-router';
const index = () => {
  const router = useRouter();
  return (
    <View>
      <StatusBar style="light" />
      <ImageBackground
        source={require('../assets/images/dog.jpg')}
        className="h-full w-full"
      >
        <TouchableOpacity
          className="flex-1 items-center justify-end mb-20"
          onPress={() => router.push('Home')}
        >
          <Text className="w-4/5 text-center text-7xl font-bold text-white rounded-xl">
            Pixels
          </Text>
          <Text className="text-2xl text-center text-white mt-2">
            The best place to find wallpapers
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default index;
