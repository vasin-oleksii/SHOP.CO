import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  Img,
  HStack,
  Grid,
  VStack,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import StarRatings from "../../components/common/StarRatings";
import DiscountPrice from "../../components/common/DiscountPrice";

import { useState } from "react";

interface ProductState {
  title: string;
  images: string[];
  price: number;
  old_price?: number | undefined;
  rating: number;
  description: string;
}

const ProductPage = () => {
  const location = useLocation();
  const { title, images, price, old_price, rating, description }: ProductState =
    location.state || {};

  const [showImage, setShowImage] = useState<number>(0);

  const handleShowImage = (number: number) => {
    setShowImage(number);
  };

  return (
    <>
      <Box>
        <Container maxW="container.xl">
          <Divider mt={{ base: "20px", xl: "24px" }} />
          <Box mt={{ base: "20px", xl: "24px" }}>крошки</Box>
          <Grid templateColumns=" 50% 50%">
            <Flex width="100%" flexDir="row">
              <VStack>
                {images.map((img, i) => {
                  return (
                    <Box
                      key={i}
                      border={i === showImage ? "4px solid #FFC0CB" : ""}
                      cursor="pointer"
                      borderRadius="25px"
                      width="150px"
                      height="100%"
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
              </VStack>
              <Box ml={{ base: "", lg: "14px" }}>
                {images.map((img, i) => {
                  if (i === showImage) {
                    return (
                      <Img
                        src={img}
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
            <Flex flexDirection="column" ml={{ base: "0", lg: "39px" }}>
              <Heading>{title}</Heading>
              <Box mt={{ base: "26px", lg: "16px" }}>
                <StarRatings rating={rating} />
              </Box>

              <HStack mt={{ base: "12px", lg: "14px" }}>
                <Text fontSize={{ base: "lg", lg: "xl" }} fontWeight="bold">
                  ${price}
                </Text>
                {old_price && (
                  <DiscountPrice priceNow={price} pricePrev={old_price} />
                )}
              </HStack>
              <Text mt="24px">{description}</Text>
              <Divider mt={{ base: "20px", xl: "24px" }} />
            </Flex>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProductPage;
