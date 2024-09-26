import {
  Box,
  Container,
  Flex,
  useTheme,
  Text,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Proposition from "./Proposition";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Header = () => {
  const theme = useTheme();

  return (
    <header>
      <Proposition
        title="Sign up and get 20% off to your first order. "
        buttonText="Sign Up Now"
        bg={theme.colors.black}
        color={theme.colors.white}
      />
      <Container maxW={theme.breakpoints.xl} pt="24px">
        <Flex>
          <Flex>
            <Box>
              <Text fontSize="2xl-custom" fontWeight={700}>
                SHOP.CO
              </Text>
            </Box>
            <Menu>
              <MenuButton
                transition="all 0.2s"
                _hover={{ color: theme.colors.greyText }}
                _expanded={{
                  color: theme.colors.black,
                  textDecoration: "underline",
                }}
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
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
