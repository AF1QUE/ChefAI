import { StatusBar } from "expo-status-bar";

import { View, Text, FlatList, ScrollView, Image } from "react-native";
import ingredients from "../../constants/ingredients";

import { SafeAreaView } from "react-native-safe-area-context";

import appleImage from "../../assets/ingredients/apple.png";

export default function stepOne() {
  const renderItem = ({ item }) => (
    <View>
      <View className="border border-[#D0DBEA] rounded-[16px] p-4 flex flex-col items-center justify-center mb-[28px] px-[7%]">
        {/* <Image source={appleImage} className="w-full" resizeMode="contain" /> */}
        <Text className="text-[84px]">{item.icon}</Text>
        <Text className="text-[16px] font-bold text-gray-main tracking-[0.5px] mt-[24px]">
          {item.name}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="bg-white h-full px-6">
      <FlatList
        data={ingredients}
        className="mt-[-36px]"
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        ListHeaderComponent={
          <Text className="text-gray-main font-bold text-[17px] tracking-[0.5px] mb-[32px]">
            Select Ingredients
          </Text>
        }
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />

      <StatusBar backgroundColor="#ffffff" style="dark" />
    </SafeAreaView>
  );
}
