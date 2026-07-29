"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState(" ");

  return (
    <div className="container">
      <main className="todolist-card">
         <h1 className="title">To-Do-list</h1>
          <header className="container">
            <input className="search-input" placeholder="Add a new task..." />
            <button className="add-button">Add</button>
           </header>
               <section className="section">
                  <button className="all-button">All</button>
                  <button className="active-button">Active</button>
                  <button className="completed-button">Completed</button>
                </section>
                   <h2 className="todolist-text">No tasks yet. Add one above!</h2>
                    <footer className="footer-text">
                      <h3 className="powered-by-text">Powered by</h3>
                      <h4 className="pinecone-text">Pinecone academy</h4>
                     </footer>
      </main>
    </div>
  );
}
