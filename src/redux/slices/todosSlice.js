import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      state.todos.push({
        id:
          state.todos.length === 0
            ? 1
            : state.todos[state.todos.length - 1].id + 1,
        title: payload.title.trim(),
      });
    },
    deleteTodos(state, { payload }) {
      state.todos = [];
    },
    removeTodo(state, { payload }) {
      state.todos = state.todos.filter((item) => {
        return item.id !== payload;
      });
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, deleteTodos, removeTodo } = todosSlice.actions;
