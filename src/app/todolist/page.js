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
      done: false,
    };

    // console.log("newTodo: ", newTodo);
    // console.log("button clicked")
    setTodos([...todos, newTodo]);
    setInputValue("");
    setErrorMessage("");
  };
  const doneCount = todos.filter((todo) => todo.done).length;
  // console.log(todos, "hello");
  // console.log("this is  the todo", todos);
  const filteredTodos = todos.filter((todo) => {
    if (state === "Active") return !todo.done;
    if (state === "Completed") return todo.done;
    return true;
  });
  function handleToggle(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function handleClearCompleted() {
    setTodos(todos.filter((todo) => !todo.done));
  }
  // console.log(handleClearCompleted, "clearclicked")

  function emptyMessage() {
    if (todos.length === 0) return "No tasks yet. Add one above!";
    if (state === "Active") return "Nothing left to do.";
    if (state === "Completed") return "Nothing completed yet.";
    return "";
  }

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
          <button className="add-button" onClick={handleAddButtonClick}>
            Add
          </button>
        </header>
        {errorMessage !== "" && (
          <div style={{ color: "red" }}>{errorMessage}</div>
        )}
        <section className="section">
          <button
            className="all-button"
            onClick={() => setState("All")}
            style={{
              backgroundColor: state === "All" ? "#3c82f6" : "#F3F4F6",
              color: state === "All" ? "white" : "black",
            }}
          >
            All
          </button>
          <button
            className="active-button"
            onClick={() => setState("Active")}
            style={{
              backgroundColor: state === "Active" ? "#3c82f6" : "#F3F4F6",
              color: state === "Active" ? "white" : "black",
            }}
          >
            Active
          </button>
          <button
            className="completed-button"
            onClick={() => setState("Completed")}
            style={{
              backgroundColor: state === "Completed" ? "#3c82f6" : "#F3F4F6",
              color: state === "Completed" ? "white" : "black",
            }}
          >
            Completed
          </button>
        </section>

        {filteredTodos.length === 0 ? (
          <p className="todolist-text">{emptyMessage()} </p>
        ) : (
          <div className="newtodo">
            {" "}
            {filteredTodos.map((todo) => (
              <div className="newtask-text" key={todo.id}>
                <div className="new-box">
                  {" "}
                  <input
                    className="check-box"
                    type="checkbox"
                    checked={todo.done || false}
                    onChange={() => handleToggle(todo.id)}
                  />
                  <p
                    style={{
                      textDecoration: todo.done ? "line-through" : "none",
                    }}
                  >
                    {todo.title}
                  </p>
                </div>{" "}
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
        {doneCount > 0 && (
          <div className="task-completed">
            <span className="donecount-text">
              {doneCount} of {todos.length} tasks completed
            </span>
            <button className="clear-text" onClick={handleClearCompleted}>
              Clear completed
            </button>
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
