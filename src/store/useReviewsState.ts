import { create } from "zustand";
import { devtools } from "zustand/middleware";
import useFetch from "../components/shared/hooks/useFetch";

interface ReviewsState {
  allReviews: [];
  fetchReviewsPerPage: () => void;
}

export const useReviewsState = create<ReviewsState>()(
  devtools((set) => ({
    allReviews: [],
    perPage: [],
    isLoading: false,

    fetchReviewsPerPage: async () => {
      // @ts-ignore
      console.log(`${import.meta.env.VITE_API_REVIEWS}`);
    },
  }))
);
