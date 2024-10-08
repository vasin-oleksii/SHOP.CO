import { Box, Container, Heading } from "@chakra-ui/react";
import useFetch from "../shared/hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";

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
            {data.map(({ name, rating, review }) => (
              <SwiperSlide>
                <Box>{rating}</Box>
                <Box>{name}</Box>
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
