"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const name = "Aida";
  const taskCount = 3;
  return (
    <div>
      <h1>Hello {name}</h1>
      <p> You have {taskCount} tasks</p>
      <p>Tomorrow you will have {taskCount + 1}</p>
      <p>Your name has {name.length} letters</p>
    </div>
  );
}
