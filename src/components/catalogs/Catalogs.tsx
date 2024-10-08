import { Box, VStack } from "@chakra-ui/react";
import ClothesPreview from "../common/ClothesPreview";
import { Divider } from "@chakra-ui/react";

const Catalogs = () => {
  return (
    <Box mt="73px">
      <VStack>
        <Box>
          <ClothesPreview
            title="NEW ARRIVALS"
            url="https://api.escuelajs.co/api/v1/products?offset=0&limit="
            uploadMore={4}
          />
        </Box>
        <Divider mt={{ base: "40px", lg: "64px" }} />

        <Box mt={{ base: "40px", lg: "64px" }}>
          <ClothesPreview
            title="top selling"
            url="https://api.escuelajs.co/api/v1/products/?price_min=10&price_max=20"
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default Catalogs;
