import { useDispatch, useSelector } from "react-redux";
import { changeX } from "./redux/slices/testSlice";
import { changeSalary } from "./redux/slices/userSlice";

import Todo from "./components/todo/Todo";

import "./App.css";

function App() {
  // const x = useSelector((state) => state.test.x);
  // const dispatch = useDispatch();

  // const name = useSelector((state) => state.user.name);
  // const salary = useSelector((state) => state.user.salary);

  // console.log(x);

  return (
    <div className="App">
      {/* <h1>text {x}</h1>
      <h2>
        {name}, du stanum es{" "}
        {salary <= 1000
          ? "qich"
          : salary <= 3000
          ? "normal"
          : salary <= 7000
          ? "shat"
          : "ahagin"}{" "}
        pox
      </h2>
      <h2>{salary}</h2>

      <button
        onClick={() => {
          dispatch(changeX(4));
        }}
      >
        Add
      </button>

      <button
        onClick={() => {
          dispatch(changeSalary(25));
        }}
      >
        Add salary
      </button> */}
      <Todo />
    </div>
  );
}

export default App;
