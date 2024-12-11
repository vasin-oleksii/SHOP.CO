import { Box, Flex } from "@chakra-ui/react";

import ProductToShow from "./productToShow/ProductToShow";

const ContentCart = () => {
  const productsToShow = JSON.parse(localStorage.getItem("cartProduits") || "");

  console.log(productsToShow);
  return (
    <Flex mt={{ base: "20px", md: "24px" }} width="100%">
      <Box
        width="60%"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="greyLight"
        p="24px"
        borderRadius="20px"
      >
        {productsToShow &&
          productsToShow.map((el: any, i: any) => {
            const isFirstElement = i === 0;
            const isLastElement = i + 1 === productsToShow.length;

            return (
              <ProductToShow
                key={i}
                product={el}
                isFirstElement={isFirstElement}
                isLastElement={isLastElement}
              />
            );
          })}
      </Box>

      {/* <Heading>{el.countProduit}</Heading> */}
    </Flex>
  );
};

export default ContentCart;
