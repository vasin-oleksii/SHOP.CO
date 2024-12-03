import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ReviewsState {
  allReviews: [];
  perPageReviews: [];
  isLoading: boolean;
  fetchReviewsPerPage: (page: number, limit: number) => void;
}

export const useReviewsState = create<ReviewsState>()(
  devtools((set) => ({
    allReviews: [],
    perPageReviews: [],
    isLoading: false,
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
  }))
);
