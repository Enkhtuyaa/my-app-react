"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(count + 1);
  };
  return (
    <div id="">
      {count} this the state
      <button onClick={handleButtonClick}> Changenpm state</button>
    </div>);
}
