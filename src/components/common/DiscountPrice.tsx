import { Badge, HStack, Text } from "@chakra-ui/react";

interface DiscountPriceProps {
  priceNow: number;
  pricePrev: number;
}

const DiscountPrice = ({ priceNow, pricePrev }: DiscountPriceProps) => {
  const procentOfDiscount = ((priceNow - pricePrev) / pricePrev) * 100;

  return (
    <HStack pl="10px">
      <Text
        fontSize={{ base: "lg", lg: "xl" }}
        textDecoration="line-through"
        fontWeight="bold"
        color={"greyText"}
      >
        {pricePrev.toFixed(0)}
      </Text>

      <Badge
        borderRadius="62px"
        p="6px 15px"
        fontSize="xs"
        backgroundColor="redLight"
        color="red"
      >
        {procentOfDiscount.toFixed(0)}%
      </Badge>
    </HStack>
  );
};

export default DiscountPrice;
