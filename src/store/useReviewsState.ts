import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type ItemReview = {
  name: string;
  review: string;
  rating: number;
  date: string;
};
interface ReviewsState {
  allReviews: [] | ItemReview[];
  perPageReviews: [] | ItemReview[];
  isLoading: boolean;
  numbOfUpload: number;
  fetchReviewsPerPage: (page: number, limit: number) => void;
  fetchReviewsAll: () => void;
  increaseNumOfUpoad: (num: number) => void;
  mobileNumOfUpload: () => void;
  addNewReview: (newItem: ItemReview) => void;
}

// @ts-ignore
const API = import.meta.env.VITE_API_REVIEWS;

export const useReviewsState = create<ReviewsState>()(
  devtools((set, get) => ({
    allReviews: [],
    perPageReviews: [],
    isLoading: false,
    numbOfUpload: 6,
    fetchReviewsPerPage: async (page: number, limit: number) => {
      set({ isLoading: true });
      try {
        const fetchDataPerPage = await fetch(
          `${API}?page=${page}&limit=${limit}`
        );
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
        const fetchDataAll = await fetch(API);
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
    addNewReview: (newItem) => {
      const { allReviews } = get();
      set({ allReviews: [...allReviews, newItem] });
    },
  }))
);
