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
import StarRatings from "./StarRatings";
import DiscountPrice from "./DiscountPrice";

import "swiper/css";
import Header from "../header/Header";
import Foother from "../foother/Foother";
import { useState } from "react";

interface ProductState {
  title: string;
  images: string[];
  price: number;
}

const ProductInfo = () => {
  //   const { id } = useParams();
  const location = useLocation();
  const { title, images, price }: ProductState = location.state || {};

  const [showImage, setShowImage] = useState<number>(0);

  const handleShowImage = (number: number) => {
    setShowImage(number);
  };

  return (
    <>
      <Header />
      <Box>
        <Container maxW="container.xl">
          <Divider mt={{ base: "20px", xl: "24px" }} />
          <Box mt={{ base: "20px", xl: "24px" }}>крошки</Box>
          <Grid templateColumns="repeat(2, 1fr)">
            <Flex width="100%" flexDir="row">
              <VStack>
                {images.map((img, i) => {
                  img = img.replace(/[\[\]"]/g, "");

                  return (
                    <Img
                      src={img}
                      borderRadius="20px"
                      boxSize="150px"
                      onClick={() => handleShowImage(i)}
                    />
                  );
                })}
              </VStack>
              <Box ml={{ base: "", lg: "14px" }}>
                {images.map((img, i) => {
                  img = img.replace(/[\[\]"]/g, "");

                  if (i === showImage) {
                    return (
                      <Img src={img} borderRadius="20px" boxSize="465px" />
                    );
                  }
                })}
              </Box>
            </Flex>
            <Flex flexDirection="column" ml={{ base: "0", lg: "39px" }}>
              <Heading>{title}</Heading>
              <Box mt={{ base: "26px", lg: "16px" }}>
                <StarRatings rating={3} />
              </Box>

              <HStack mt={{ base: "12px", lg: "14px" }}>
                <Text fontSize={{ base: "lg", lg: "xl" }} fontWeight="bold">
                  ${price}
                </Text>
                <DiscountPrice priceNow={price} pricePrev={price + 10} />
              </HStack>
              <Text mt="24px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente, ullam neque enim vel corrupti pariatur consequuntur
                itaque voluptates rerum, ipsum natus deserunt eligendi ducimus,
                voluptatibus eos eaque at? Incidunt, impedit.
              </Text>
              <Divider mt={{ base: "20px", xl: "24px" }} />
            </Flex>
          </Grid>
        </Container>
      </Box>
      <Foother />
    </>
  );
};

export default ProductInfo;
