import { configureStore } from "@reduxjs/toolkit";

import testReducer from "./slices/testSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    test: testReducer,
    user: userReducer,
  },
});

export default store;
