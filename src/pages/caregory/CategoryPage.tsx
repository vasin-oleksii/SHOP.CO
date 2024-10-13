import { Box, Container, Divider, Flex } from "@chakra-ui/react";

import Filters from "./Filters";
import ViewClothes from "./ViewClothes";
import Header from "../../components/header/Header";
import Foother from "../../components/foother/Foother";

const CategoryPage = () => {
  return (
    <>
      <Header />
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
      <Foother />
    </>
  );
};

export default CategoryPage;
