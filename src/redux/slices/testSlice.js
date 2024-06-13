import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  x: 10,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    changeX(state, { payload }) {
      console.log("123");
      state.x = state.x + (payload ? payload : 1);
    },
  },
});

export default testSlice.reducer;
export const { changeX } = testSlice.actions;
