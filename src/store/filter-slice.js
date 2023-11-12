import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: '@@filter',
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeFilter: (state, action) => state.filter(item => item !== action.payload),
    clearFilter: () => [],
  },
  initialState: [],
})

// action
export const { addFilter, removeFilter, clearFilter } = filterSlice.actions;
// reducer
export const filterReducer = filterSlice.reducer;
// selectors
export const selectFilters = (state) => state.filters;