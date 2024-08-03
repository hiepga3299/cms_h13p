import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  message: "",
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToast: (state, action) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    clearToast: (state) => {
      state.type = "";
      state.message = "";
    },
  },
});

export const { setToast, clearToast } = toastSlice.actions;
export default toastSlice.reducer;
