import React, { useEffect, useRef, useState } from "react";
import InputTodo from "./components/InputTodo";
import OutputTodo from "./components/OutputTodo";


const App = () => {
  const inputRef = useRef();
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const handleAdd = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (!value) return;

    const newTodo = {
      id: Date.now(),
      text: value,
      done: false,
    };

    setTodos([newTodo, ...todos]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };


  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-[#002A40]">
      <section className="w-lg shadow-2xl p-4 bg-[#01324d] rounded">
        <h1 className="text-3xl text-white my-5">To-DoList</h1>

        <InputTodo inputRef={inputRef} handleAdd={handleAdd} />

        <div>
          {todos.length === 0 && (
            <p className="flex items-center justify-center text-white my-5 text-lg font-light">
              Belum ada tugas yang dibuat
            </p>
          )}

          {todos.map((todo) => (
            <OutputTodo
              key={todo.id}
              todo={todo}
              onDelete={handleDelete}
              onToggle={completeTodo}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
