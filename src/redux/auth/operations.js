import axios from 'axios';
import { CONST } from 'redux/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = CONST.BASE_URL;

//============set token============//

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//============clear token============//

const removeAuthToken = token => {
  axios.defaults.headers.common.Authorization = '';
};

//============register============//

export const register = createAsyncThunk(
  'auth/register',
  async (authData, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', authData);
      setAuthToken(res.data.token);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

//============login============//

export const logIn = createAsyncThunk(
  'auth/login',
  async (authData, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', authData);
      setAuthToken(res.data.token);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

//============logout============//

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    removeAuthToken();
    return CONST.initialAuth;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

//============refresh============//

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(
        Notiflix.Notify.failure('Unable to fetch user')
      );
    }

    try {
      setAuthToken(persistedToken);
      const res = await axios.get('/users/me');
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
