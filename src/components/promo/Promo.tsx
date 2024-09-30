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

const Promo = () => {
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
                fontSize={{
                  base: "3xl",
                  lg: "4xl-custom",
                  xl: "5xl",
                }}
              >
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </Heading>
              <Text fontSize={{ base: "sm", lg: "md" }}>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </Text>
              <ButtonRound
                colorBtn="black"
                p="16px 68px"
                width={{ base: "100%", lg: "unset" }}
              >
                Shop Now
              </ButtonRound>
            </Stack>
            <Grid
              mt={{ base: "15px", xl: "40px" }}
              templateRows={{ base: "repeat(2, 1fr)", xl: "repeat(1, 1fr)" }}
              templateColumns={{ base: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
              gap="0px 32px"
              alignItems="center"
              textAlign={{ base: "center", xl: "left" }}
              width={{ base: "100%", xl: "110%" }}
            >
              <GridItem
                pr={{ base: "0", xl: "32px" }}
                borderRight="1px solid gray"
              >
                <Heading as="span" fontSize={{ base: "xl", lg: "4xl-custom" }}>
                  200+
                </Heading>
                <Text fontSize="xs">International Brands</Text>
              </GridItem>
              <GridItem
                borderRight={{ base: "none", xl: "1px solid gray" }}
                pr={{ base: "0", xl: "32px" }}
              >
                <Heading as="span" fontSize={{ base: "xl", lg: "4xl-custom" }}>
                  2,000+
                </Heading>
                <Text fontSize="xs">High-Quality Products</Text>
              </GridItem>
              <GridItem
                gridColumn={{
                  base: "1 / span 2",
                  xl: "auto",
                }}
                mt={{ base: "12px", xl: "0" }}
              >
                <Heading as="span" fontSize={{ base: "xl", lg: "4xl-custom" }}>
                  30,000+
                </Heading>
                <Text fontSize="xs">Happy Customers</Text>
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

export default Promo;
