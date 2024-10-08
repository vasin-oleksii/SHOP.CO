import { Box, VStack } from "@chakra-ui/react";
import ClothesPreview from "../common/ClothesPreview";
import { Divider } from "@chakra-ui/react";

const Catalogs = () => {
  return (
    <Box mt="73px">
      <VStack>
        <Box>
          <ClothesPreview title="NEW ARRIVALS" />
        </Box>
        <Divider mt={{ base: "40px", lg: "64px" }} />

        <Box mt={{ base: "40px", lg: "64px" }}>
          <ClothesPreview title="top selling" />
        </Box>
      </VStack>
    </Box>
  );
};

export default Catalogs;
