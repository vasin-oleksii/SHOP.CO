import { Box, Container, Divider, Flex } from "@chakra-ui/react";

import Filters from "./Filters";
import ViewClothes from "./ViewClothes";

const CategoryPage = () => {
  return (
    <>
      <Box>
        <Container maxW="container.xl">
          <Divider mt={{ base: "20px", xl: "24px" }} />
          <Box mt={{ base: "20px", xl: "24px" }}>крошки</Box>
          <Flex flexDirection="row">
            <Filters />
            <ViewClothes />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default CategoryPage;
