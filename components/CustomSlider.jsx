import { Slider, Box, VStack, FormControl } from "native-base";

const CustomSlider = () => {
  return (
    <Box alignItems="center" w="100%">
      <VStack space={4} w="75%" maxW="300">
        <FormControl isInvalid>
          <FormControl.Label>Set your budget</FormControl.Label>
          <Slider defaultValue={50}>
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </FormControl>
      </VStack>
    </Box>
  );
};

export default CustomSlider;
