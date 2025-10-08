import React, { useContext, useRef } from "react";
import InputTodo from "../components/InputTodo";
import OutputTodo from "../components/OutputTodo";
import { TodoContext } from "../context/TodoContext";

const HomePage = () => {
  const inputRef = useRef();
  const { todos, setTodos } = useContext(TodoContext);

  const handleAdd = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (!value) return;

    const newTodo = { id: Date.now(), text: value, done: false };
    setTodos([newTodo, ...todos]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleEdit = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-[#002A40] px-4 sm:px-6 md:px-8">
      <section className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl shadow-2xl p-5 sm:p-7 md:p-8 bg-[#01324d] rounded-2xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold text-center my-6">
          To-DoList
        </h1>

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
              onEdit={handleEdit}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
