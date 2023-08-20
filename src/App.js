import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
      today: new Date().toLocaleString(),
    };
    console.log(newTodo.today);

    // Adding todo to the list
    setList([...list, newTodo]);

    // Clearing the input
    setInput("");
  };

  const deleteTodo = (id) => {
    // Filtering out todo with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <section className="form">
        <input
          type="text"
          className="form-control"
          placeholder="Add new todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="form-control" onClick={() => addTodo(input)}>
          Add
        </button>
      </section>
      <ul className="list">
        {list.map((todo) => (
          <li ket={todo.id} className="todo-item">
            <div className="todo-item__row">
              {todo.todo}
              <button onClick={() => deleteTodo(todo.id)} className="form-btn">
                &times;
              </button>
            </div>
            <div className="todo-item__row">{todo.today}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
