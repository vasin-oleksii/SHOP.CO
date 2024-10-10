import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Img,
  Link,
  Text,
} from "@chakra-ui/react";

import Tw from "../../assets/icons/Tw.svg";
import Inst from "../../assets/icons/Inst.svg";
import Fb from "../../assets/icons/Fb.svg";
import GH from "../../assets/icons/GitHub.svg";
import "./foother.css";

import apple from "../../assets/payMethods/apple.svg";
import gpay from "../../assets/payMethods/gpay.svg";
import master from "../../assets/payMethods/master.svg";
import visa from "../../assets/payMethods/visa.svg";
import paypal from "../../assets/payMethods/paypal.svg";

import FootherBanner from "./FootherBanner";
import { ReactSVG } from "react-svg";
import ItemWithLinks from "./ItemWithLinks";

const Foother = () => {
  return (
    <Box mt={{ base: "40px", lg: "80px" }}>
      <Container maxW="container.xl" position="relative" zIndex="10">
        <FootherBanner title="STAY UPTO DATE ABOUT OUR LATEST OFFERS" />
      </Container>
      <Flex
        background="greyLight"
        p={{ base: "190px 18px 75px 18px", lg: "140px 0px 90px 0px" }}
        mt={{ base: "-160px", lg: "-90px" }}
      >
        <Container maxW="container.xl">
          <Flex flexDirection={{ base: "column", lg: "row" }}>
            <Flex
              width={{ base: "100%", lg: "345px" }}
              flexDirection="column"
              mr={{ base: "0px", lg: "100px" }}
            >
              <Link href="#">
                <Heading fontSize={{ base: "2xl", xl: "3xl" }}>SHOP.CO</Heading>
              </Link>
              <Text
                mt={{ base: "12px", lg: "25px" }}
                fontSize="sm"
                color="greyText"
              >
                We have clothes that suits your style and which you're proud to
                wear. From women to men.
              </Text>
              <HStack mt={{ base: "20px", lg: "35px" }}>
                {[Tw, Inst, Fb, GH].map((src, i) => (
                  <Flex
                    align="center"
                    justify="center"
                    key={i}
                    background="white"
                    p="8px 8px"
                    border="1px solid grey"
                    borderRadius="100%"
                    transition="all 0.2s"
                    height="30px"
                    width="30px"
                    _hover={{
                      background: "black",
                      p: "10px 10px",
                      transition: "all 0.2s",
                    }}
                    className="icons"
                    cursor="pointer"
                  >
                    <Link>
                      <ReactSVG src={src} />
                    </Link>
                  </Flex>
                ))}
              </HStack>
            </Flex>
            <Grid
              mt={{ base: "25px", lg: "0" }}
              templateColumns={{
                base: "repeat(auto-fill, minmax(100px, 1fr))",
                lg: "repeat(4, 1fr)",
              }}
              gap={{ base: "24px 80px", lg: "80px" }}
              width="100%"
            >
              <ItemWithLinks
                title="Company"
                links={["About", "Features", "Works", "Career"]}
              />
              <ItemWithLinks
                title="Help"
                links={[
                  "Customer Support",
                  "Delivery Details",
                  "Terms & Conditions",
                  "Privacy Policy",
                ]}
              />
              <ItemWithLinks
                title="FAQ"
                links={["Account", "Manage Deliveries", "Orders", "Payments"]}
              />
              <ItemWithLinks
                title="Resources"
                links={[
                  "Free eBooks",
                  "Development Tutorial",
                  "How to - Blog",
                  "Youtube Playlist",
                ]}
              />
            </Grid>
          </Flex>
          <Box mt={{ base: "40px", lg: "50px" }}>
            <Divider borderColor="greyText" opacity="0.15" />
            <Flex
              justify="space-between"
              align="center"
              mt={{ base: "16px", lg: "25px" }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box>
                <Text color="greyText">
                  Shop.co © 2000-{new Date().getFullYear()}, All Rights Reserved
                </Text>
              </Box>
              <HStack mt={{ base: "19px", md: "0" }}>
                {[apple, gpay, master, paypal, visa].map((src, i) => (
                  <Link key={i}>
                    <Img src={src} />
                  </Link>
                ))}
              </HStack>
            </Flex>
          </Box>
        </Container>
      </Flex>
    </Box>
  );
};

export default Foother;
