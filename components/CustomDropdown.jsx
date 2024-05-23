import RNPickerSelect from "react-native-picker-select";

import { StyleSheet } from "react-native";

const CustomDropdown = ({ items, handleChangeFn }) => {
  return (
    <RNPickerSelect
      onValueChange={(value) => handleChangeFn(value)}
      // onValueChange={(value) => console.log(value)}
      placeholder={{ label: "Select", value: "select" }}
      items={items}
      style={{
        display: "none",
      }}
    />
  );
};

export default CustomDropdown;

const pickerSelectStyles = StyleSheet.create({
  borderColor: "#000000",
  borderWidth: 1,
  borderColor: "gray",
  // inputIOS: {
  //   fontSize: 16,
  //   paddingVertical: 12,
  //   paddingHorizontal: 10,
  //   borderWidth: 1,
  //   borderColor: "gray",
  //   borderRadius: 4,
  //   color: "black",
  //   paddingRight: 30, // to ensure the text is never behind the icon
  // },
  inputAndroid: {
    fontSize: 32,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
