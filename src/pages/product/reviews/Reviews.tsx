import { Box, Button, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import HeaderReviews from "./HeaderReviews";
import { useReviewsState } from "../../../store/useReviewsState";
import { useEffect, useState } from "react";
import StarRatings from "../../../components/common/StarRatings";
import verification from "../../../assets/icons/Verification.svg";
import SkeletonOnFetch from "../../../components/common/skelets/SkeletonOnFetch";
import ReviewSkeleton from "../../../components/common/skelets/ReviewSkeleton";
import ButtonRound from "../../../components/common/buttons/ButtonRound";
import useScreenWidth from "../../../components/shared/hooks/useScreenWidth";

const Reviews = () => {
  const { isMobile } = useScreenWidth();

  const UPLOAD_ITEMS = isMobile ? 3 : 6;
  const {
    allReviews,
    perPageReviews,
    isLoading,
    numbOfUpload,
    mobileNumOfUpload,
    increaseNumOfUpoad,
    fetchReviewsPerPage,
  } = useReviewsState((state) => state);

  console.log(perPageReviews);
  const notMoreDateToShow =
    allReviews.length === perPageReviews.length &&
    allReviews.length !== 0 &&
    perPageReviews.length !== 0;

  const fetchNewReviews = () => {
    if (!notMoreDateToShow) {
      increaseNumOfUpoad(UPLOAD_ITEMS);
    }
  };

  useEffect(() => {
    fetchReviewsPerPage(1, numbOfUpload);
  }, [numbOfUpload]);

  useEffect(() => {
    if (isMobile) mobileNumOfUpload();
  }, []);

  return (
    <>
      <HeaderReviews totlaReviews={allReviews.length} />
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap="19px"
        mt={{ base: "20px", md: "35px" }}
      >
        {perPageReviews.map((reviewItem, i) => {
          const { rating, review, name, date } = reviewItem;

          return (
            <GridItem
              p={{ base: "24px", xl: "28px 32px 50px 32px" }}
              border={`1px solid grey`}
              borderRadius="20px"
              key={i}
            >
              <StarRatings rating={rating} starBig={true} />
              <Flex
                flexDirection="row"
                mt="15px"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Text fontSize={{ base: "md", lg: "lg" }} fontWeight={700}>
                  {name}
                </Text>
                <Img
                  src={verification}
                  boxSize={{ base: "15px", lg: "20px" }}
                  ml="5px"
                />
              </Flex>

              <Text
                mt="12px"
                fontSize={{ base: "sm", lg: "md" }}
                color="greyText"
                noOfLines={3}
                textAlign="left"
              >
                {review}
              </Text>
              <Text
                textAlign="left"
                color="greyText"
                mt="24px"
                fontWeight="700"
              >
                {date}
              </Text>
            </GridItem>
          );
        })}
        {!notMoreDateToShow && isLoading && (
          <SkeletonOnFetch
            numOfSkeletons={UPLOAD_ITEMS}
            skeletItem={<ReviewSkeleton />}
          />
        )}
      </Grid>

      <Flex align="center" justify="center" mt={{ base: "20px", md: "35px" }}>
        <ButtonRound
          onClick={fetchNewReviews}
          isLoading={isLoading}
          colorBtn="white"
          disabled={notMoreDateToShow}
          opacity={notMoreDateToShow ? 0.55 : 1}
          borderColor="grey"
          borderWidth="1px"
          borderStyle="solid"
          p="16.5px 45px"
        >
          Load More Reviews
        </ButtonRound>
      </Flex>
    </>
  );
};

export default Reviews;
