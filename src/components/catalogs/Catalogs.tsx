import { Box, Container, VStack } from "@chakra-ui/react";
import ClothesPreview from "../common/ClothesPreview";

const Catalogs = () => {
  return (
    <Box mt="73px">
      <VStack>
        <Box>
          <ClothesPreview />
        </Box>
      </VStack>
    </Box>
  );
};

export default Catalogs;
