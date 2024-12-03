import { Grid } from "@chakra-ui/react";
import HeaderReviews from "./HeaderReviews";
import { useReviewsState } from "../../../store/useReviewsState";
import { useEffect } from "react";

const Reviews = () => {
  const totlaReviews = useReviewsState((state) => state.allReviews);
  const fetchReviewsPerPage = useReviewsState(
    (state) => state.fetchReviewsPerPage
  );
  useEffect(() => {
    fetchReviewsPerPage(1, 6);
  }, []);

  return (
    <>
      <HeaderReviews totlaReviews={totlaReviews.length} />
      <Grid></Grid>
    </>
  );
};

export default Reviews;
