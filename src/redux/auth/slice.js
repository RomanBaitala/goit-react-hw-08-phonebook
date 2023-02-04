import { createSlice } from '@reduxjs/toolkit';
import { CONST } from 'redux/constants';
import { register, logIn, logOut, refreshUser } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: CONST.initialAuth,
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => state)
      .addCase(register.fulfilled, (_, action) => action.payload)
      .addCase(register.rejected, state => state)

      .addCase(logIn.pending, state => state)
      .addCase(logIn.fulfilled, (_, action) => action.payload)
      .addCase(logIn.rejected, state => state)

      .addCase(logOut.pending, state => state)
      .addCase(logOut.fulfilled, () => CONST.initialAuth)
      .addCase(logOut.rejected, state => state)

      .addCase(refreshUser.pending, state => state)
      .addCase(
        refreshUser.fulfilled,
        (state, action) => (state.user = action.payload)
      )
      .addCase(refreshUser.rejected, () => CONST.initialAuth),
});

export const authReducer = authSlice.reducer;
