import { format, addDays, differenceInCalendarDays } from "date-fns";

export const todos = [
  { id: 1, title: "Buy bread", done: false, due: new Date(2026, 6, 20) },
  { id: 2, title: "Call mum", done: true, due: new Date(2026, 7, 3) },
  { id: 3, title: "Finish homework", done: false, due: new Date(2026, 8, 20) },
  { id: 4, title: "Read 10 pages", done: false, due: new Date(2026, 11, 15) },
];

function formatDate(date){
    return  format(date, "dd MMMM yyyy")
}
function daysLeft(date){
   return differenceInCalendarDays(date, new Date());
} 
export function dueText(date) {
  const days = daysLeft(date);

  if (days === 0) {
    return "today!";
  } else if (days < 0) {
    return `${Math.abs(days)} days late`;
  } else {
    return `${days} days left`;
  }
}

function formatTitle() {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
             {todo.done ? "☑" : "☐"}{todo.title}- {formatDate(todo.due)} {dueText(todo.due)}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default function Home() {
  const today = new Date();
  const exam = new Date(2026, 11, 15); // careful: 11 means December

  return (
    <div>
      <h1> My to-dos</h1>
       <div>{formatTitle()}</div>
      <p>Today: {formatDate(today)}</p>
    </div>
  );
}
