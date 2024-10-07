import {
  Text,
  Heading,
  Image,
  HStack,
  VStack,
  Flex,
  Box,
} from "@chakra-ui/react";
import StarRatings from "./StarRatings";
import DiscountPrice from "./DiscountPrice";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface CardPreviewProps {
  title: string;
  images: string[];
  price: number;
}

const CardPreview = ({ title, images, price }: CardPreviewProps) => {
  const soldOutLink =
    "https://st2.depositphotos.com/3259079/45453/v/600/depositphotos_454535022-stock-illustration-sorry-temporarily-out-stock-sign.jpg";

  const randomRating = Math.round((Math.random() * 4 + 1) * 2) / 2;

  const giveDiscount = Math.random() > 0.5;

  const settingStylesSwiper = {
    "--swiper-pagination-color": "white",
    "--swiper-pagination-bullet-inactive-color": "grey",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "10px",
    "--swiper-pagination-bullet-horizontal-gap": "6px",
  };

  return (
    <VStack maxW="300px" alignItems="start">
      <Box maxW="300px">
        <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          style={settingStylesSwiper as React.CSSProperties}
        >
          {images.map((img, i) => {
            img = img.replace(/[\[\]"]/g, "");

            return (
              <SwiperSlide key={i}>
                <Image
                  src={img}
                  fallbackSrc={soldOutLink}
                  boxSize="300px"
                  borderRadius="20px"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>

      <Heading
        fontSize={{ base: "md", lg: "lg" }}
        pt="18px"
        noOfLines={1}
        maxW="300px"
        textOverflow="ellipsis"
      >
        {title}
      </Heading>
      <HStack>
        <StarRatings rating={randomRating} />
      </HStack>
      <Flex alignItems="center">
        <Text fontSize={{ base: "lg", lg: "xl" }} fontWeight="bold">
          ${price}
        </Text>
        {giveDiscount && (
          <DiscountPrice
            priceNow={price}
            pricePrev={price * (Math.random() + 1)}
          />
        )}
      </Flex>
    </VStack>
  );
};

export default CardPreview;
