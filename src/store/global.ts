import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  alertDialog: {
    show: boolean;
    msg: string;
  };
}

const initialState: CounterState = {
  alertDialog: {
    show: false,
    msg: '',
  },
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setAlertDialog: (state, action: PayloadAction<CounterState>) => {
      state.alertDialog = action.payload.alertDialog;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAlertDialog } = globalSlice.actions;

export default globalSlice.reducer;
