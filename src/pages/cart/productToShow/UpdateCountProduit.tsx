import { Button, HStack } from "@chakra-ui/react";
import { useCartState } from "../../../store/useCartState";
import { DeleteIcon } from "@chakra-ui/icons";
import NumberFlow from "@number-flow/react";
import { ProductCart } from "../../../store/types";

const UpdateCountProduit = ({ product }: { product: ProductCart }) => {
  const { addPrduitToCart, removeProduitFromCart } = useCartState();

  const increaseValue = () => {
    addPrduitToCart(
      product,
      product.countProduit === 1 ? 1 : product.countProduit - 1
    );
  };

  const addValue = () => {
    addPrduitToCart(product, product.countProduit + 1);
  };

  return (
    <>
      <DeleteIcon
        color="red"
        cursor="pointer"
        fontSize="20px"
        onClick={() => removeProduitFromCart(product)}
        _hover={{ color: "greyText" }}
      />

      <HStack bgColor="greyLight" p="2px 8px" borderRadius="62px">
        <Button
          onClick={increaseValue}
          fontSize="20px"
          fontWeight={500}
          bgColor="greyLight"
          p="0px"
        >
          -
        </Button>

        <NumberFlow
          value={product.countProduit}
          format={{
            trailingZeroDisplay: "stripIfInteger",
          }}
          style={{ fontSize: "14px" }}
        />
        <Button
          onClick={addValue}
          fontSize="20px"
          fontWeight={500}
          bgColor="greyLight"
          p="0px"
        >
          +
        </Button>
      </HStack>
    </>
  );
};
export default UpdateCountProduit;
