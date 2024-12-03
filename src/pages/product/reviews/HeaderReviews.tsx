import { Box, Flex, Text } from "@chakra-ui/react";
import { useReviewsState } from "../../../store/useReviewsState";
import { useEffect, useState } from "react";

const HeaderReviews = ({ totlaReviews }: { totlaReviews: number }) => {
  const fetchReviewsPerPage = useReviewsState(
    (state) => state.fetchReviewsPerPage
  );

  return (
    <Flex
      justify="space-between"
      align="center"
      mt={{ base: "16px", md: "24px" }}
    >
      <Flex align="center">
        <Text fontSize={{ base: "20px", md: "24px" }} fontWeight={700}>
          All Reviews
        </Text>
        <Text ml="8px" mt="6px" color="greyText">{`(${totlaReviews})`}</Text>
      </Flex>
      <Box>
        <Text onClick={fetchReviewsPerPage}>Right</Text>
      </Box>
    </Flex>
  );
};

export default HeaderReviews;
