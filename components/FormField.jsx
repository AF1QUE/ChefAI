import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import icons from "../constants/icons";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-4 ${otherStyles}`}>
      <Text className="text-gray-main font-bold text-[17px] tracking-[0.5px]">
        {title}
      </Text>

      <View className="w-full h-16 px-4 bg-black-100 rounded-[8px] border border-outline focus:border-gray-secondary flex flex-row items-center">
        <TextInput
          className="text-gray-main font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          multiline={true}
          numberOfLines={10}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
