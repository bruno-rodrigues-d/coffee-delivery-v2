// src/features/filters/filtersSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  activeFilters: string[];
}

const initialState: FiltersState = {
  activeFilters: [],
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFilter: (state, action: PayloadAction<string>) => {
      const filter = action.payload;
      if (state.activeFilters.includes(filter)) {
        state.activeFilters = state.activeFilters.filter(f => f !== filter);
      } else {
        state.activeFilters.push(filter);
      }
    },
    clearFilters: (state) => {
      state.activeFilters = [];
    },
  },
});

export const { toggleFilter, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
