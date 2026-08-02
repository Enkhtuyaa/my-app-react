// "use client";


// export default function Home() {
//   const todos = [
//     {id: 1, title: "Buy bread", done: false},
//     {id: 2, title: "Call mum", done: true},
//     {id: 3, title: "Call mum", done: true},
//     {id: 4, title: "Call mum", done: false},
//   ];
//   const day = "Monday"
//   return (
//     <div>
//         <h1>My to-dos</h1>
//         <p>Today is{day}</p>
//     <ul>
//         {todos.map((todo) =>( 
//             <li key={todo.id} style={{color: todo.done ? "grey" : "black"}}> {todo.done ?  "☑" : "☐"},{todo.title}
//         </li>
//     ))}
//     </ul>
//             <p>You have {todos.length} tasks</p>
//     </div>
//   );
// }
"use client";

import { useState } from "react";

export default function Home() {
  const [state, setState] = useState("All");
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [filter, setFilter] = useState("all");

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
    console.log("cicked on active");
    setState("Active");
  };
  const handleCompletedButtonClick = () => {
    console.log("cicked on completed");
    setState("Completed");
  };
  const handleAllButtonClick = () => {
    console.log("cicked on all");
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

  const allTodos = todos.filter((todo) => {
    return todo.status === "All";
  });
  const activeTodos = todos.filter((todo) => {
    return todo.status === "Active";
  });
  const completedTodos = todos.filter((todo) => {
    return todo.status === "Completed";
  });

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
          <button
            className="all-button"
            onClick={handleAllButtonClick}
            style={
              state === "All"
                ? { backgroundColor: "#3c82f6" }
                : { backgroundColor: "grey" }
            }
          >
            All
          </button>
          <button
            className="active-button"
            onClick={handleActiveButtonClick}
            style={
              state === "All"
                ? { backgroundColor: "#3c82f6" }
                : { backgroundColor: "grey" }
            }
          >
            Active
          </button>
          <button
            className="completed-button"
            onClick={handleCompletedButtonClick}
            style={
              state === "All"
                ? { backgroundColor: "#3c82f6" }
                : { backgroundColor: "grey" }
            }
          >
            Completed
          </button>
          {state === "All" && (
            <div>
              {allTodos.map((todo) => {
                return <div key={todo.id}>{todo.title}</div>;
              })}
            </div>
          )}
          {state === "Active" && (
            <div>
              {activeTodos.map((todo) => {
                return <div key={todo.id}>{todo.title}</div>;
              })}{" "}
            </div>
          )}
          {state === "Completed" && (
            <div>
              {completedTodos.map((todo) => {
                return <div key={todo.id}>{todo.title}</div>;
              })}
            </div>
          )}
        </section>

        {todos.length === 0 ? (
          <p className="todolist-text">No tasks yet. Add one above! </p>
        ) : (
          <div className="newtodo">
            {" "}
            {todos.map((todo) => (
              <div className="newtask-text" key={todo.id}>
                <div className="new-box">
                  {" "}
                  <input
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
        <p> {todos.length}</p>
        <footer className="footer-text">
          <p className="powered-by-text">Powered by</p>
          <p className="pinecone-text">Pinecone academy </p>
        </footer>
      </main>
    </div>
  );
}
