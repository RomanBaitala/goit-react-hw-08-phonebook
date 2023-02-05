import { CONST } from '../constants';

import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: CONST.initialFilter,

  reducers: {
    filterSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { filterSearch } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
