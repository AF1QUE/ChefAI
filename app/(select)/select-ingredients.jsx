import { StatusBar } from "expo-status-bar";

import { View, Text, FlatList, ScrollView, Image } from "react-native";
import ingredients from "../../constants/ingredients";

import { SafeAreaView } from "react-native-safe-area-context";

import appleImage from "../../assets/ingredients/apple.png";

import IngredientCard from "../../components/IngredientCard";

export default function stepOne() {
  const renderItem = ({ item }) => <IngredientCard item={item} />;

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
