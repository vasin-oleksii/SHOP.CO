import { Box, Flex, Heading, Img, VStack, Text } from "@chakra-ui/react";
import DividerCustom from "../../../components/common/divider/DividerCustom";
import UpdateCountProduit from "./UpdateCountProduit";
import NumberFlow from "@number-flow/react";

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
  category_id: string;
}

const ProductToShow = ({
  product,
  isFirstElement,
  isLastElement,
}: {
  product: ProductState;
  isFirstElement: boolean;
  isLastElement: boolean;
}) => {
  return (
    <>
      <Flex mt={isFirstElement ? "0px" : "24px"} justify="space-between">
        <Flex flexDir="row">
          <Box
            width={{ base: "100px", sm: "125px" }}
            height="125px"
            position={{ base: "absolute", sm: "relative" }}
            opacity={{ base: "0.25", sm: "1" }}
          >
            <Img src={product.images[0] || ""} borderRadius="9px" />
          </Box>
          <Flex
            ml={{ base: "0px", sm: "16px" }}
            alignItems="flex-start"
            justifyContent="space-between"
            flexDir="column"
          >
            <Box>
              <Heading fontSize="18px">{product.title} </Heading>
              <VStack align="left" gap="0px">
                <Flex>
                  Size:
                  <Text color="greyText" ml="4px">
                    {product.size}
                  </Text>
                </Flex>
                <Flex>
                  Color:
                  <Text color="greyText" ml="4px">
                    {product.color[0].toUpperCase() + product.color.slice(1)}
                  </Text>
                </Flex>
              </VStack>
            </Box>

            <Text fontSize={{ base: "20px", md: "24px" }}>
              <NumberFlow
                value={product.price * product.countProduit}
                format={{
                  style: "currency",
                  currency: "USD",
                  trailingZeroDisplay: "stripIfInteger",
                }}
                style={{ fontWeight: "500" }}
              />
            </Text>
          </Flex>
        </Flex>
        <Flex justify="space-between" alignItems="flex-end" flexDir="column">
          <UpdateCountProduit product={product} />
        </Flex>
      </Flex>
      {!isLastElement && <DividerCustom />}
    </>
  );
};

export default ProductToShow;
