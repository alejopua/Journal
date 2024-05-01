import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 10,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

export const { increment } = authSlice.actions;
