import { useState } from "react";

import TodoBody from "./todo-body/TodoBody";
import TodoHead from "./todo-head/TodoHead";

import "./Todo.scss";

const Todo = () => {
  const [value, setValue] = useState("");

  return (
    <div className="todo">
      <TodoHead value={value} setValue={setValue} />
      <TodoBody />
    </div>
  );
};

export default Todo;
