"use client";


export default function Home() {
  const todos = [
    {id: 1, title: "Buy bread", done: false},
    {id: 2, title: "Call mum", done: true},
    {id: 3, title: "Call mum", done: true},
    {id: 4, title: "Call mum", done: false},
  ];
  const day = "Monday"
  return (
    <div>
        <h1>My to-dos</h1>
        <p>Today is{day}</p>
    <ul>
        {todos.map((todo) =>( 
            <li key={todo.id} style={{color: todo.done ? "grey" : "black"}}> {todo.done ?  "☑" : "☐"},{todo.title}
        </li>
    ))}
    </ul>
            <p>You have {todos.length} tasks</p>
    </div>
  );
}
