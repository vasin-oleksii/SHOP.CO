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
  dataPerPage: Product[];
  dataAll: Product[];
  isLoading: boolean;
  parametrs: string[];
  fetchDataPerPage: (
    limit?: number,
    page?: number,
    categoryOfSearch?: string,
    valueOfSearch?: string
  ) => Promise<void>;
}

export const useCategoryState = create<CategoryState>((set) => ({
  dataPerPage: [],
  dataAll: [],
  isLoading: false,
  parametrs: [],
  fetchDataPerPage: async (
    limit = 0,
    page = 1,
    categoryOfSearch = "",
    valueOfSearch = ""
  ) => {
    set({ isLoading: true });
    const searchInCategory =
      categoryOfSearch && valueOfSearch
        ? `${categoryOfSearch}=${valueOfSearch}&`
        : "";

    try {
      const fetchDataPerPage = await fetch(
        `https://67051c76031fd46a830eaefe.mockapi.io/api/v1/products?${searchInCategory}page=${page}&limit=${limit}`
      );
      console.log(
        `https://67051c76031fd46a830eaefe.mockapi.io/api/v1/products?${searchInCategory}page=${page}&limit=${limit}`
      );
      const fetchDataAll = await fetch(
        `https://67051c76031fd46a830eaefe.mockapi.io/api/v1/products?${searchInCategory}`
      );

      const dataAll = await fetchDataAll.json();
      const dataPerPage = await fetchDataPerPage.json();

      set({
        dataPerPage: dataPerPage,
        isLoading: false,
        dataAll: dataAll,
        parametrs: [categoryOfSearch, valueOfSearch],
      });
    } catch (e) {
      console.error(e);
      set({ isLoading: false });
    }
  },
}));
