import { useState } from "react";

import { TextArea, Box } from "native-base";

const CustomTextArea = ({ handleChangeFn }) => {
  const [textAreaValue, setTextAreaValue] = useState("");
  return (
    <Box alignItems="center" w="100%">
      <TextArea
        fontSize={16}
        borderRadius={8}
        borderColor={"#D0DBEA"}
        placeholderTextColor={"#D0D0D0"}
        h={40}
        placeholder="E.g. I want a cake that is moist and fluffy."
        w="100%"
        totalLines={4}
        onChangeText={(value) => handleChangeFn(value)}
      />
    </Box>
  );
};

export default CustomTextArea;
