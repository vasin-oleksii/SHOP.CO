import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ReviewsState {
  allReviews: [];
  perPageReviews: [];
  isLoading: boolean;
  numbOfUpload: number;
  fetchReviewsPerPage: (page: number, limit: number) => void;
  fetchReviewsAll: () => void;
  increaseNumOfUpoad: (num: number) => void;
  mobileNumOfUpload: () => void;
}

export const useReviewsState = create<ReviewsState>()(
  devtools((set, get) => ({
    allReviews: [],
    perPageReviews: [],
    isLoading: false,
    numbOfUpload: 6,
    fetchReviewsPerPage: async (page: number, limit: number) => {
      set({ isLoading: true });
      try {
        // @ts-ignore
        const fetchDataPerPage = await fetch(
          `${import.meta.env.VITE_API_REVIEWS}?page=${page}&limit=${limit}`
        );

        /// при загрузке вынести в другую функцию
        const perPageReviews = await fetchDataPerPage.json();
        set({
          perPageReviews,
          isLoading: false,
        });
      } catch (e) {
        console.error(e);
        set({ isLoading: false });
      }
    },
    fetchReviewsAll: async () => {
      set({ isLoading: true });

      try {
        // @ts-ignore
        const fetchDataAll = await fetch(`${import.meta.env.VITE_API_REVIEWS}`);
        const allReviews = await fetchDataAll.json();
        set({
          allReviews,
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
    mobileNumOfUpload: () => {
      set({
        numbOfUpload: 3,
      });
    },
  }))
);
