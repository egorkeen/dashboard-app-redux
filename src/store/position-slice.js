import { createSlice } from "@reduxjs/toolkit";

const positionSlice = createSlice({
  name: '@@position',
  reducers: {
    addPosition: (_, action) => action.payload,
  },
  initialState: [],
});

// action
export const { addPosition } = positionSlice.actions;
// reducer
export const positionReducer = positionSlice.reducer;
// selector
export const selectVisiblePositions = (state, filters = []) => {
  if (filters.length === 0) return state.positions;
  return state.positions.filter(pos => {
    const posFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);
    return filters.every(filter => posFilters.includes(filter))
  });
};