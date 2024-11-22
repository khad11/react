import { useState } from "react";

import TodoList from "./components/TodoList";
import FormTodo from "./components/FormTodo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "clean room ",
      completed: false,
    },
    {
      id: 2,
      title: " washing dishes",
      completed: true,
    },
  ]);

  // ADD TODO
  const addTodo = (todo) => {
    setTodos((prev) => {
      return [...prev, todo];
    });
  };
  return (
    <>
      <div className="container">
        <div className="main">
          <h1>To-do list </h1>
          <FormTodo addTodo={addTodo} />
          <div className="todos-main">
            <TodoList todos={todos} setTodos={setTodos} />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
