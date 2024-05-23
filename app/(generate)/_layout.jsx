import { usePromptContext } from "../../context/PromptProvider";

import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import { Redirect, Stack } from "expo-router";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { router } from "expo-router";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const GenerateLayout = () => {
  const { getPrompt } = usePromptContext();

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
          handlePress={() => console.log(getPrompt)}
          icon={
            <MaterialCommunityIcons
              name="star-four-points"
              size={20}
              color="white"
            />
          }
        ></CustomButton>
      </View>
    </>
  );
};

export default GenerateLayout;
