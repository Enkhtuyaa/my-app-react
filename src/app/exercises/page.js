'use client';

import { useState } from 'react';

const FILTERS = ['all', 'active', 'completed'];

export default function TodoBoard() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  // 1. Шинэ task нэмэх
  const handleAdd = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Том/жижиг үсэг харгалзахгүй давхардлыг шалгах
    const exists = todos.some(
      (todo) => todo.title.toLowerCase() === trimmedInput.toLowerCase()
    );

    if (exists) {
      setError('Already on the list');
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: trimmedInput,
      done: false,
    };

    setTodos([newTodo, ...todos]);
    setInput('');
    setError('');
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (error) setError('');
  };

  // 2. Tөлөв солих (Done / Undone)
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // 3. Нэг task устгах
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 4. Хийгдсэн бүх task-ийг устгах
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  // --- Тооцооллууд (State-д хадгалахгүй) ---
  const completedCount = todos.filter((todo) => todo.done).length;
  const activeCount = todos.filter((todo) => !todo.done).length;
  const totalCount = todos.length;

  // Фильтер тус бүрийн тоог авах туслах функц
  const getFilterCount = (type) => {
    if (type === 'all') return totalCount;
    if (type === 'active') return activeCount;
    if (type === 'completed') return completedCount;
    return 0;
  };

  // Сонгогдсон фильтерт тохирох task-уудыг ялгах
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.done;
    if (filter === 'completed') return todo.done;
    return true; // 'all' үед бүгдийг харуулна
  });

  // Фильтерээс хамаарч хоосон үед гарах мессеж
  const getEmptyMessage = () => {
    if (filter === 'active') return 'No active tasks!';
    if (filter === 'completed') return 'No completed tasks!';
    return 'No tasks yet. Add one above!';
  };

  return (
    <div style={{ maxWidth: '450px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>To-Do list</h2>

      {/* Форм */}
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Add a new task..."
        />
        <button type="submit" disabled={!input.trim()}>
          Add
        </button>
      </form>

      {/* Давхардлын алдааны мэдээлэл */}
      {error && <p style={{ color: 'red', marginTop: '4px' }}>{error}</p>}

      {/* Фильтер товчлуурууд (.map() ашиглан хийсэн) */}
      <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
        {FILTERS.map((f) => {
          const isSelected = filter === f;
          const labelCapitalized = f.charAt(0).toUpperCase() + f.slice(1);
          const count = getFilterCount(f);

          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                backgroundColor: isSelected ? 'blue' : 'transparent',
                color: isSelected ? 'white' : 'black',
                border: '1px solid #ccc',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              {labelCapitalized} {count}
            </button>
          );
        })}
      </div>

      {/* Жагсаалт ба хоосон мессеж */}
      <div style={{ marginTop: '20px' }}>
        {filteredTodos.length === 0 ? (
          <p>{getEmptyMessage()}</p>
        ) : (
          <ul>
            {filteredTodos.map((todo) => (
              <li key={todo.id} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span style={{ textDecoration: todo.done ? 'line-through' : 'none', flexGrow: 1 }}>
                  {todo.title}
                </span>

                {/* Зөвхөн дууссан task дээр Delete товч харагдана */}
                {todo.done && (
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Жагсаалт нийтдээ хоосон биш үед доод талын мэдээлэл гарна */}
      {totalCount > 0 && (
        <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>
            {completedCount} of {totalCount} tasks completed
          </span>
          <button onClick={clearCompleted} disabled={completedCount === 0}>
            Clear completed
          </button>
        </div>
      )}
    </div>
  );
}



