import { Box, Container, VStack } from "@chakra-ui/react";
import ClothesPreview from "../common/ClothesPreview";

const Catalogs = () => {
  return (
    <Box mt="73px">
      <Container maxW="container.xl">
        <VStack>
          <Box>
            <ClothesPreview />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Catalogs;
