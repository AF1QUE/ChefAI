import { usePromptContext } from "../../context/PromptProvider";

import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Redirect, Stack } from "expo-router";
import React from "react";
import CustomButton from "../../components/CustomButton";

import { router } from "expo-router";

const SelectLayout = () => {
  const { getPrompt, countIngredients } = usePromptContext();

  return (
    <>
      <SafeAreaView>
        <View className="bg-white p-6 flex flex-row justify-between items-center">
          <TouchableOpacity onPress={() => router.replace("/")}>
            <Text className="text-secondary text-[17px] font-bold tracking-[0.5px]">
              Cancel
            </Text>
          </TouchableOpacity>
          {getPrompt.ingredients.length >= 1 && (
            <Text className="text-gray-secondary text-[17px] font-medium tracking-[0.5px]">
              Selected: {getPrompt.ingredients.length}
            </Text>
          )}
        </View>
      </SafeAreaView>
      <Stack>
        <Stack.Screen
          name="select-ingredients"
          options={{ headerShown: false }}
        />
      </Stack>

      <View className="px-6 py-5 bg-white">
        <CustomButton
          title="Next"
          handlePress={() => {
            if (getPrompt.ingredients.length <= 0) {
              Alert.alert(
                "No items selected!",
                "Please select at least 2 items to proceed."
              );
            } else if (getPrompt.ingredients.length < 2) {
              Alert.alert(
                "Miniumum of 2 items required!",
                "Please select at least 2 items to proceed."
              );
            } else {
              router.push("generate-recipe");
            }
          }}
        ></CustomButton>
      </View>
    </>
  );
};

export default SelectLayout;
