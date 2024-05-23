import { StatusBar } from "expo-status-bar";

import { View, Text, FlatList, ScrollView, Image } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import FormField from "../../components/FormField";

import CustomDropdown from "../../components/CustomDropdown";
import CustomTextArea from "../../components/CustomTextArea";
import CustomSlider from "../../components/CustomSlider";

export default function stepTwo() {
  return (
    <SafeAreaView className="bg-white h-full px-6">
      <ScrollView automaticallyAdjustContentInsets="true">
        <View className="flex flex-col">
          <View className="flex flex-col items-start justify-start gap-4 w-full mb-6">
            <Text className="text-gray-main font-bold text-[17px] tracking-[0.5px]">
              Type
            </Text>
            <View className="border border-outline flex flex-col w-full rounded-[8px]">
              <CustomDropdown />
            </View>
          </View>

          <View className="flex flex-col items-start justify-start gap-4 w-full mb-6">
            <Text className="text-gray-main font-bold text-[17px] tracking-[0.5px]">
              Cuisine
            </Text>
            <View className="border border-outline flex flex-col w-full rounded-[8px]">
              <CustomDropdown />
            </View>
          </View>

          <View className="w-full">
            {/* <FormField title="Additional description" /> */}
            <Text className="text-gray-main font-bold text-[17px] tracking-[0.5px] mb-4">
              Additional Description
            </Text>
            <CustomTextArea />
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#ffffff" style="dark" />
    </SafeAreaView>
  );
}
