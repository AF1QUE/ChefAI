import { usePromptContext } from "../../context/PromptProvider";
import { StatusBar } from "expo-status-bar";

import { View, Text, FlatList, ScrollView, Image } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import FormField from "../../components/FormField";

import CustomDropdown from "../../components/CustomDropdown";
import CustomTextArea from "../../components/CustomTextArea";

export default function generateRecipe() {
  const { setPrompt } = usePromptContext();

  return (
    <SafeAreaView className="bg-white h-full px-6">
      <ScrollView automaticallyAdjustContentInsets="true">
        <View className="flex flex-col">
          <View className="flex flex-col items-start justify-start gap-4 w-full mb-6">
            <Text className="text-gray-main font-bold text-[17px] tracking-[0.5px]">
              Type
            </Text>
            <View className="border border-outline flex flex-col w-full rounded-[8px]">
              <CustomDropdown
                items={[
                  { label: "Anything", value: "anything" },
                  { label: "Meal", value: "meal" },
                  { label: "Salad", value: "salad" },
                  { label: "Appetizer", value: "appetizer" },
                  { label: "Beverage", value: "beverage" },
                  { label: "Dessert", value: "dessert" },
                  { label: "Soup", value: "soup" },
                ]}
                handleChangeFn={(value) =>
                  setPrompt((prev) => ({
                    ...prev,
                    type: value === "select" ? "" : value,
                  }))
                }
              />
            </View>
          </View>

          <View className="flex flex-col items-start justify-start gap-4 w-full mb-6">
            <Text className="text-gray-main font-bold text-[17px] tracking-[0.5px]">
              Cuisine
            </Text>
            <View className="border border-outline flex flex-col w-full rounded-[8px]">
              <CustomDropdown
                items={[
                  { label: "Italian", value: "italian" },
                  { label: "Chinese", value: "chinese" },
                  { label: "Mexican", value: "mexican" },
                  { label: "Indian", value: "indian" },
                  { label: "Thai", value: "thai" },
                  { label: "French", value: "french" },
                  { label: "Japanese", value: "japanese" },
                  { label: "American", value: "american" },
                ]}
                handleChangeFn={(value) =>
                  setPrompt((prev) => ({
                    ...prev,
                    cuisine: value === "select" ? "" : value,
                  }))
                }
              />
            </View>
          </View>

          <View className="flex flex-col items-start justify-start gap-4 w-full mb-6">
            <Text className="text-gray-main font-bold text-[17px] tracking-[0.5px]">
              Servings
            </Text>
            <View className="border border-outline flex flex-col w-full rounded-[8px]">
              <CustomDropdown
                items={[
                  { label: "1", value: "1" },
                  { label: "2", value: "2" },
                  { label: "3", value: "3" },
                  { label: "4", value: "4" },
                  { label: "5+", value: "5+" },
                ]}
                handleChangeFn={(value) =>
                  setPrompt((prev) => ({
                    ...prev,
                    servings: value === "select" ? "" : value,
                  }))
                }
              />
            </View>
          </View>

          <View className="w-full">
            {/* <FormField title="Additional description" /> */}
            <Text className="text-gray-main font-bold text-[17px] tracking-[0.5px] mb-4">
              Additional Description
            </Text>
            <CustomTextArea
              handleChangeFn={(value) =>
                setPrompt((prev) => ({
                  ...prev,
                  description: value,
                }))
              }
            />
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#ffffff" style="dark" />
    </SafeAreaView>
  );
}
