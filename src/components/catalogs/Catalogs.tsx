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
            url="https://67051c76031fd46a830eaefe.mockapi.io/api/v1/products?page=1&limit="
            uploadMore={4}
          />
        </Box>
        <Divider mt={{ base: "40px", lg: "64px" }} />

        <Box mt={{ base: "40px", lg: "64px" }}>
          <ClothesPreview
            title="top selling"
            url="https://67051c76031fd46a830eaefe.mockapi.io/api/v1/products?page=1&color=red|navy&limit="
            uploadMore={4}
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default Catalogs;
