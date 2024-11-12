import { devtools } from "zustand/middleware";
import { create } from "zustand";

interface FilterState {
  showFilter: boolean;
  toggleShowFilter: () => void;
}

export const useFilterState = create<FilterState>()(
  devtools((set) => ({
    showFilter: false,
    
    toggleShowFilter: () => {
      set((state) => ({ showFilter: !state.showFilter }));
    },
  }))
);
