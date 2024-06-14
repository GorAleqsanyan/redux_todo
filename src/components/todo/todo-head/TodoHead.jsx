import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodos } from "../../../redux/slices/todosSlice";
import { useEffect } from "react";

const TodoHead = ({ value, setValue }) => {
  function handleEnter(e) {
    if (e.keyCode === 13) {
      addTodoFunction();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEnter);

    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  });

  const dispatch = useDispatch();

  function addTodoFunction() {
    // console.log(value);
    if (value.trim()) {
      dispatch(addTodo({ title: value }));
    }

    setValue("");
  }
  return (
    <div className="todo-head">
      <button
        onClick={(e) => {
          dispatch(deleteTodos());
        }}
      >
        Delete all todos
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={addTodoFunction}>Add todo</button>
    </div>
  );
};

export default TodoHead;
