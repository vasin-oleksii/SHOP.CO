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
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
  Button,
  IconButton,
  Box,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { ReactSVG } from "react-svg";
import Proposition from "./Proposition";

import Cart from "../../assets/icons/Cart.svg";
import User from "../../assets/icons/User.svg";
import Burger from "../../assets/icons/Burger.svg";
import Search from "../../assets/icons/Search.svg";
import SearchLitle from "../../assets/icons/SearchLitle.svg";

const Header = () => {
  const theme = useTheme();

  return (
    <Box as="header">
      <Proposition
        title="Sign up and get 20% off to your first order. "
        buttonText="Sign Up Now"
        bg={theme.colors.black}
        color={theme.colors.white}
      />
      <Container maxW={theme.breakpoints.xl} pt="24px">
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box
              display={{ base: "block", xl: "none" }}
              mr={{ base: "0px", sm: "16px" }}
            >
              <Menu>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{
                    textDecoration: "underline",
                  }}
                  _expanded={{
                    color: theme.colors.black,
                  }}
                  border="none"
                  display={"none"}
                  aria-label="Options"
                ></MenuButton>
                <MenuButton
                  transition="all 0.2s"
                  _hover={{
                    textDecoration: "underline",
                  }}
                  _expanded={{
                    color: theme.colors.black,
                  }}
                  as={IconButton}
                  aria-label="Options"
                  icon={<ReactSVG src={Burger} />}
                  variant="outline"
                  border="none"
                ></MenuButton>
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

          <InputGroup maxWidth="602px" display={{ base: "none", lg: "block" }}>
            <InputLeftElement
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button variant="ghost" borderRadius="100%" colorScheme="gray">
                <ReactSVG src={SearchLitle} />
              </Button>
            </InputLeftElement>
            <Input
              type="string"
              placeholder="Search for products..."
              bg={theme.colors.greyLight}
              borderRadius="62px"
              color={theme.colors.greyText}
            />
          </InputGroup>

          <HStack spacing="16px">
            <Link display={{ base: "block", lg: "none" }}>
              <ReactSVG src={Search} />
            </Link>
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
