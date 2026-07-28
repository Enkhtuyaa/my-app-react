// "use client";

// export default function Page() {
//   function sayHi() {
//     console.log("Hi!");
//   }

//   function sayBye() {
//     console.log("Bye!");
//   }

//   function greet(name) {
//     console.log("Hello, " + name);
//   }

//   return (
//     <div>
//       <h1>My buttons</h1>
//       <button onClick={sayHi}>Say hi</button>
//       <button onClick={sayBye}>Say bye</button>
//       <button onClick={() => greet("Aida")}>Greet Aida</button>
//       <button onClick={() =>  greet("Bekzat")}>Greet Bekzat</button>
//       <button onClick={() => console.log("clicked!")}>Log</button>
//     </div>
//   );
// }
"use client";

function handleDone() {
  const title = "Buy bread";
  const wasDone = false;
  console.log("Task:", title);
  console.log("Changing done from", wasDone, "to", !wasDone);
  return (
    <div>
 <button onClick = {()=> console.log("Task:", title)}> Click</button>
    </div>
   
  )
}

export default function Home() {
  return (
    <div>
      <button onClick={() => console.log("click")}>Click</button>
      <button onDoubleClick={() => console.log("double click")}>Double click</button>
      <p onMouseEnter={() => console.log("mouse came in")}>Hover over me</p>
      <button onMouseLeave={() => console.log("mouse left")}>Leave me</button>
    </div>
  );
}
// "use client";

// const todos = [
//   { id: 1, title: "Buy bread" },
//   { id: 2, title: "Call mum" },
// ];

// export default function Home() {
//   function handleDelete(id) {
//     console.log("delete task", id);
//   }

//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>
//           {todo.title}
//           <button onClick={() => handleDelete(todo.id)}>delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// }

