import { Box, Container, Heading, Text } from "@chakra-ui/react";
import useFetch from "../shared/hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import StarRatings from "../common/StarRatings";

const Reviews = () => {
  const { data } = useFetch({
    url: "https://67051c76031fd46a830eaefe.mockapi.io/api/v1/reviews",
  });

  return (
    <Box mt={{ base: "50px", lg: "80px" }}>
      <Container maxW="container.xl">
        <Heading>OUR HAPPY CUSTOMERS</Heading>
        <Box>
          <Swiper>
            {data.map(({ name, rating, review }, i) => (
              <SwiperSlide key={i}>
                <StarRatings rating={rating} />
                {/* <Text fontSize={{ base: "md", lg: "lg" }}>{name}</Text> */}
                <Box>{review}</Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Reviews;
