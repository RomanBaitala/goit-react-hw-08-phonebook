// import { fetchContacts, addContact, deleteContact } from 'redux/operations';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const { createSlice } = require('@reduxjs/toolkit');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],

  extraReducers: {
    [addContact.pending]: state => state,
    [addContact.rejected]: state => state,
    [addContact.fulfilled]: (state, action) => {
      state.push(action.payload);
    },

    [deleteContact.pending]: state => state,
    [deleteContact.rejected]: state => state,
    [deleteContact.fulfilled]: state => state,

    [fetchContacts.pending]: state => state,
    [fetchContacts.rejected]: state => state,
    [fetchContacts.fulfilled]: (_, action) => action.payload,
  },
});

export const contactsReducer = contactsSlice.reducer;
