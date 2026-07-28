// function double(n){
//     return n*2
// }
// export default function Home(){
//     return (
//         <div>
//             <h1>Functions</h1>
//             <p>double(5) = {double(5)}</p>
//         </div>
//     )
// }
// function statusText(done){
//     if(done){
//         return "Finished"
//     }
//     return "Still to do"
// }
// export default function Home(){
//     const done = true;
//     return <p>{statusText(done)}</p>
// }

const todos = [
  { id: 1, title: "Buy bread", done: false, priority: "high" },
  { id: 2, title: "Call mum", done: true, priority: "normal" },
  { id: 3, title: "Finish homework", done: false, priority: "low" },
  { id: 4, title: "Water the plants", done: true, priority: "high" },
  { id: 5, title: "Read 10 pages", done: true, priority: "normal" },
];
export function countDone(list) {
  return list.filter((todo) => todo.done).length;
}

export function countLeft(list) {
  return list.length - countDone(list);
}

const priorityLevel = (priority) => {
  //   if (priority == "high") {
  //     return "🔴";
  //   } else if (priority == "normal") {
  //     return "🟡";
  //   } else {
  //     return "⚪️";
  //   }
  

  switch (priority) {
    case "high":
      return "🔴";
    case "normal":
      return "🟡";
    case "low":
      return "⚪️";
  }
};

function formatTitle() {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {priorityLevel(todo.priority)} {todo.done ? "☑" : "☐"}
            {todo.title}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h1>My to-dos</h1>
      <div>{formatTitle()}</div>
      <p>
        {countDone(todos)} done, {countLeft(todos)} left
      </p>
    </div>
  );
}
