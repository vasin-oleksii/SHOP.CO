import {
  Container,
  Flex,
  Text,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  IconButton,
  Box,
  Img,
} from "@chakra-ui/react";

import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
import BannerPropositionHead from "../common/BannerPropositionHead";
import { Link as RouterLink } from "react-router-dom";

import Burger from "../../assets/icons/Burger.svg";

import { useState } from "react";
import Search from "./Search";

const Header = () => {
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(true);
  const [isCrossVisibleBurger, setIsCrossVisibleBurger] =
    useState<boolean>(true);

  const toggleBurger = (): void => setIsCrossVisibleBurger((prev) => !prev);
  const toggleBanner = (): void => setIsBannerVisible((prev) => !prev);

  return (
    <>
      <Box as="header">
        <BannerPropositionHead
          title="Sign up and get 20% off to your first order. "
          buttonText="Sign Up Now"
          bg="black"
          color="white"
          isVisible={isBannerVisible}
          toggleBanner={toggleBanner}
        />
        <Container maxW="container.xl" pt="24px">
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Box
                display={{ base: "block", xl: "none" }}
                mr={{ base: "0px", md: "0px", sm: "16px" }}
              >
                <Menu>
                  <MenuButton
                    transition="all 0.2s"
                    _expanded={{
                      color: "black",
                    }}
                    as={IconButton}
                    aria-label="Options"
                    variant="link"
                    border="none"
                    background="none"
                    display="flex"
                    onClick={toggleBurger}
                  >
                    {isCrossVisibleBurger ? (
                      <Box zIndex={10}>
                        <Img src={Burger} />
                      </Box>
                    ) : (
                      <Flex>
                        <CloseIcon width="15px" height="15px" zIndex={10} />
                      </Flex>
                    )}
                  </MenuButton>
                  <MenuList width="100vw">
                    <MenuItem>
                      <RouterLink to="/category?page=1">Shop</RouterLink>
                    </MenuItem>
                    <MenuItem>
                      <RouterLink to="/category?page=1&color=red">
                        On Sale
                      </RouterLink>
                    </MenuItem>
                    <MenuItem>
                      <RouterLink to="/category?page=1&color=red|navy">
                        New Arrivals
                      </RouterLink>
                    </MenuItem>
                    <MenuItem>
                      <RouterLink to="/category?page=1&category=t-shirts">
                        Brands
                      </RouterLink>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box _hover={{ textDecoration: "none", color: "greyText" }}>
                <RouterLink to="/">
                  <Text
                    fontSize={{
                      base: "2xl-custom",
                      lg: "2xl",
                      md: "lg",
                      sm: "xl",
                    }}
                    fontWeight={700}
                  >
                    SHOP.CO
                  </Text>
                </RouterLink>
              </Box>

              <Breadcrumb
                separator=""
                ml="40px"
                display={{ base: "none", xl: "block" }}
              >
                <BreadcrumbItem>
                  <Menu>
                    <MenuButton
                      transition="all 0.2s"
                      _hover={{
                        textDecoration: "underline",
                      }}
                      _expanded={{
                        color: "black",
                      }}
                      aria-label="Options"
                    >
                      Shop
                      <ChevronDownIcon />
                    </MenuButton>

                    <MenuList>
                      <MenuItem>NEW ARRIVALS</MenuItem>
                      <MenuItem>Top selling</MenuItem>
                      <MenuItem>Styles</MenuItem>
                    </MenuList>
                  </Menu>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <RouterLink to="/category?page=1">On Sale</RouterLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <RouterLink to="/category?page=1">New Arrivals</RouterLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Box>
                    <RouterLink to="/category?page=1">Brands</RouterLink>
                  </Box>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Search />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Header;
