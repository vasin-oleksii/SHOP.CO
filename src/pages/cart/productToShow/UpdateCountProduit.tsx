import { Box, Button, HStack } from "@chakra-ui/react";
import { useCartState } from "../../../store/useCartState";
import { useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";

const UpdateCountProduit = ({ product }: { product: any }) => {
  const [numberOfGoodsForBuy, setNumberOfGoodsForBuy] = useState<number>(
    product.countProduit
  );
  const { addPrduitToCart, removeProduitFromCart } = useCartState();

  const increaseValue = () => {
    setNumberOfGoodsForBuy((prevNum) => (prevNum === 1 ? 1 : prevNum - 1));
    addPrduitToCart(
      product.product,
      numberOfGoodsForBuy === 1 ? 1 : numberOfGoodsForBuy - 1
    );
  };

  const addValue = () => {
    setNumberOfGoodsForBuy((prevNum) => prevNum + 1);
    addPrduitToCart(product.product, numberOfGoodsForBuy + 1);
  };

  return (
    <>
      <DeleteIcon
        color="red"
        cursor="pointer"
        fontSize="20px"
        onClick={() => removeProduitFromCart(product)}
      />

      <HStack bgColor="greyLight" p="5px 11px" borderRadius="62px">
        <Button
          onClick={increaseValue}
          fontSize="20px"
          fontWeight={500}
          bgColor="greyLight"
        >
          -
        </Button>
        <Box fontSize="18px"> {numberOfGoodsForBuy}</Box>
        <Button
          onClick={addValue}
          fontSize="20px"
          fontWeight={500}
          bgColor="greyLight"
        >
          +
        </Button>
      </HStack>
    </>
  );
};
export default UpdateCountProduit;
