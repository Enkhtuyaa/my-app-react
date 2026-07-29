"use client";

export default function Home() {
  function handleClick(e) {
    console.log(e);
    console.log("You clicked:", e.target.textContent);
  }

  return (
    <div>
      <h1>Event object</h1>
      <button onClick={handleClick}>Save</button>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}