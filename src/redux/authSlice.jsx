import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthentication: false,
  userInfo: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuthentication = true;
      state.userInfo = action.payload;
    },
    setLogout: (state) => {
      state.isAuthentication = false;
      state.userInfo = {};
    },
  },
});

export const { setAuth, setLogout } = authSlice.actions;
export default authSlice.reducer;
