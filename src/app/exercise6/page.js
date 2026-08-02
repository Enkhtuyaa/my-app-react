// "use client";

// export default function Home() {
//   function handleClick(e) {
//     console.log(e);
//     console.log("You clicked:", e.target.textContent);
//   }

//   return (
//     <div>
//       <h1>Event object</h1>
//       <button onClick={handleClick}>Save</button>
//       <button onClick={handleClick}>Delete</button>
//     </div>
//   );
// }

"use client";

import { useState } from "react";

export default function Page() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const trimmedText = text.trim();
  const isEmpty = trimmedText === "";
  const isTooLong = text.length > 40;

  const isDuplicate = todos.some(
    (todo) => todo.title.toLowerCase() === trimmedText.toLowerCase()
  );

  function handleAdd(e) {
    e.preventDefault();
    if (isEmpty || isTooLong || isDuplicate) return;

    const newTodo = {
      id: Date.now(),
      title: text,
      done: false,
    };

    setTodos([newTodo, ...todos]);
    setText("");
  }

  function handleToggle(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleClearCompleted() {
    setTodos(todos.filter((todo) => !todo.done));
  }

  // Тоолуурууд
  const activeCount = todos.filter((todo) => !todo.done).length;
  const completedCount = todos.filter((todo) => todo.done).length;

  // Шүүлтүүрээс хамаарч харагдах жагсаалт
  const visible = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  // Шүүлтүүрийн хоосон үед харуулах текст
  function emptyMessage() {
    if (todos.length === 0) return "No tasks yet. Add one above!";
    if (filter === "active") return "Nothing left to do.";
    return "Nothing completed yet.";
  }

  // Фильтрийн товчнуудын мэдээлэл
  const filtersInfo = [
    { key: "all", label: "All", count: todos.length },
    { key: "active", label: "Active", count: activeCount },
    { key: "completed", label: "Completed", count: completedCount },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "400px" }}>
      <h1>To-Do list</h1>

      <form onSubmit={handleAdd} style={{ display: "flex", gap: "8px" }}>
        <input
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" disabled={isEmpty || isTooLong || isDuplicate}>
          Add
        </button>
        <button type="button" onClick={() => setText("")} disabled={text.length === 0}>
          Clear
        </button>
      </form>

      {isDuplicate && <p style={{ color: "red" }}>Already on the list</p>}

      {/* Фильтр товчнууд */}
      <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
        {filtersInfo.map((item) => {
          const isActive = filter === item.key;
          return (
            <button
              key={item.key}
              onClick={() => setFilter(item.key)}
              style={{
                backgroundColor: isActive ? "#4f46e5" : "#e5e7eb",
                color: isActive ? "white" : "#374151",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {item.label} {item.count}
            </button>
          );
        })}
      </div>

      {/* Жагсаалт */}
      <div style={{ marginTop: "16px" }}>
        {visible.length === 0 ? (
          <p>{emptyMessage()}</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {visible.map((todo) => (
              <li
                key={todo.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleToggle(todo.id)}
                />
                <span
                  style={{
                    textDecoration: todo.done ? "line-through" : "none",
                  }}
                >
                  {todo.title}
                </span>
                {todo.done && (
                  <button onClick={() => handleDelete(todo.id)}>Delete</button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Доод хэсгийн тоолуур & Clear Completed */}
      {todos.length > 0 && (
        <div
          style={{
            marginTop: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ margin: 0 }}>
            {completedCount} of {todos.length} tasks completed
          </p>
          <button
            onClick={handleClearCompleted}
            disabled={completedCount === 0}
          >
            Clear completed
          </button>
        </div>
      )}
    </div>
  );
}