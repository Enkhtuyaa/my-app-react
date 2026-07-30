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
  // console.log(state, "this is the state");
  // console.log(handleActiveButtonClick)
  return (
    <div className="container">
      <main className="todolist-card">
        <h1 className="title">To-Do-list</h1>
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
        {/* {state === "All" && <div>State now is All</div>}
        {state === "Active" && <div>State now is Active</div>}
        {state === "Completed" && <div>State now is completed</div>} */}
        {/* {todos.length === 0 ? (
          <h2 className="todolist-text">No tasks yet. Add one above!</h2>
        ) : (
          <div className="newtodo">
            {todos.map((todo) => (
             <div></div> <li key={todo.id}>{todo.title}</li>
            ))}
          </div>
        )} */}

        <footer className="footer-text">
          <h3 className="powered-by-text">Powered by</h3>
          <h4 className="pinecone-text">Pinecone academy</h4>
        </footer>
      </main>
    </div>
  );
}
