import React, { useState } from "react";

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}> Complete</button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
}
function TodoForm({ addTodos }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTodos(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
function App() {
  const [todos, setTodos] = useState([]);

  const addTodos = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          ></Todo>
        ))}

        <TodoForm addTodos={addTodos}></TodoForm>
      </div>
    </div>
  );
}

export default App;

ra20259152134b53800;
