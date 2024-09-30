import {
  Container,
  Flex,
  useTheme,
  Text,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
  HStack,
  IconButton,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Portal,
  PopoverArrow,
  PopoverCloseButton,
  Img,
} from "@chakra-ui/react";

import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
import { ReactSVG } from "react-svg";
import BannerPropositionHead from "../common/BannerPropositionHead";

import Cart from "../../assets/icons/Cart.svg";
import User from "../../assets/icons/User.svg";
import Burger from "../../assets/icons/Burger.svg";
import Search from "../../assets/icons/Search.svg";
import SearchLitle from "../../assets/icons/SearchLitle.svg";
import { useState } from "react";
import InputIconLeft from "../common/inputs/InputIconLeft";

const Header = () => {
  const theme = useTheme();
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(true);
  const [isCrossVisibleBurger, setIsCrossVisibleBurger] =
    useState<boolean>(true);

  const toggleBurger = (): void => setIsCrossVisibleBurger((prev) => !prev);
  const toggleBanner = (): void => setIsBannerVisible((prev) => !prev);

  return (
    <Box as="header">
      <BannerPropositionHead
        title="Sign up and get 20% off to your first order. "
        buttonText="Sign Up Now"
        bg={theme.colors.black}
        color={theme.colors.white}
        isVisible={isBannerVisible}
        toggleBanner={toggleBanner}
      />
      <Container maxW={theme.breakpoints.xl} pt="24px">
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
                    color: theme.colors.black,
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
                    <Img src={Burger} />
                  ) : (
                    <Flex>
                      <CloseIcon width="15px" height="15px" />
                    </Flex>
                  )}
                </MenuButton>
                <MenuList>
                  <MenuItem>Shop</MenuItem>
                  <MenuItem>On Sale</MenuItem>
                  <MenuItem>New Arrivals</MenuItem>
                  <MenuItem>Brands</MenuItem>
                </MenuList>
              </Menu>
            </Box>

            <Link
              _hover={{ textDecoration: "none", color: theme.colors.greyText }}
            >
              <Text
                fontSize={{ base: "2xl-custom", lg: "2xl", md: "lg", sm: "xl" }}
                fontWeight={700}
              >
                SHOP.CO
              </Text>
            </Link>

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
                      color: theme.colors.black,
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
                <BreadcrumbLink>On Sale</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink>New Arrivals</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink>Brands</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>

          <InputIconLeft
            maxWidth="602px"
            display={{ base: "none", lg: "block" }}
            placeholder="Search for products..."
            bgInput={theme.colors.greyLight}
            colorInput={theme.colors.greyText}
          >
            <ReactSVG src={SearchLitle} />
          </InputIconLeft>

          <HStack spacing="16px">
            <Popover>
              <PopoverTrigger>
                <Link display={{ base: "block", lg: "none" }}>
                  <ReactSVG src={Search} />
                </Link>
              </PopoverTrigger>
              <Portal>
                <PopoverContent borderRadius="66px">
                  <PopoverArrow />

                  <InputIconLeft>
                    <ReactSVG src={SearchLitle} />
                  </InputIconLeft>
                  <PopoverCloseButton size="sm" />
                </PopoverContent>
              </Portal>
            </Popover>

            <Link>
              <ReactSVG src={Cart} />
            </Link>
            <Link>
              <ReactSVG src={User} />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
