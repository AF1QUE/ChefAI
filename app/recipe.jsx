import { View, Text, Image, ScrollView, FlatList } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "../components/CustomButton";

import food from "../assets/images/food.jpg";
import tanha from "../assets/images/tanha.jpg";

import { Divider } from "native-base";

const ingredients = ["Pepper", "Salt", "Water"];
const steps = [
  {
    title: "Step 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus incidunt sit asperiores vel dolor eius obcaecati",
  },
  {
    title: "Step 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus incidunt sit asperiores vel dolor eius obcaecati",
  },
  {
    title: "Step 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus incidunt sit asperiores vel dolor eius obcaecati",
  },
];

const Recipe = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        automaticallyAdjustContentInsets="true"
        contentContainerStyle={{
          padding: 24,
        }}
      >
        <View>
          <Image source={food} className="w-full h-[225px] rounded-[16px]" />

          <View className="flex flex-col gap-3 mt-[32px]">
            <Text className="text-gray-main font-bold text-[17px] tracking-[0.5px]">
              Cacao Maca Walnut Milk
            </Text>
            <Text className="text-gray-secondary font-[15px] mb-2">
              Food • 60 mins
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
              Your recipe has been uploaded, you can see it on your profile.
              Your recipe has been uploaded, you can see it on your
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

          <View className="flex flex-col gap-4">
            <Text className="text-gray-main font-bold text-[17px] tracking-[0.5px]">
              Steps
            </Text>

            {steps.map((step, idx) => (
              <View
                key={idx}
                className="flex flex-row space-x-4 justify-start items-start"
              >
                <View className="bg-[#2E3E5C] w-[24px] h-[24px] flex justify-center items-center rounded-full">
                  <Text className="text-white font-bold text-[12px]">
                    {idx + 1}
                  </Text>
                </View>
                <Text className="text-[#2E3E5C] text-[15px] leading-[25px]">
                  {step.description}
                </Text>
              </View>
            ))}
          </View>

          <View className="mt-6">
            <CustomButton title={"Save recipe"} className="w-full" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipe;
