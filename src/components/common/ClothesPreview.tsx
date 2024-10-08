import "swiper/css";
import CardPreview from "./CardPreview";
import { Box, Flex, Grid, Heading, Link, Show, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ButtonRound from "./buttons/ButtonRound";

import { Swiper, SwiperSlide } from "swiper/react";
import SkeletonOnFetch from "./skelets/SkeletonOnFetch";
import useFetch from "../shared/hooks/useFetch";

interface ClothesPreviewProps {
  title: string;
  url: string;
  uploadMore?: number;
}

const ClothesPreview = ({
  title,
  url,
  uploadMore = 0,
}: ClothesPreviewProps) => {
  const [numberOfProductsUpload, setNumberOfProductsUpload] =
    useState<number>(uploadMore);

  const isProductShowComponent = numberOfProductsUpload === 0;

  const { data, isLoading } = useFetch({
    url: `${url}${isProductShowComponent ? "" : numberOfProductsUpload}`,
  });

  const updateNumberOfProductsUpload = (): void => {
    setNumberOfProductsUpload((prevState) => prevState + uploadMore);
  };

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
          {data.map(({ id, title, images, price }, i) => {
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
            numOfSkeletons={
              data.length < numberOfProductsUpload
                ? numberOfProductsUpload - data.length
                : 0
            }
            isLoading={isLoading}
          />
        </Grid>

        <Flex
          display={{ base: "flex", md: "none" }}
          pl="16px"
          maxW="100vw"
          overflow="hidden"
        >
          <Swiper slidesPerView={1.5}>
            {data.map(({ id, title, images, price }) => {
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
            isLoading={isLoading}
          >
            {isProductShowComponent ? <Link>Look more</Link> : "View More"}
          </ButtonRound>
        </Flex>
      </Box>
    </VStack>
  );
};

export default ClothesPreview;
