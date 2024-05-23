import { View, Text } from "react-native";

const IngredientCard = ({ item }) => {
  return (
    <View>
      <View className="border border-outline rounded-[16px] p-4 flex flex-col items-center justify-center mb-[28px] px-[7%]">
        {/* <Image source={appleImage} className="w-full" resizeMode="contain" /> */}
        <Text className="text-[84px]">{item.icon}</Text>
        <Text className="text-[16px] font-bold text-gray-main tracking-[0.5px] mt-[24px]">
          {item.name}
        </Text>
      </View>
    </View>
  );
};

export default IngredientCard;
