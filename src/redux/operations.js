import { createAsyncThunk } from '@reduxjs/toolkit';
import { CONST } from 'redux/constants';
import axios from 'axios';

axios.defaults.baseURL = CONST.BASE_URL;

export const authHeader = {
  set: token =>
    (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
  clear: () => (axios.defaults.headers.common.Authorization = ''),
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (authdata, thunkAPI) => {
    try {
      const data = await axios.post('users/signup', authdata).then(r => r.data);

      authHeader.set(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (authdata, thunkAPI) => {
    try {
      const data = await axios.post('users/login', authdata).then(r => r.data);

      authHeader.set(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('users/logout');

      authHeader.clear();

      return CONST.initialAuth;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      authHeader.set(thunkAPI.getState().auth.token);

      return await axios.get('users/current').then(r => r.data);
    } catch (error) {
      authHeader.clear();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('contacts').then(r => r.data);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {
    try {
      return await axios.post('contacts', contact).then(r => r.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      return await axios.delete(`contacts/${id}`).then(r => r.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
