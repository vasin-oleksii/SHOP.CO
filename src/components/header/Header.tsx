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
import Proposition from "./Proposition";
import { ChevronDownIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { ReactSVG } from "react-svg";
import Cart from "../../assets/icons/Cart.svg";
import User from "../../assets/icons/User.svg";

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
          <Flex>
            <Link
              _hover={{ textDecoration: "none", color: theme.colors.greyText }}
            >
              <Text fontSize="2xl-custom" fontWeight={700}>
                SHOP.CO
              </Text>
            </Link>

            <Breadcrumb separator="" display="flex" ml="40px">
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
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
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
          <InputGroup maxWidth="602px">
            <InputLeftElement>
              <Button variant="ghost" borderRadius="100%" colorScheme="gray">
                <SearchIcon color={theme.colors.greyText} />
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
            <Link>
              <ReactSVG src={Cart} style={{ fill: theme.colors.red }} />
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
