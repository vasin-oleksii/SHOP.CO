import { Box, Button, Flex, HStack, Portal, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useCartState } from "../../../store/useCartState";
import { ProductState } from "../ProductPage";
import NumberFlow from "@number-flow/react";

const AddToCart = (product: { product: ProductState }) => {
  const [numberOfGoodsForBuy, setNumberOfGoodsForBuy] = useState(1);
  const [buttonDisable, setButtonDisable] = useState(false);
  const { addPrduitToCart } = useCartState();
  const toast = useToast();

  const titleForToast =
    numberOfGoodsForBuy === 1
      ? `It was added in yout cart ${numberOfGoodsForBuy} item 🥰😱😎`
      : `It was added in yout cart ${numberOfGoodsForBuy} items 🥰💙🌈`;

  const increaseValue = () => {
    setNumberOfGoodsForBuy((prevNum) => (prevNum === 1 ? 1 : prevNum - 1));
    setButtonDisable(false);
  };

  const addValue = () => {
    setNumberOfGoodsForBuy((prevNum) => prevNum + 1);
    setButtonDisable(false);
  };

  const addInCart = () => {
    addPrduitToCart(product.product, numberOfGoodsForBuy);
    setButtonDisable(true);
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
        <NumberFlow
          value={numberOfGoodsForBuy}
          format={{
            trailingZeroDisplay: "stripIfInteger",
          }}
          style={{ fontSize: "18px" }}
        />

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
            if (!buttonDisable) {
              toast({
                title: titleForToast,
                status: "success",
                position: "bottom-right",
                isClosable: true,
              });
            }
          }}
          opacity={buttonDisable ? "0.65" : "1"}
        >
          Add to Cart
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddToCart;
