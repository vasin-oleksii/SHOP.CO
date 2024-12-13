import { Box, Flex, Heading, VStack, Text, Divider } from "@chakra-ui/react";
import NumberFlow from "@number-flow/react";
import OrederLine from "./OrederLine";
import FormCheckout from "../formCheckout/FormCheckout";

interface ProductState {
  id: string;
  title: string;
  images: string[];
  price: number;
  old_price?: number | undefined;
  rating: number;
  description: string;
  color: string;
  size: string;
  countProduit: number;
}

const OrderSummary = ({
  produitsInCart,
}: {
  produitsInCart: ProductState[];
}) => {
  const totalPrice = produitsInCart.reduce(
    (acc, current) => current.price * current.countProduit + acc,
    0
  );
  const priceWithDiscount = totalPrice * 0.2;
  const priceDilivery = 15;
  return (
    <Flex
      borderWidth="1px"
      borderStyle="solid"
      borderColor="greyLight"
      p="20px 24px 53px 24px"
      borderRadius="20px"
      width="100%"
      flexDir="column"
      gap={{ base: "16px", md: "24px" }}
    >
      <Heading as="h5" fontSize={{ base: "20px", md: "24px" }}>
        Order Summary
      </Heading>
      <VStack spacing="20px">
        <OrederLine color="black" title="Subtotal" value={totalPrice} />
        <OrederLine
          color="red"
          title="Discount (-20%)"
          value={priceWithDiscount * -1}
        />
        <OrederLine color="black" title="Delivery Fee" value={priceDilivery} />
        <Divider />
        <OrederLine
          color="black"
          title="Total"
          value={totalPrice - priceWithDiscount + priceDilivery}
          accentText
        />
      </VStack>
      <FormCheckout />
    </Flex>
  );
};

export default OrderSummary;
