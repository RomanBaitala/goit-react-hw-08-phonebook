import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from '../operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => state)
      .addCase(fetchContacts.fulfilled, (_, action) => {
        action.payload;
      })
      .addCase(fetchContacts.rejected, state => state)

      .addCase(addContact.pending, state => state)
      .addCase(addContact.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(addContact.rejected, state => state)

      .addCase(deleteContact.pending, state => state)
      .addCase(deleteContact.fulfilled, state => state)
      .addCase(deleteContact.rejected, state => state);
  },
});

export const contactReducer = contactsSlice.reducer;
