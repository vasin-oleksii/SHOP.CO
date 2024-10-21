import "swiper/css";
import CardPreview from "./CardPreview";
import { Box, Flex, Grid, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ButtonRound from "./buttons/ButtonRound";

import { Swiper, SwiperSlide } from "swiper/react";
import SkeletonOnFetch from "./skelets/SkeletonOnFetch";
import useFetch from "../shared/hooks/useFetch";
import CardPreviewSkelet from "./skelets/CardPreviewSkelet";

import { Link } from "react-router-dom";

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
          {data.map(
            ({ id, title, images, price, old_price, rating, description }) => {
              return (
                <Link
                  to={`/product/${id}`}
                  key={id}
                  state={{
                    title,
                    images,
                    price,
                    old_price,
                    rating,
                    description,
                  }}
                >
                  <CardPreview
                    title={title}
                    images={images}
                    price={price}
                    old_price={old_price}
                    rating={rating}
                  />
                </Link>
              );
            }
          )}

          <SkeletonOnFetch
            numOfSkeletons={
              data.length < numberOfProductsUpload
                ? numberOfProductsUpload - data.length
                : 0
            }
            skeletItem={<CardPreviewSkelet />}
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
            {data.map(
              ({
                id,
                title,
                images,
                price,
                old_price,
                rating,
                description,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <Link
                      to={`/product/${id}`}
                      key={id}
                      state={{
                        title,
                        images,
                        price,
                        old_price,
                        rating,
                        description,
                      }}
                    >
                      <CardPreview
                        title={title}
                        images={images}
                        price={price}
                        old_price={old_price}
                        rating={rating}
                      />
                    </Link>
                  </SwiperSlide>
                );
              }
            )}
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
            {isProductShowComponent ? (
              <Link to="category">Look more</Link>
            ) : (
              "View More"
            )}
          </ButtonRound>
        </Flex>
      </Box>
    </VStack>
  );
};

export default ClothesPreview;
