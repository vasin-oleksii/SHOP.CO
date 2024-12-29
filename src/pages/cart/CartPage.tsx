import { Box, Container } from "@chakra-ui/react";

import HeadingCart from "./HeadingCart";
import ContentCart from "./ContentCart";
import { Helmet } from "react-helmet";

const CartPage = () => {
  return (
    <Box>
      <Helmet>
        <title>Cart | Shop.co</title>
        <meta name="description" content="Cart | Shop.co" />
      </Helmet>
      <Container maxW="container.xl">
        <HeadingCart />

        <ContentCart />
      </Container>
    </Box>
  );
};

export default CartPage;
