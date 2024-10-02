import { Box } from "@chakra-ui/react";

interface DiscountPriceProps {
  price: number;
}

const DiscountPrice = ({ price }: DiscountPriceProps) => {
  return <Box pl="10px">{price.toFixed(1)}</Box>;
};

export default DiscountPrice;
