import { usePromptContext } from "../../context/PromptProvider";
import { useRecipeContext } from "../../context/RecipeProvider";

import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Redirect, router, Stack } from "expo-router";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const GenerateLayout = () => {
  const { getPrompt } = usePromptContext();
  const { fetchRecipe, isLoading } = useRecipeContext();

  return (
    <>
      <SafeAreaView>
        <View className="bg-white p-6 flex flex-row justify-between items-center">
          <TouchableOpacity onPress={() => router.replace("/")}>
            <Text className="text-secondary text-[17px] font-bold tracking-[0.5px]">
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Stack>
        <Stack.Screen name="generate-recipe" options={{ headerShown: false }} />
      </Stack>

      <View className="px-6 py-5 bg-white">
        <CustomButton
          title="Generate"
          handlePress={() => {
            const { ingredients, type, cuisine, description } = getPrompt;
            if (!ingredients.length || !type || !cuisine || !description) {
              Alert.alert(
                "Incomplete Selection",
                "Please fill out all the fields to proceed."
              );
            } else {
              // fetchRecipe().then(() => router.push("/recipe"));
              fetchRecipe();
              router.push("/loading");
            }
          }}
          icon={
            <MaterialCommunityIcons
              name="star-four-points"
              size={20}
              color="white"
            />
          }
          isLoading={isLoading}
        ></CustomButton>
      </View>
    </>
  );
};

export default GenerateLayout;
