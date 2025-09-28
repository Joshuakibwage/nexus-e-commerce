import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState } from '@/types';

const initialState: FilterState = {
  selectedCategory: null,
  sortOrder: null,
  searchQuery: '',
};

const filterSlice = createSlice({
    
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc' | null>) => {
      state.sortOrder = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    clearFilters: (state) => {
      state.selectedCategory = null;
      state.sortOrder = null;
      state.searchQuery = '';
    },
  },
});

export const { setCategory, setSortOrder, setSearchQuery, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;