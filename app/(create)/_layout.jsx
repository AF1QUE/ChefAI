import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { Redirect, Stack } from "expo-router";
import React from "react";
import CustomButton from "../../components/CustomButton";

import { router } from "expo-router";

const CreateLayout = () => {
  return (
    <>
      <SafeAreaView>
        
        
        <View className="bg-white p-6 flex flex-row justify-between items-center">
          <Text
            className="text-secondary text-[17px] font-bold tracking-[0.5px]"
            handlePress={() => router.replace("/home")}
          >
            Cancel
          </Text>
          <Text className="text-gray-main text-[17px] font-bold tracking-[0.5px]">
            1/<Text className="text-gray-secondary">2</Text>
          </Text>
        </View>
      </SafeAreaView>
      <Stack>
        <Stack.Screen name="stepOne" options={{ headerShown: false }} />
        <Stack.Screen name="stepTwo" options={{ headerShown: false }} />
      </Stack>

      <View className="px-6 py-5 bg-white">
        <CustomButton
          title="Next"
          handlePress={() => router.replace("/stepTwo")}
        ></CustomButton>
      </View>
    </>
  );
};

export default CreateLayout;
