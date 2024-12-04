import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ReviewsState {
  allReviews: [];
  perPageReviews: [];
  isLoading: boolean;
  numbOfUpload: number;
  fetchReviewsPerPage: (page: number, limit: number) => void;
  increaseNumOfUpoad: (num: number) => void;
}

export const useReviewsState = create<ReviewsState>()(
  devtools((set, get) => ({
    allReviews: [],
    perPageReviews: [],
    isLoading: false,
    numbOfUpload: 6,
    fetchReviewsPerPage: async (page: number, limit: number) => {
      set({ isLoading: true });
      // @ts-ignore
      const fullUrlSearch = `${import.meta.env.VITE_API_REVIEWS}?`;
      try {
        const fetchDataPerPage = await fetch(
          `${fullUrlSearch}page=${page}&limit=${limit}`
        );
        const fetchDataAll = await fetch(`${fullUrlSearch}`);

        const allReviews = await fetchDataAll.json();
        const perPageReviews = await fetchDataPerPage.json();
        set({
          allReviews,
          perPageReviews,
          isLoading: false,
        });
      } catch (e) {
        console.error(e);
        set({ isLoading: false });
      }
    },
    increaseNumOfUpoad: (num: number) => {
      const { numbOfUpload } = get();
      set({
        numbOfUpload: numbOfUpload + num,
      });
    },
  }))
);
