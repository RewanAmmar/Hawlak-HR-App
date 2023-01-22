import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {    
    key: localStorage.getItem("key"),
  },
  reducers: {
    login(state, action) {
      localStorage.setItem("key", action.payload.key);
      state.key = action.payload.key;
    },

    logout(state) {
      localStorage.removeItem("key");
      state.key = localStorage.getItem("key");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
