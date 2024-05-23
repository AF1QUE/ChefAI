import { TextArea, Box } from "native-base";

const CustomTextArea = () => {
  return (
    <Box alignItems="center" w="100%">
      <TextArea
        fontSize={16}
        h={40}
        placeholder="E.g. I want a cake that is moist and fluffy."
        w="100%"
        totalLines={4}
      />
    </Box>
  );
};

export default CustomTextArea;
