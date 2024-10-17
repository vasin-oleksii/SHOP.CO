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

interface ParametrsOfSearch {
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

export const useCategoryState = create<CategoryState>((set, get) => ({
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

    // ? `${categoryOfSearch}=${valueOfSearch}&`
    const { parametrsOfSearch } = get();

    const urlParams = new URLSearchParams();

    if (parametrsOfSearch.category) {
      urlParams.append("category", parametrsOfSearch.category);
    }
    if (parametrsOfSearch.color) {
      urlParams.append("color", parametrsOfSearch.color);
    }
    if (parametrsOfSearch.size) {
      urlParams.append("size", parametrsOfSearch.size);
    }
    if (parametrsOfSearch.style) {
      urlParams.append("style", parametrsOfSearch.style);
    }
    if (parametrsOfSearch.title) {
      urlParams.append("title", parametrsOfSearch.title);
    }
    if (parametrsOfSearch.price) {
      urlParams.append("price", parametrsOfSearch.price);
    }

    const baseUrl = `https://67051c76031fd46a830eaefe.mockapi.io/api/v1/products?`;
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
}));
