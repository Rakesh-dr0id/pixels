import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';

export default function Home() {
  return (
    <View className="flex-1 bg-gray-200 p-2">
      {/* Header & hamburger */}
      <View className="flex-row justify-between items-center">
        <Text className="font-bold text-xl">Pixels</Text>
        <Feather name="menu" size={24} color="black" />
      </View>

      {/* Search input */}
      <View className="flex-row items-center justify-between bg-white p-1 rounded-xl my-1">
        <Feather name="search" size={24} color="black" />
        <TextInput className="p-2 flex-1" placeholder="Search for photo " />
        <Entypo name="cross" size={24} color="black" />
      </View>

      {/* Button */}
      <View className="py-2">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Text className="p-2 mr-2 px-3 bg-white rounded-xl">Nature</Text>
          <Text className="p-2 mr-2 px-3 bg-white rounded-xl">Design</Text>
          <Text className="p-2 mr-2 px-3 bg-white rounded-xl">Fields</Text>
          <Text className="p-2 mr-2 px-3 bg-white rounded-xl">People</Text>
          <Text className="p-2 mr-2 px-3 bg-white rounded-xl">Art</Text>
          <Text className="p-2 mr-2 px-3 bg-white rounded-xl">Craft</Text>
          <Text className="p-2 mr-2 px-3 bg-white rounded-xl">Place</Text>
          <Text className="p-2 mr-2 px-3 bg-white rounded-xl">Cosmic</Text>
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="gap-1 pb-10">
          <View className="gap-1 flex-row justify-between items-center">
            <Image
              source={require('../../assets/images/pic.jpg')}
              className="h-60 w-1/2 rounded-xl"
              // resizeMode="contain"
            />
            <Image
              height={70}
              width={45}
              source={require('../../assets/images/dog.jpg')}
              className="h-60 w-1/2 rounded-xl"
              // resizeMode="contain"
            />
          </View>
          <View className="gap-1 flex-row justify-between items-center ">
            <Image
              source={require('../../assets/images/dog.jpg')}
              className="h-60 w-1/2 rounded-xl"
              // resizeMode="contain"
            />
            <Image
              height={70}
              width={45}
              source={require('../../assets/images/pic.jpg')}
              className="h-60 w-1/2 rounded-xl"
              // resizeMode="contain"
            />
          </View>
          <View className="gap-1 flex-row justify-between items-center">
            <Image
              source={require('../../assets/images/pic.jpg')}
              className="h-60 w-1/2 rounded-xl"
              // resizeMode="contain"
            />
            <Image
              height={70}
              width={45}
              source={require('../../assets/images/dog.jpg')}
              className="h-60 w-1/2 rounded-xl"
              // resizeMode="contain"
            />
          </View>
          <View className="gap-1 flex-row justify-between items-center ">
            <Image
              source={require('../../assets/images/dog.jpg')}
              className="h-60 w-1/2 rounded-xl"
              // resizeMode="contain"
            />
            <Image
              height={70}
              width={45}
              source={require('../../assets/images/pic.jpg')}
              className="h-60 w-1/2 rounded-xl"
              // resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
