import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

import photo1 from "../../assets/categories/photo1.jpg";
import photo2 from "../../assets/categories/photo2.jpg";
import photo3 from "../../assets/categories/photo3.jpg";
import photo4 from "../../assets/categories/photo4.jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <Box pt="80px">
      <Container maxW="container.xl">
        <Flex
          padding="71px 64px"
          backgroundColor="grey"
          borderRadius="40px"
          alignItems="center"
          flexDirection="column"
        >
          <Heading>BROWSE BY dress STYLE</Heading>

          <Grid
            mt="65px"
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            templateRows="repeat(auto, minmax(auto, 1fr))"
            gap="20px"
            width="100%"
            height={{ base: "800px", lg: "595px" }}
          >
            <GridItem
              backgroundImage={photo1}
              borderRadius="20px"
              backgroundPosition="35% 35%"
              backgroundRepeat="no-repeat"
              backgroundSize={{ base: "cover", lg: "auto" }}
              transition="all 0.2s"
              _hover={{ transform: "scale(1.05)", transition: "all 0.2s" }}
            >
              <Link to={"/category?page=1&color=red"}>
                <Box w="100%" h="100%">
                  <Text
                    fontSize={{ base: "xl", lg: "3xl" }}
                    fontWeight="700"
                    mt={{ base: "18px", lg: "28px" }}
                    ml={{ base: "24px", lg: "36px" }}
                  >
                    Casual
                  </Text>
                </Box>
              </Link>
            </GridItem>
            <GridItem
              colSpan={{ base: 0, lg: 2 }}
              backgroundImage={photo2}
              borderRadius="20px"
              backgroundRepeat="no-repeat"
              backgroundPosition="left 26%"
              backgroundSize="cover"
              transition="all 0.2s"
              _hover={{ transform: "scale(1.03)", transition: "all 0.2s" }}
            >
              <Link to={"/category?page=1&color=black"}>
                <Box w="100%" h="100%">
                  <Text
                    fontSize={{ base: "xl", lg: "3xl" }}
                    fontWeight="700"
                    mt={{ base: "18px", lg: "28px" }}
                    ml={{ base: "24px", lg: "36px" }}
                  >
                    Formal
                  </Text>
                </Box>
              </Link>
            </GridItem>
            <GridItem
              colSpan={{ base: 0, lg: 2 }}
              backgroundImage={photo3}
              borderRadius="20px"
              backgroundRepeat="no-repeat"
              backgroundPosition="left 65%"
              backgroundSize="cover"
              transition="all 0.2s"
              _hover={{ transform: "scale(1.03)", transition: "all 0.2s" }}
            >
              <Link to={"/category?page=1&style=formal"}>
                <Box w="100%" h="100%">
                  <Text
                    fontSize={{ base: "xl", lg: "3xl" }}
                    fontWeight="700"
                    mt={{ base: "18px", lg: "28px" }}
                    ml={{ base: "24px", lg: "36px" }}
                  >
                    Party
                  </Text>
                </Box>
              </Link>
            </GridItem>
            <GridItem
              backgroundImage={photo4}
              borderRadius="20px"
              backgroundRepeat="no-repeat"
              backgroundPosition="left 65%"
              backgroundSize="cover"
              transition="all 0.2s"
              _hover={{ transform: "scale(1.05)", transition: "all 0.2s" }}
            >
              <Link to={"/category?page=1&style=party"}>
                <Box w="100%" h="100%">
                  <Text
                    fontSize={{ base: "xl", lg: "3xl" }}
                    fontWeight="700"
                    mt={{ base: "18px", lg: "28px" }}
                    ml={{ base: "24px", lg: "36px" }}
                  >
                    Gym
                  </Text>
                </Box>
              </Link>
            </GridItem>
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};

export default Categories;
