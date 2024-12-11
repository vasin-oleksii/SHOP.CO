import { Box, Flex, Heading, Img, VStack, Text } from "@chakra-ui/react";
import DividerCustom from "../../../components/common/divider/DividerCustom";
import UpdateCountProduit from "./UpdateCountProduit";

const ProductToShow = ({
  product,
  isFirstElement,
  isLastElement,
}: {
  product: any;
  isFirstElement: boolean;
  isLastElement: boolean;
}) => {
  return (
    <>
      <Flex mt={isFirstElement ? "0px" : "24px"} justify="space-between">
        <Flex flexDir="row">
          <Box width="125px" height="125px">
            <Img src={product.images[0] || ""} borderRadius="9px" />
          </Box>
          <Flex
            ml="16px"
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
                    {product.color}
                  </Text>
                </Flex>
              </VStack>
            </Box>
            <Text fontSize="24px" fontWeight="700">
              ${product.price * product.countProduit}
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
