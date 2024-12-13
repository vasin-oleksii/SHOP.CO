import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

import ProductToShow from "./productToShow/ProductToShow";

import { useCartState } from "../../store/useCartState";
import OrderSummary from "./orderSummary/OrderSummary";

const ContentCart = () => {
  const { produitsInCart } = useCartState();

  return (
    <Flex
      mt={{ base: "20px", md: "24px" }}
      width="100%"
      gap="20px"
      flexDir={{ base: "column", md: "row" }}
    >
      <Box
        width={{ base: "100%", md: "65%", lg: "55%" }}
        borderWidth="1px"
        borderStyle="solid"
        borderColor="greyLight"
        p="24px"
        borderRadius="20px"
      >
        {produitsInCart.map((el: any, i: any) => {
          const isFirstElement = i === 0;
          const isLastElement = i + 1 === produitsInCart.length;

          return (
            <ProductToShow
              key={i}
              product={el}
              isFirstElement={isFirstElement}
              isLastElement={isLastElement}
            />
          );
        })}
        {produitsInCart.length === 0 ? (
          <Heading fontSize="24px" fontWeight="500">
            The cart is empty... 😢
          </Heading>
        ) : null}
      </Box>

      <Box width={{ base: "100%", md: "35%", lg: "45%" }}>
        <OrderSummary produitsInCart={produitsInCart} />
      </Box>
    </Flex>
  );
};

export default ContentCart;
