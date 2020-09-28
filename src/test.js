import React, { useState } from "react";

function Todo({ todo, index }) {
  return <div className="todo">{todo.text}</div>;
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
    const newTodos = [...todos, {text}]
    setTodos(newTodos);
  }
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo}></Todo>
        ))}

        <TodoForm addTodos={addTodos}></TodoForm>
      </div>
    </div>
  );
}

export default App;
