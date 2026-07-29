// "use client";

// export default function Page() {
//   let count = 0;

//   function add() {
//     count = count + 1;
//     console.log("count is now", count);
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={add}>+1</button>
//     </div>
//   );
// }
// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [count, setCount] = useState(0);
// console.log("component ran, count =", count)
//   function add() {
//     setCount(count + 1);
//   }

//   return (
    
//     <div>
//       <h1>{count}</h1>
//       <button onClick={add}>+1</button>
//     </div>
//   );
// }
"use client"
import {useState} from "react"
export default function Page(){
    const [count, setCount] = useState(0)
    
    console.log(count)
   return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
// const [isOpen, setIsOpen] = useState(false);

// return (
//   <div>
//     <button onClick={() => setIsOpen(!isOpen)}>
//       {isOpen ? "Hide" : "Show"}
//     </button>
//     {isOpen ? <p>Now you can see me.</p> : null}
//   </div>
// );


}
