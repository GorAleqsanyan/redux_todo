import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Joe",
  salary: 1000,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeSalary(state, { payload }) {
      if (payload) {
        state.salary += Math.round((state.salary * payload) / 100);
      }
    },
  },
});

export default userSlice.reducer;
export const { changeSalary } = userSlice.actions;
