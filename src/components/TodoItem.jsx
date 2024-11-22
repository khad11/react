const TodoItem = ({ todo, setTodos }) => {
  const changeStatus = (id) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (id == todo.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id != id);
    });
  };

  return (
    <li>
      <h4 key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
        {todo.title}
      </h4>
      <div className="buttons">
        {!todo.completed && (
          <button onClick={() => changeStatus(todo.id)}>bajarildi</button>
        )}
        {todo.completed && (
          <button onClick={() => changeStatus(todo.id)}>qaytarish</button>
        )}
        <button onClick={() => deleteTodo(todo.id)}>O'chirish</button>
      </div>
    </li>
  );
};
export default TodoItem;
