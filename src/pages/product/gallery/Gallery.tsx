import { Box, Flex, Img } from "@chakra-ui/react";
import { ProductState } from "../ProductPage";
import { useState } from "react";

const Gallery = ({ product }: { product: ProductState }) => {
  const [showImage, setShowImage] = useState<number>(0);

  const handleShowImage = (number: number) => {
    setShowImage(number);
  };

  return (
    <>
      <Flex width="100%" flexDir={{ base: "column-reverse", lg: "row" }}>
        <Flex
          flexDir={{ base: "row", lg: "column" }}
          height="100%"
          justify={{ base: "center", lg: "initial" }}
          mt={{ base: "12px", lg: "0px" }}
        >
          {product.images.map((img, i) => {
            const isFirstItem = i === 0;

            return (
              <Box
                key={i}
                border={i === showImage ? "2px solid black" : ""}
                cursor="pointer"
                borderRadius="22px"
                width={{ base: "100px", lg: "100px", xl: "130px" }}
                height={{ base: "100px", lg: "100%" }}
                mt={{
                  base: "0px",
                  lg: isFirstItem ? "" : "14px",
                }}
                ml={{ base: isFirstItem ? "0px" : "13px", lg: "0px" }}
              >
                <Img
                  src={img}
                  borderRadius="20px"
                  objectFit="cover"
                  height="100%"
                  onClick={() => handleShowImage(i)}
                />
              </Box>
            );
          })}
        </Flex>
        <Box ml={{ base: "", lg: "14px" }}>
          {product.images.map((img, i) => {
            if (i === showImage) {
              return (
                <Img
                  src={img}
                  key={i}
                  borderRadius="20px"
                  objectFit="cover"
                  maxW="100%"
                  height="100%"
                />
              );
            }
          })}
        </Box>
      </Flex>
    </>
  );
};

export default Gallery;
