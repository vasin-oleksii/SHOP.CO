import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Img,
  HStack,
  Grid,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import StarRatings from "../../components/common/StarRatings";
import DiscountPrice from "../../components/common/DiscountPrice";

import { useState } from "react";
import CrumbLink from "../../components/common/CrumbLink";
import DividerCustom from "../../components/common/divider/DividerCustom";

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

  const { pathname } = location;

  const [showImage, setShowImage] = useState<number>(0);

  const handleShowImage = (number: number) => {
    setShowImage(number);
  };

  return (
    <>
      <Box>
        <Container maxW="container.xl">
          <DividerCustom />

          <Box mt={{ base: "20px", xl: "24px" }}>
            <CrumbLink pathname={pathname} />
          </Box>
          <Grid
            templateColumns={{ base: "minmax(100px, 430px)", md: "50% 50%" }}
            mt={{ base: "23px", lg: "39px" }}
            justifyContent="center"
          >
            <Flex width="100%" flexDir={{ base: "column-reverse", lg: "row" }}>
              <Flex
                flexDir={{ base: "row", lg: "column" }}
                height="100%"
                justify={{ base: "center", lg: "initial" }}
                mt={{ base: "12px", lg: "0px" }}
              >
                {images.map((img, i) => {
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
                {images.map((img, i) => {
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
            <Flex
              flexDirection="column"
              ml={{ base: "0", md: "29px", lg: "39px" }}
            >
              <Heading fontSize={{ base: "24px", lg: "40px" }}>{title}</Heading>
              <Box mt={{ base: "26px", lg: "16px" }}>
                <StarRatings rating={rating} ratingMax={5} starBig={true} />
              </Box>

              <HStack mt={{ base: "12px", lg: "14px" }}>
                <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold">
                  ${price}
                </Text>
                {old_price && (
                  <DiscountPrice
                    priceNow={price}
                    pricePrev={old_price}
                    isBig={true}
                  />
                )}
              </HStack>
              <Text mt="24px">{description}</Text>
              <DividerCustom />

              <Box mt="24px">
                <Text>Select Colors</Text>
                <HStack mt="16px">
                  <Box>C1</Box>
                  <Box>C2</Box>
                </HStack>
              </Box>

              <DividerCustom />

              <Box mt="24px">
                <Text>Choose Size</Text>
                <HStack mt="16px">
                  <Box>C1</Box>
                  <Box>C2</Box>
                  <Box>C1</Box>
                  <Box>C2</Box>
                </HStack>
              </Box>

              <DividerCustom />
            </Flex>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProductPage;
