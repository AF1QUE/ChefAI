import { useRecipeContext } from "../context/RecipeProvider";
import { usePromptContext } from "../context/PromptProvider";
import { StatusBar } from "expo-status-bar";
import { Spinner } from "native-base";
import { View, Text, FlatList, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useEffect } from "react";

export default function Loading() {
  const { isLoading } = useRecipeContext();

  useEffect(() => {
    if (!isLoading) {
      router.replace("/recipe");
    }
  }, [isLoading]);

  return (
    <SafeAreaView className="bg-white h-full px-6">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          justifyContent: "center",
        }}
      >
        <View className="flex flex-col justify-center items-center gap-6">
          <Spinner size={36} />
          <Text className="text-gray-main font-bold text-[17px] tracking-[0.5px] mb-[32px]">
            Generating
          </Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#ffffff" style="dark" />
    </SafeAreaView>
  );
}
