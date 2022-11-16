import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  user: {
    accessToken: '',
    refreshToken: '',
  },
  // tokenConfig: {
  //   tokenExpiredTime: 10,
  //   tokeType: 'access',
  // },
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
    // setTokenConfig: (state, action: PayloadAction<typeof initialState.tokenConfig>) => {
    //   // const { tokenExpiredTime } = state.tokenConfig;
    //   // state.tokenConfig = {
    //   //   ...state.tokenConfig,
    //   //   tokenExpiredTime: action.payload.tokenExpiredTime,
    //   //   tokeType: action.payload.tokeType,
    //   // };
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setToken } = globalSlice.actions;

export default globalSlice.reducer;
