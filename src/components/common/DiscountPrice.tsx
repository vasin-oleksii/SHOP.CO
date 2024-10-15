import { Badge, HStack, Text } from "@chakra-ui/react";

interface DiscountPriceProps {
  priceNow: number;
  pricePrev: number;
  isBig?: boolean;
}

const DiscountPrice = ({ priceNow, pricePrev, isBig }: DiscountPriceProps) => {
  const procentOfDiscount = ((priceNow - pricePrev) / pricePrev) * 100;

  return (
    <HStack pl="10px">
      <Text
        fontSize={isBig ? { base: "xl", lg: "2xl" } : { base: "lg", lg: "xl" }}
        textDecoration="line-through"
        fontWeight="bold"
        color={"greyText"}
      >
        {pricePrev.toFixed(0)}
      </Text>

      <Badge
        borderRadius="62px"
        p="6px 15px"
        fontSize={isBig ? { base: "sm", lg: "md" } : "xs"}
        backgroundColor="redLight"
        color="red"
      >
        {procentOfDiscount.toFixed(0)}%
      </Badge>
    </HStack>
  );
};

export default DiscountPrice;
