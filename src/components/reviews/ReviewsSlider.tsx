import verification from "../../assets/icons/Verification.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import StarRatings from "../common/StarRatings";
import { Flex, Img, Text, Box, Container } from "@chakra-ui/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./reviewsSlider.css";
import { useEffect, useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

interface ReviewsSliderProps {
  name: string;
  rating: number;
  review: string;
}

const ReviewsSlider = ({ data }: any) => {
  const [activeSlide, setActiveSlide] = useState<number>(2);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return removeEventListener("resize", handleResize);
  }, []);

  const isLastSlide = data.length - 1 === activeSlide;
  const isFirstSlide = 0 === activeSlide;

  return (
    <>
      <Container maxW="container.xl" mb={{ base: "24px", lg: "40px" }}>
        <Flex alignItems="end" justifyContent="end">
          <Box className="swiper-btn-prev">
            <ArrowBackIcon boxSize="24px" color={isFirstSlide ? "grey" : ""} />
          </Box>

          <Box className="swiper-btn-next" ml="20px">
            <ArrowForwardIcon
              boxSize="24px"
              color={isLastSlide ? "grey" : ""}
            />
          </Box>
        </Flex>
      </Container>
      <Swiper
        slidesPerView={3.45}
        centeredSlides={true}
        spaceBetween={20}
        initialSlide={2}
        breakpoints={{
          220: {
            slidesPerView: 1.3,
          },
          620: {
            slidesPerView: 2.3,
          },
          820: {
            slidesPerView: 3.3,
          },
        }}
        navigation={{
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev",
        }}
        modules={[Navigation]}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {data.map(({ name, rating, review }: ReviewsSliderProps, i: number) => {
          const prevSlideOfActive = activeSlide - 1;
          const nextSlideOfActive = activeSlide + 1;
          let className =
            activeSlide === i ? "review-slide-off-blur" : "review-slide";

          if (screenWidth > 819) {
            className =
              activeSlide === i ||
              prevSlideOfActive === i ||
              nextSlideOfActive === i
                ? "review-slide-off-blur"
                : "review-slide";
          }

          return (
            <SwiperSlide key={i} className={className}>
              <Box
                p={{ base: "24px", xl: "28px 32px 50px 32px" }}
                border={`1px solid grey`}
                borderRadius="20px"
              >
                <StarRatings rating={rating} starBig={true} />
                <Flex flexDirection="row" mt="15px" alignItems="center">
                  <Text fontSize={{ base: "md", lg: "lg" }} fontWeight={700}>
                    {name}
                  </Text>
                  <Img
                    src={verification}
                    boxSize={{ base: "15px", lg: "20px" }}
                    ml="5px"
                  />
                </Flex>

                <Text fontSize={{ base: "sm", lg: "md" }} noOfLines={3}>
                  {review}
                </Text>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ReviewsSlider;
