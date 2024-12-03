import { Grid } from "@chakra-ui/react";
import HeaderReviews from "./HeaderReviews";
import { useReviewsState } from "../../../store/useReviewsState";

const Reviews = () => {
  const totlaReviews = useReviewsState((state) => state.allReviews);

  return (
    <>
      <HeaderReviews totlaReviews={totlaReviews.length} />
      <Grid></Grid>
    </>
  );
};

export default Reviews;
