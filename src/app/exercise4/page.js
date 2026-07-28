import { format, addDays, differenceInCalendarDays } from "date-fns";

export const todos = [
  { id: 1, title: "Buy bread", done: false, due: new Date(2026, 6, 20) },
  { id: 2, title: "Call mum", done: true, due: new Date(2026, 7, 3) },
  { id: 3, title: "Finish homework", done: false, due: new Date(2026, 8, 20) },
  { id: 4, title: "Read 10 pages", done: false, due: new Date(2026, 11, 15) },
];

// огноог зөв форматаар харуулж буй функц
function formatDate(date) {
  const formattedDate = format(date, "dd MMMM yyyy");
  console.log("formatDate", formattedDate);
  return formattedDate;
}

// хоёр огноог харьцуулаад ялгааг тоогоор буцааж буй функц
function daysLeft(date) {
  const difference = differenceInCalendarDays(date, new Date());
  console.log("daysLeft", difference);
  return difference;
}

// дээрх функцийн буцаасан тоог шалгаад тохирох утгыг буцааж буй функц
function dueText(date) {
  const days = daysLeft(date);
  console.log("DAYS", days);

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
            {todo.done ? "☑" : "☐"}
            {todo.title}- {formatDate(todo.due)} {dueText(todo.due)}
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
