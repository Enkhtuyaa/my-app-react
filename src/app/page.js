"use client";

import { useState } from "react";

export default function Home() {
  const [state, setState] = useState("All");
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const handleAddButtonClick = () => {
    // inputValue "" bol aldaanii msg haruulna
    if (inputValue.trim() === "") {
      setErrorMessage("please enter todo");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: inputValue,
      status: "Active",
      isDone: false,
    };

    // console.log("newTodo: ", newTodo);
    // console.log("button clicked")
    setTodos([...todos, newTodo]);

    setInputValue("");
  };
  console.log(todos, "hello");
  // console.log("this is  the todo", todos);
  const handleActiveButtonClick = () => {
    setState("Active");
  };
  const handleCompletedButtonClick = () => {
    setState("Completed");
  };
  const handleAllButtonClick = () => {
    setState("All");
  };
  function handleToggle(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }
  function handleAdd() {
    const newTodo = { id: Date.now(), title: inputValue, done: false };
    setTodos([...todos, newTodo]);
    setText("");
  }
  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  const doneCount = todos.filter((todo) => todo.done).length;
  // console.log(state, "this is the state");
  // console.log(handleActiveButtonClick)
  return (
    <div className="container">
      <main className="todolist-card">
        <h1 className="title">To-Do list</h1>
        <header className="container">
          <input
            className="search-input"
            placeholder="Add a new task..."
            onChange={handleInputChange}
            value={inputValue}
          />
          {errorMessage !== "" && <div>{errorMessage}</div>}
          <button className="add-button" onClick={handleAddButtonClick}>
            Add
          </button>
        </header>
        <section className="section">
          <button className="all-button" onClick={handleAllButtonClick}>
            All
          </button>
          <button className="active-button" onClick={handleActiveButtonClick}>
            Active 
          </button>
          <button
            className="completed-button"
            onClick={handleCompletedButtonClick}
          >
            Completed
          </button>
        </section>
        {todos.length === 0 ? (
          <p className="todolist-text">No tasks yet. Add one above!</p>
        ) : (
          <div className="newtodo">
            {" "}
            {todos.map((todo) => (
              <div className="newtask-text" key={todo.id}> 
              <div className="new-box"> <input
                  className="check-box"
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleToggle(todo.id)}
                />
                <p
                  style={{
                    textDecoration: todo.done ? "line-through" : "none",
                  }}
                >
                  {todo.title}
                </p>
                </div>
                
              
                  {" "}
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="delete-text"
                  >
                    Delete
                  </button>{" "}
               </div>
            ))}
          </div>
        )}
        <footer className="footer-text">
          <p className="powered-by-text">Powered by</p>
          <p className="pinecone-text">Pinecone academy </p>
        </footer>
      </main>
    </div>
  );
}
