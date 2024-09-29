import {
  Box,
  Container,
  Heading,
  Img,
  SimpleGrid,
  useTheme,
  Text,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import twoHuman from "../../assets/hero/TwoHuman.png";
import star from "../../assets/icons/Star.svg";
import { motion } from "framer-motion";
import ButtonRound from "../common/buttons/ButtonRound";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box backgroundColor={theme.colors.grey} mt="24px">
      <Container maxW={theme.breakpoints.xl}>
        <SimpleGrid columns={{ base: 1, lg: 2 }}>
          <Stack
            justifyContent="center"
            maxW="505px"
            pt={{ base: "39px", lg: "0" }}
          >
            <Stack spacing="32px">
              <Heading
                as="h1"
                fontWeight="700"
                fontSize={{ base: "3xl", md: "4xl", lg: "4xl", xl: "5xl" }}
              >
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </Heading>
              <Text fontSize={{ base: "sm", lg: "md" }}>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </Text>
              <ButtonRound colorBtn="black" p="16.5px 68.5px">
                Shop Now
              </ButtonRound>
            </Stack>
            <Grid
              mt={{ base: "0px", lg: "48px" }}
              templateRows="repeat(2, 1fr)"
              templateColumns={{ base: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
              gap="0px 32px"
            >
              <GridItem>
                <Heading as="span">200+</Heading>
                <Text>International Brands</Text>
              </GridItem>
              <GridItem
                borderLeft="1px solid gray"
                borderRight="1px solid gray"
              >
                <Heading as="span">200+</Heading>
                <Text>International Brands</Text>
              </GridItem>
              <GridItem gridColumn={{ base: "1 / span 2", xl: "auto" }}>
                <Heading as="span">200+</Heading>
                <Text>International Brands</Text>
              </GridItem>
            </Grid>
          </Stack>
          <Box position="relative" zIndex="100">
            <Box position="absolute" top="0%" right={{ base: 0, xl: "10%" }}>
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  scale: [0.85, 1, 0.85],
                  rotate: [0, 45, -45, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Img src={star} boxSize={{ base: "76px", lg: "104px" }} />
              </motion.div>
            </Box>
            <Box
              position="absolute"
              top="40%"
              left={{ base: 0, xl: "5%" }}
              zIndex="100"
            >
              <motion.div
                animate={{ y: [0, 15, 0], scale: 1, rotate: [0, 180, -90] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Img src={star} boxSize={{ base: "44px", lg: "56px" }} />
              </motion.div>
            </Box>

            <Img src={twoHuman} />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Hero;
