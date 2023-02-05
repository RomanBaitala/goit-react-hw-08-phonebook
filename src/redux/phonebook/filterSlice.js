// import { fetchContacts, addContact, deleteContact } from 'redux/operations';
import { CONST } from '../constants';

const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filter',
  initialState: CONST.initialFilter,

  reducers: {
    filterSearch: (state, action) => {
      // console.log(`"${action.payload}"`);
      state.search = action.payload;
    },
  },
});

export const { filterSearch } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
