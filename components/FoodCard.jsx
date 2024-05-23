import { usePromptContext } from "../context/PromptProvider";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

import { useState } from "react";

const FoodCard = ({ item }) => {
  const [selected, setSelected] = useState(false);
  const { setPrompt } = usePromptContext();

  return (
    <TouchableOpacity
      onPress={() => {
        setSelected(!selected);
        // setPrompt((prev) => {
        //   if (prev.ingredients.includes(item.name)) {
        //     return {
        //       ...prev,
        //       ingredients: prev.ingredients.filter(
        //         (ingredient) => ingredient !== item.name
        //       ),
        //     };
        //   } else {
        //     return {
        //       ...prev,
        //       ingredients: [...prev.ingredients, item.name],
        //     };
        //   }
        // });
        setPrompt((prev) => {
          const itemNameLowercase = item.name.toLowerCase();
          if (prev.ingredients.includes(itemNameLowercase)) {
            return {
              ...prev,
              ingredients: prev.ingredients.filter(
                (ingredient) => ingredient !== itemNameLowercase
              ),
            };
          } else {
            return {
              ...prev,
              ingredients: [...prev.ingredients, itemNameLowercase],
            };
          }
        });
      }}
    >
      <View>
        <View
          className={`border border-outline rounded-[16px] p-4 flex flex-col items-center justify-center mb-[28px] px-[7%] ${
            selected ? "border-primary bg-[#1fcc780c]" : "border-outline"
          }`}
        >
          {/* <Image source={appleImage} className="w-full" resizeMode="contain" /> */}
          <Text className="text-[84px]">{item.icon}</Text>
          <Text className="text-[16px] font-bold text-gray-main tracking-[0.5px] mt-[24px]">
            {item.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;
