import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { keys } from "../constants/useCategoryState";

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

export interface ParametrsOfSearch {
  category: string;
  color: string;
  size: string;
  style: string;
  title: string;
  price: string;
}

interface ParametrsOfSearchNotObligateur {
  category?: string | null;
  color?: string | null;
  size?: string | null;
  style?: string | null;
  title?: string | null;
  price?: string | null;
}

interface CategoryState {
  dataPerPage: Product[];
  dataAll: Product[];
  isLoading: boolean;
  parametrsOfSearch: ParametrsOfSearch;

  fetchDataPerPage: (
    limit?: number,
    page?: number,
    categoryOfSearch?: string,
    valueOfSearch?: string
  ) => Promise<void>;

  changeParametrsOfSearch: ({}: ParametrsOfSearchNotObligateur) => void;
}

export const useCategoryState = create<CategoryState>()(
  devtools((set, get) => ({
    dataPerPage: [],
    dataAll: [],
    isLoading: false,
    parametrsOfSearch: {
      category: "",
      color: "",
      size: "",
      style: "",
      title: "",
      price: "",
    },
    fetchDataPerPage: async (limit = 0, page = 1) => {
      set({ isLoading: true });

      const { parametrsOfSearch } = get();

      const urlParams = new URLSearchParams();

      keys.forEach((key) => {
        const value = parametrsOfSearch[key];
        if (value) {
          urlParams.append(key, value);
        }
      });

      const baseUrl = `${import.meta.env.VITE_API_URL}?`;
      const fullUrlSearch = `${baseUrl}${urlParams.toString() + "&"}`;

      try {
        const fetchDataPerPage = await fetch(
          `${fullUrlSearch}page=${page}&limit=${limit}`
        );
        const fetchDataAll = await fetch(`${fullUrlSearch}`);
        console.log(`${fullUrlSearch}page=${page}&limit=${limit}`);

        const dataAll = await fetchDataAll.json();
        const dataPerPage = await fetchDataPerPage.json();

        set({
          dataPerPage: dataPerPage,
          isLoading: false,
          dataAll: dataAll,
        });
      } catch (e) {
        console.error(e);
        set({ isLoading: false });
      }
    },
    changeParametrsOfSearch: ({
      category,
      color,
      size,
      style,
      title,
      price,
    }: ParametrsOfSearchNotObligateur) => {
      set({
        parametrsOfSearch: {
          category: category || "",
          color: color || "",
          size: size || "",
          style: style || "",
          title: title || "",
          price: price || "",
        },
      });
    },
  }))
);
