import { usePromptContext } from "../context/PromptProvider";
import { useRecipeContext } from "../context/RecipeProvider";

import { useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, FlatList, ScrollView, Image } from "react-native";

import onboardingImg from "../assets/images/system/onboarding.png";

import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "../components/CustomButton";

export default function Index() {
  const { resetPrompt } = usePromptContext();
  const { resetRecipe } = useRecipeContext();

  useEffect(() => {
    resetPrompt();
    resetRecipe();
  }, []);

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex flex-col justify-center items-center h-full px-4">
          <Image
            source={onboardingImg}
            className="w-full h-[50%] mb-[32px]"
            resizeMode="contain"
          />

          <View className="gap-4">
            <Text className="text-gray-main font-semibold text-[22px] text-center">
              Start cooking with AI
            </Text>

            <Text className="text-gray-secondary font-normal text-[17px] text-center max-w-[60%]">
              Let’s join our community to cook better food with AI
            </Text>
          </View>

          <CustomButton
            title={"Get Started"}
            containerStyles="mt-[72px]"
            handlePress={() => router.push("/select-ingredients")}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" />
    </SafeAreaView>
  );
}
