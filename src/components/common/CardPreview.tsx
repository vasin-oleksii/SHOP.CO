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
  old_price?: number;
  rating: number;
}

const CardPreview = ({
  title,
  images,
  price,
  old_price,
  rating,
}: CardPreviewProps) => {
  const swiperRef = useRef<any>(null);

  const fallbackLink =
    "https://st3.depositphotos.com/3326513/19442/v/450/depositphotos_194428038-stock-illustration-black-linear-photo-camera-logo.jpg";

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
      setTimeout(() => swiperRef.current.slideTo(initialSlide), 500);
    } else {
      setTimeout(() => swiperRef.current?.slideNext(), 500);
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
            return (
              <SwiperSlide key={i} onMouseEnter={onClickChangeSlides}>
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
        <StarRatings rating={rating} ratingMax={5} />
      </HStack>
      <Flex alignItems="center">
        <Text fontSize={{ base: "lg", lg: "xl" }} fontWeight="bold">
          ${price}
        </Text>
        {old_price && <DiscountPrice priceNow={price} pricePrev={old_price} />}
      </Flex>
    </VStack>
  );
};

export default CardPreview;
