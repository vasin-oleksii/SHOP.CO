import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { useState } from "react";

const AddToCart = () => {
  const [numberOfGoodsForBuy, setNumberOfGoodsForBuy] = useState(1);

  const increaseValue = () => {
    setNumberOfGoodsForBuy((prevNum) => (prevNum === 1 ? 1 : prevNum - 1));
  };

  const addValue = () => {
    setNumberOfGoodsForBuy((prevNum) => prevNum + 1);
  };

  const addInCart = () => {
    alert("is added: " + numberOfGoodsForBuy);
  };

  return (
    <Flex>
      <HStack
        bgColor="greyLight"
        p="8px 17px"
        spacing="26px"
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
          onClick={addInCart}
        >
          Add to Cart
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddToCart;
