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
import { useRef } from "react";

interface CardPreviewProps {
  title: string;
  images: string[];
  price: number;
}

const CardPreview = ({ title, images, price }: CardPreviewProps) => {
  const swiperRef = useRef<any>(null);

  const fallbackLink =
    "https://st3.depositphotos.com/3326513/19442/v/450/depositphotos_194428038-stock-illustration-black-linear-photo-camera-logo.jpg";

  const randomRating = Math.round((Math.random() * 4 + 1) * 2) / 2;

  const giveDiscount = Math.random() > 0.5;

  const settingStylesSwiper = {
    "--swiper-pagination-color": "white",
    "--swiper-pagination-bullet-inactive-color": "grey",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "10px",
    "--swiper-pagination-bullet-horizontal-gap": "6px",
  };

  const onClickChangeSlides = () => {
    const lastSlide = swiperRef.current.slides.length - 1;
    const activeSlide = swiperRef.current.activeIndex;
    const initialSlide = 0;

    if (activeSlide === lastSlide) {
      swiperRef.current.slideTo(initialSlide);
    } else {
      swiperRef.current?.slideNext();
    }
  };

  return (
    <VStack overflow="hidden" alignItems="start">
      <Box maxW={{ base: "200px", md: "300px" }}>
        <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          style={settingStylesSwiper as React.CSSProperties}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {images.map((img, i) => {
            img = img.replace(/[\[\]"]/g, "");

            return (
              <SwiperSlide key={i} onClick={onClickChangeSlides}>
                <Image
                  src={img}
                  fallbackSrc={fallbackLink}
                  boxSize={{ base: "200px", md: "300px" }}
                  borderRadius="20px"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>

      <Heading
        fontSize={{ base: "md", lg: "lg" }}
        mt="18px"
        noOfLines={1}
        maxW={{ base: "200px", md: "300px" }}
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
