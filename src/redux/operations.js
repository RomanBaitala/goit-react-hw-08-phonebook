import axios from 'axios';
import { CONST } from './constants';
import { createAsyncThunk } from '@reduxjs/toolkit/dist';

axios.defaults.baseURL = CONST.BASE_URL;

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('contacts');
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post('contacts', contact);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`contacts/${id}`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
