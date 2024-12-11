import { Box, Button, Flex, HStack, Portal, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useCartState } from "../../../store/useCartState";
import { ProductState } from "../ProductPage";

const AddToCart = (product: { product: ProductState }) => {
  const toast = useToast();

  const [numberOfGoodsForBuy, setNumberOfGoodsForBuy] = useState(1);
  const { addPrduitToCart } = useCartState();

  const increaseValue = () => {
    setNumberOfGoodsForBuy((prevNum) => (prevNum === 1 ? 1 : prevNum - 1));
  };

  const addValue = () => {
    setNumberOfGoodsForBuy((prevNum) => prevNum + 1);
  };

  const addInCart = () => {
    addPrduitToCart(product.product, numberOfGoodsForBuy);
  };

  return (
    <Flex>
      <HStack
        bgColor="greyLight"
        p={{ base: "4px 6px", md: "4px 13px", lg: "8px 17px" }}
        spacing={{ base: "0px", md: "26px" }}
        borderRadius="62px"
      >
        <Button
          onClick={increaseValue}
          fontSize="24px"
          fontWeight={500}
          bgColor="greyLight"
        >
          -
        </Button>
        <Box fontSize="18px"> {numberOfGoodsForBuy}</Box>
        <Button
          onClick={addValue}
          fontSize="24px"
          fontWeight={500}
          bgColor="greyLight"
        >
          +
        </Button>
      </HStack>
      <Flex ml={{ base: "11px", lg: "20px" }} width="100%">
        <Button
          background="black"
          color="white"
          width="100%"
          height="100%"
          borderRadius="62px"
          _hover={{
            background: "white",
            color: "black",
            borderColor: "black",
            borderWidth: "1px",
          }}
          onClick={() => {
            addInCart();
            toast({
              title: `It was added in yout cart ${numberOfGoodsForBuy} items 🥰✨🎩`,
              status: "success",
              position: "bottom-right",
              isClosable: true,
            });
          }}
        >
          Add to Cart
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddToCart;
