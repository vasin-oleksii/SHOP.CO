import { Box, Container, Flex, Heading } from "@chakra-ui/react";

import HeadingCart from "./HeadingCart";
import ContentCart from "./ContentCart";

const CartPage = () => {
  return (
    <Box>
      <Container maxW="container.xl">
        <HeadingCart />

        <ContentCart />
      </Container>
    </Box>
  );
};

export default CartPage;
