import "swiper/css";
import CardPreview from "./CardPreview";
import { Box, Flex, Grid, Heading, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ButtonRound from "./buttons/ButtonRound";

import { Swiper, SwiperSlide } from "swiper/react";
import SkeletonOnFetch from "./skelets/SkeletonOnFetch";

interface ClothesPreviewProps {
  title: string;
}

const ClothesPreview = ({ title }: ClothesPreviewProps) => {
  const [newProducts, setNewProducts] = useState([]);
  const [prevStateOfProducts, setPrevStateOfProducts] = useState([]);

  const [numberOfProductsUppload, setNumberOfProductsUppload] =
    useState<number>(4);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);

  const updateNumberOfProductsUpload = (): void => {
    setNumberOfProductsUppload((prevState) => prevState + 4);
  };

  const updateProducts = (data: any) => {
    setNewProducts(data);
  };

  const fetchData = async () => {
    setIsLoadingData(true);
    try {
      setPrevStateOfProducts(newProducts);

      const results = await fetch(
        `https://api.escuelajs.co/api/v1/products?offset=0&limit=${numberOfProductsUppload}`
      );
      const data = await results.json();

      updateProducts(data);
      setIsLoadingData(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [numberOfProductsUppload]);

  return (
    <VStack justify="center">
      <Heading>{title}</Heading>
      <Box mt={{ base: "32px", lg: "56px" }}>
        <Grid
          display={{ base: "none", md: "grid" }}
          templateColumns={{
            base: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap="20px"
        >
          {newProducts.map(({ id, title, images, price }) => {
            return (
              <CardPreview
                title={title}
                images={images}
                price={price}
                key={id}
              />
            );
          })}
          <SkeletonOnFetch
            numOfSkeletons={newProducts.length - prevStateOfProducts.length}
            isLoading={isLoadingData}
          />
        </Grid>

        <Flex
          display={{ base: "flex", md: "none" }}
          pl="16px"
          maxW="100vw"
          overflow="hidden"
        >
          <Swiper slidesPerView={1.5}>
            {newProducts.map(({ id, title, images, price }) => {
              return (
                <SwiperSlide key={id}>
                  <CardPreview title={title} images={images} price={price} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Flex>

        <Flex justify="center" mt={{ base: "28px", lg: "38px" }}>
          <ButtonRound
            colorBtn="white"
            onClick={updateNumberOfProductsUpload}
            p="16px 80px"
            border={`1px solid 'grey'`}
            isLoading={isLoadingData}
          >
            View More
          </ButtonRound>
        </Flex>
      </Box>
    </VStack>
  );
};

export default ClothesPreview;
