import { CONST } from 'redux/constants';
import { loginUser, logoutUser, refreshUser, registerUser } from 'redux/operations';

const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: CONST.initialAuth,
  extraReducers: builder =>
    builder
      .addCase(registerUser.pending, state => state)
      .addCase(registerUser.rejected, state => state)
      .addCase(registerUser.fulfilled, (_, action) => action.payload)

      .addCase(loginUser.pending, state => state)
      .addCase(loginUser.rejected, state => state)
      .addCase(loginUser.fulfilled, (_, action) => action.payload)

      .addCase(refreshUser.pending, state => state)
      .addCase(refreshUser.rejected, () => CONST.initialAuth)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })

      .addCase(logoutUser.pending, state => state)
      .addCase(logoutUser.rejected, state => state)
      .addCase(logoutUser.fulfilled, () => CONST.initialAuth),
});

export const authReducer = authSlice.reducer;
