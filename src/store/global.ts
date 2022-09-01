import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  alertDialog: {
    show: false,
    msg: '',
  },
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setAlertDialog: (
      state,
      action: PayloadAction<typeof initialState.alertDialog>
    ) => {
      const { alertDialog } = state;
      const { msg, show } = action.payload;

      state.alertDialog = { ...alertDialog, show, msg };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAlertDialog } = globalSlice.actions;

export default globalSlice.reducer;
