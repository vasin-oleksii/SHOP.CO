import useFetch from "../shared/hooks/useFetch";
import { Box, Container, Heading, HStack } from "@chakra-ui/react";

import SkeletonOnFetch from "../common/skelets/SkeletonOnFetch";
import ReviewSkeleton from "../common/skelets/ReviewSkeleton";
import ReviewsSlider from "./ReviewsSlider";

const Reviews = () => {
  const { data, isLoading } = useFetch({
    url: "https://67051c76031fd46a830eaefe.mockapi.io/api/v1/reviews",
  });

  return (
    <Box mt={{ base: "50px", lg: "80px" }}>
      <Container maxW="container.xl">
        <Heading>OUR HAPPY CUSTOMERS</Heading>
      </Container>
      <Box mt={{ base: "-4px", lg: "-10px" }}>
        <ReviewsSlider data={data} />
      </Box>
      <Box mt={{ base: "24px", lg: "40px" }}>
        <HStack maxW="container.xl" justifyContent="end" spacing="150px">
          {isLoading && (
            <SkeletonOnFetch
              numOfSkeletons={3}
              skeletItem={<ReviewSkeleton />}
            />
          )}
        </HStack>
      </Box>
    </Box>
  );
};

export default Reviews;
