import { Text, TouchableOpacity } from "react-native";

import { Spinner } from "native-base";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  icon,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`w-full bg-primary rounded-[32px] min-h-[62px] flex flex-row justify-center items-center space-x-2 ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      {!isLoading && (icon ? icon : null)}

      {/* {icon ? icon : null} */}

      {!isLoading && (
        <Text className={`text-white font-semibold text-[15px] ${textStyles}`}>
          {title}
        </Text>
      )}

      {isLoading && <Spinner size={24} color="#ffffff" />}
    </TouchableOpacity>
  );
};

export default CustomButton;
