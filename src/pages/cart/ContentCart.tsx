import { Box, Flex, Heading } from "@chakra-ui/react";

import ProductToShow from "./productToShow/ProductToShow";

import { useCartState } from "../../store/useCartState";

const ContentCart = () => {
  const { produitsInCart } = useCartState();

  return (
    <Flex mt={{ base: "20px", md: "24px" }} width="100%">
      <Box
        width="60%"
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

      {/* <Heading>{el.countProduit}</Heading> */}
    </Flex>
  );
};

export default ContentCart;
