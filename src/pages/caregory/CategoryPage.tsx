import { Box, Container, Flex } from "@chakra-ui/react";

import FilterSheets from "./filterSheets/FilterSheets";
import ViewClothes from "./ViewClothes";

import CrumbLink from "../../components/common/CrumbLink";
import { useLocation } from "react-router-dom";

const CategoryPage = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Box>
        <Container maxW="container.xl">
          <Box mt={{ base: "20px", sm: "24px" }}>
            <CrumbLink pathname={pathname} />
          </Box>
          <Flex flexDirection="row" w="100%" mt={{ base: "17px", sm: "27px" }}>
            <FilterSheets />
            <ViewClothes />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default CategoryPage;
