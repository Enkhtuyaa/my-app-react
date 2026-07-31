// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [todos, setTodos] = useState([
//     { id: 1, title: "Create PR", done: false },
//     { id: 2, title: "Create PR 2", done: true },
//   ]);

//   return (
//     // <ul>
//     //   {todos.map((todo) => (
//     //     <li key={todo.id}>{todo.title}</li>
//     //   ))}
//     // </ul>
//     {todos.length === 0 ? (
//   <p>No tasks yet. Add one above!</p>
// ) : (
//   <ul>
//     {todos.map((todo) => (
//       <li key={todo.id}>{todo.title}</li>
//     ))}
//   </ul>
// )}
//   );
// }
// function handleAdd() {
//   const newTodo = { id: Date.now(), title: text, done: false };
//   setTodos([...todos, newTodo]); // ✓
//   setText("");
// }
