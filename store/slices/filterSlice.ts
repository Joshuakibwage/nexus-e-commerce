import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    selectedCategory: string | null;
    sortOrder: 'asc' | 'desc' | null;
}

const initialState: FilterState = {
    selectedCategory: null,
    sortOrder: null,
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
    },
});

export const { setCategory, setSortOrder } = filterSlice.actions;
export default filterSlice.reducer;