import {
  Flex,
  Heading,
  Text,
  Link,
  VStack,
  Grid,
  GridItem,
  Box,
  Divider,
} from "@chakra-ui/react";

import ButtonRoundProps from "../../components/common/buttons/ButtonRound";

const Filters = () => {
  return (
    <Flex>
      <Flex
        className="Filter"
        p={"20px 24px 66px 24px"}
        w="295px"
        flexDirection="column"
      >
        <Flex align="center" justify="space-between" width="100%">
          <Heading fontSize={{ base: "", lg: "lg" }}>Filters</Heading>
          <Box>Icon</Box>
        </Flex>

        <Divider m="24px 0px" />

        <VStack>
          {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(
            (title, i) => {
              return (
                <Flex justify="space-between" align="center" w="100%" key={i}>
                  <Link>
                    <Text>{title}</Text>
                  </Link>
                  <Box>Icon</Box>
                </Flex>
              );
            }
          )}
        </VStack>

        <Divider m="24px 0px" />

        <VStack>
          <Flex align="center" justify="space-between" width="100%">
            <Heading fontSize={{ base: "", lg: "lg" }}>Price</Heading>
            <Box>Icon</Box>
          </Flex>

          <Box mt="20px"> $50 - 259$</Box>
        </VStack>

        <Divider m="24px 0px" />

        <VStack>
          <Flex align="center" justify="space-between" width="100%">
            <Heading fontSize={{ base: "", lg: "lg" }}>Colors</Heading>
            <Box>Icon</Box>
          </Flex>

          <Grid
            mt="20px"
            templateColumns="repeat(auto-fill, minmax(40px, 50px))"
            width="100%"
            alignContent="center"
            justifyContent="center"
            alignItems="center"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((color, i) => {
              return (
                <GridItem key={i} textAlign="center">
                  {color}
                </GridItem>
              );
            })}
          </Grid>
        </VStack>

        <Divider m="24px 0px" />

        <VStack>
          <Flex align="center" justify="space-between" width="100%">
            <Heading fontSize={{ base: "", lg: "lg" }}>Size</Heading>
            <Box>Icon</Box>
          </Flex>

          <Grid
            mt="20px"
            templateColumns="repeat(2, minmax(10px, 80px))"
            width="100%"
            alignContent="center"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((size, i) => {
              return (
                <Box key={i} width="72px">
                  {size}
                </Box>
              );
            })}
          </Grid>
        </VStack>

        <Divider m="24px 0px" />

        <Box>
          <Flex align="center" justify="space-between" width="100%">
            <Heading fontSize={{ base: "", lg: "lg" }}>Dress Style</Heading>
            <Box>Icon</Box>
          </Flex>

          <VStack mt="20px">
            {["Casual", "Formal", "Party", "Gym"].map((title, i) => {
              return (
                <Flex justify="space-between" align="center" w="100%" key={i}>
                  <Link>
                    <Text>{title}</Text>
                  </Link>
                  <Box>Icon</Box>
                </Flex>
              );
            })}
          </VStack>
        </Box>

        <ButtonRoundProps colorBtn="black" mt="24px" width="100%" p="0px 16px">
          Apply Filter
        </ButtonRoundProps>
      </Flex>
    </Flex>
  );
};

export default Filters;
