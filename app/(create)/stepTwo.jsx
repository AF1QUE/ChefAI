import { StatusBar } from "expo-status-bar";

import { View, Text, FlatList, ScrollView, Image } from "react-native";
import ingredients from "../../constants/ingredients";

import FormField from "../../components/FormField";

import { SafeAreaView } from "react-native-safe-area-context";

export default function stepTwo() {
  return (
    <SafeAreaView className="bg-white h-full px-6">
      <View>
        <View className="flex flex-col items-start justify-start">
          <Text className="text-gray-main font-bold text-[17px] tracking-[0.5px]">
            Type
          </Text>
          <FormField />
        </View>
      </View>
      <StatusBar backgroundColor="#ffffff" style="dark" />
    </SafeAreaView>
  );
}
