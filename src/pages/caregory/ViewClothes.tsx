import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import CardPreview from "../../components/common/CardPreview";

const ViewClothes = () => {
  return (
    <Box width="100%" ml="20px">
      <Flex
        justify="space-between"
        align="center"
        width="100%"
        flexDirection="column"
      >
        <Flex align="end" justify="space-between" width="100%">
          <Heading>Casual</Heading>
          <Flex align="center" justify="center">
            <Text>Showing 1-10 of 100 Products</Text>
            <Flex ml="12px">
              Sort by:
              <Flex
                flexDirection="row"
                align="center"
                justify="center"
                fontWeight="bold"
                ml="6px"
              >
                Most Popular<Box>Icon</Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Grid
          templateColumns="repeat(auto-fit, minmax(270px, 1fr))"
          gap="20px"
          width="100%"
          mt={{ base: "35px", lg: "25px" }}
        >
          {Array.from({ length: 9 }, (v, i) => (
            <GridItem key={i}>
              <CardPreview
                title={v + ""}
                images={[
                  "https://images.all-free-download.com/images/thumbjpg/orange_crush_514795.jpg",
                  "https://images.all-free-download.com/images/thumbjpg/orange_crush_514795.jpg",
                ]}
                price={i}
              />
            </GridItem>
          ))}
        </Grid>
        <Divider mt="34px" />
        <Flex width="100%" justify="space-between" align="center" mt="20px">
          <Button>Prev</Button>
          <Flex>
            <Box>1</Box>
            <Box>1</Box>
            <Box>3</Box>
          </Flex>
          <Button>Next</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ViewClothes;
