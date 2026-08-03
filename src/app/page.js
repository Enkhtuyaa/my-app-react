"use client";

import { useState } from "react";
import { TodoButton } from "./components/Todo-Button";

function checkLocal() {
  const todos =
    typeof window !== "undefined" ? localStorage.getItem("todos") : null;

  if (todos) {
    return JSON.parse(todos);
  } else {
    return [];
  }
}
export default function Home() {
  const [state, setState] = useState("All");
  const [todos, setTodos] = useState(checkLocal());
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

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
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
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
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
          <TodoButton
            text="Add"
            className="add-button"
            onClick={handleAddButtonClick}
          />
        </header>
        {errorMessage !== "" && (
          <div style={{ color: "red" }}>{errorMessage}</div>
        )}
        <section className="section">
          <TodoButton
            onClick={() => setState("All")}
            text="All"
            className="all-button"
            stateValue={state}
          />

          <TodoButton
            onClick={() => setState("Active")}
            text="Active"
            className="active-button"
            stateValue={state}
          />

          <TodoButton
            onClick={() => setState("Completed")}
            text="Completed"
            className="completed-button"
            stateValue={state}
          />
        </section>

        {filteredTodos.length === 0 ? (
          <p className="todolist-text">{emptyMessage()} </p>
        ) : (
          <div className="newtodo">
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
                {/* <button
                  onClick={() => handleDelete(todo.id)}
                  className="delete-text"
                >
                  Delete
                </button>{" "} */}
                <TodoButton
                  text="Delete"
                  className="delete-text"
                  onClick={() => handleDelete(todo.id)}
                />
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
