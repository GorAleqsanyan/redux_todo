import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../../redux/slices/todosSlice";
import { memo } from "react";

const TodoBody = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <div className="todo-body">
      {todos &&
        todos.map(({ id, title }) => {
          return (
            <div key={id} className="todo-body-item">
              <p>{title}</p>
              <button
                onClick={() => {
                  dispatch(removeTodo(id));
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default memo(TodoBody);
