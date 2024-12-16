import { Button, Flex, HStack, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useCartState } from "../../../store/useCartState";
import { ProductState } from "../ProductPage";
import NumberFlow from "@number-flow/react";
import { useLocation } from "react-router-dom";

const AddToCart = ({
  product,
  isButtonClicked,
  resetButtonIsClicked,
}: {
  product: ProductState;
  isButtonClicked: boolean;
  resetButtonIsClicked: () => void;
}) => {
  const { pathname } = useLocation();
  const [numberOfGoodsForBuy, setNumberOfGoodsForBuy] = useState(1);
  const [buttonDisable, setButtonDisable] = useState(false);
  const { addPrduitToCart } = useCartState();
  const toast = useToast();

  const updateNumberOfGoodsForBuy = (num: number) => {
    setNumberOfGoodsForBuy((prevState) => Math.max(1, prevState + num));
    setButtonDisable(false);
  };

  const addInCart = () => {
    addPrduitToCart(product, numberOfGoodsForBuy);
    setButtonDisable(true);
    resetButtonIsClicked();
  };

  useEffect(() => {
    setButtonDisable(false);
  }, [pathname]);

  return (
    <Flex>
      <HStack
        bgColor="greyLight"
        p={{ base: "4px 6px", md: "4px 13px", lg: "8px 17px" }}
        spacing={{ base: "0px", md: "26px" }}
        borderRadius="62px"
      >
        <Button
          onClick={() => updateNumberOfGoodsForBuy(-1)}
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
          onClick={() => updateNumberOfGoodsForBuy(1)}
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
            if (!buttonDisable || isButtonClicked) {
              toast({
                title: `It was added in yout cart ${numberOfGoodsForBuy} item${
                  numberOfGoodsForBuy === 1 ? " 🥰💙🌈" : "s 😍💖👻"
                } `,
                status: "success",
                position: "bottom",
                isClosable: true,
              });
            }
          }}
          opacity={!isButtonClicked && buttonDisable ? "0.5" : "1"}
          cursor={!isButtonClicked && buttonDisable ? "not-allowed" : "pointer"}
        >
          Add to Cart
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddToCart;
