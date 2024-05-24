import { View, Text, Image, ScrollView, FlatList } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "../components/CustomButton";

import food from "../assets/images/food.jpg";
import tanha from "../assets/images/tanha.jpg";

import { Divider } from "native-base";

const ingredients = [
  "Chicken breast, 500g",
  "Cashew nuts, 1 cup",
  "Capsicum, 1 Large",
  "Honey, 2 tbsp",
  "Vegetable oil, 2 tbsp",
  "Onion, 1 large",
  "Salt, to taste",
];
const steps = [
  {
    title: "Cook Chicken",
    description:
      "Heat 1 tbsp of oil in a pan over medium heat. Add chicken pieces and cook until browned and fully cooked. Remove and set aside.",
  },
  {
    title: "Roast Cashews",
    description:
      "In the same pan, add cashews and roast until golden brown. Remove and set aside.",
  },
  {
    title: "Sauté Onions",
    description:
      "Add remaining oil to the pan. Sauté chopped onions until golden brown.",
  },
  {
    title: "Combine Ingredients",
    description:
      "Add chicken back to the pan with onions. Add sliced capsicum and cook for 3-4 mins. Stir in honey and salt to taste. Mix well.",
  },
  {
    title: "Finish Dish",
    description:
      "Add roasted cashews, stir to combine. Serve hot with steamed rice or bread.",
  },
];

const Recipe = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets="true"
        contentContainerStyle={{
          padding: 24,
        }}
      >
        <View>
          <Image source={food} className="w-full h-[225px] rounded-[16px]" />

          <View className="flex flex-col gap-3 mt-[32px]">
            <Text className="text-gray-main font-bold text-[17px] tracking-[0.5px]">
              Minimalist Indian Cashew Chicken with Capsicum and Honey
            </Text>
            <Text className="text-gray-secondary font-[15px] mb-2">
              Italian • 30 mins • 4 Servings
            </Text>
            <View className="flex flex-row items-center space-x-2">
              <Image
                source={tanha}
                className="w-[32px] h-[32px] rounded-[16px]"
              />
              <Text className="text-gray-main font-bold text-[15px] tracking-[0.5px]">
                Tanha
              </Text>
            </View>
          </View>

          <Divider my="5" backgroundColor={"#D0DBEA"} />

          <View className="flex flex-col gap-3">
            <Text className="text-gray-main font-bold text-[17px] tracking-[0.5px]">
              Description
            </Text>
            <Text className="text-gray-secondary text-[15px] leading-[25px]">
              A quick and easy Indian dish featuring tender chicken, crunchy
              cashews, and vibrant capsicum glazed with honey. Perfectly
              seasoned with simple spices, this dish pairs well with rice or
              bread.
            </Text>
          </View>

          <Divider my="5" backgroundColor={"#D0DBEA"} />

          <View className="flex flex-col gap-4">
            <Text className="text-gray-main font-bold text-[17px] tracking-[0.5px]">
              Ingredients
            </Text>

            {ingredients.map((item, idx) => (
              <View className="flex flex-row items-center space-x-2" key={idx}>
                <Ionicons name="checkmark-circle" size={24} color="#1FCC79" />
                <Text className="text-[15px] font-normal text-gray-main">
                  {item}
                </Text>
              </View>
            ))}
          </View>

          <Divider my="5" backgroundColor={"#D0DBEA"} />

          <View className="flex flex-col gap-5 w-full">
            <Text className="text-gray-main font-bold text-[17px] tracking-[0.5px]">
              Steps
            </Text>

            {steps.map((step, idx) => (
              <View key={idx} className="flex flex-row space-x-4">
                <View className="bg-[#2E3E5C] w-[24px] h-[24px] flex justify-center items-center rounded-full">
                  <Text className="text-white font-bold text-[12px]">
                    {idx + 1}
                  </Text>
                </View>
                <Text className="text-[#2E3E5C] text-[15px] leading-[25px]">
                  <Text className="font-bold">{step.title}: </Text>
                  {step.description}
                </Text>
              </View>
            ))}
          </View>

          <View className="mt-6">
            <CustomButton
              title={"Download PDF"}
              className="w-full"
              // icon={<Feather name="download" size={20} color="white" />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipe;
