import { create } from "zustand";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  old_price?: number;
  rating: number;
  images: string[];
  category_id: string;
}

interface CategoryState {
  data: Product[];
  dataPerPage: Product[];
  isLoading: boolean;
  fetchDataPerPage: (limit?: number, page?: number) => Promise<void>;
  fetchData: () => Promise<void>;
}

export const useCategoryState = create<CategoryState>((set) => ({
  data: [],
  dataPerPage: [],
  isLoading: false,
  fetchDataPerPage: async (limit = 9, page = 1) => {
    set({ isLoading: true });
    try {
      const resoult = await fetch(
        `https://67051c76031fd46a830eaefe.mockapi.io/api/v1/products?page=${page}&limit=${limit}`
      );
      set({ dataPerPage: await resoult.json(), isLoading: false });
    } catch (e) {
      22;
      console.error(e);
      set({ isLoading: false });
    }
  },
  fetchData: async () => {
    set({ isLoading: true });
    try {
      const resoult = await fetch(
        `https://67051c76031fd46a830eaefe.mockapi.io/api/v1/products`
      );
      set({ data: await resoult.json(), isLoading: false });
    } catch (e) {
      console.error(e);
      set({ isLoading: false });
    }
  },
}));
