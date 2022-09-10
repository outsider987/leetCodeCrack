import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  user: {
    accessToken: '',
    refreshToken: '',
  },
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<typeof initialState.user>) => {
      const { user } = state;
      const { accessToken, refreshToken } = action.payload;

      state.user = { ...user, accessToken, refreshToken };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken } = globalSlice.actions;

export default globalSlice.reducer;
