import { configureStore } from "@reduxjs/toolkit";

import testReducer from "./slices/testSlice";
import userReducer from "./slices/userSlice";
import todosReducer from "./slices/todosSlice";

const store = configureStore({
  reducer: {
    test: testReducer,
    user: userReducer,
    todos: todosReducer,
  },
});

export default store;
