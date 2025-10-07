import React from "react";

const OutputTodo = ({ todo, onDelete, onToggle }) => {
  return (
    <>
      <main className="flex justify-between my-5">
        <section className="flex gap-4 items-center">
          <input
            type="checkbox"
            id={`todo-${todo.id}`}
            className="w-5 h-5 accent-amber-400 cursor-pointer"
            checked={todo.done}
            onChange={() => onToggle(todo.id)}
          />
          <label
            htmlFor={`todo-${todo.id}`}
            className={`text-lg transition-all duration-200 ${
              todo.done
                ? "text-[#96A78D] line-through"
                : "text-white no-underline"
            }`}
          >
            {todo.text}
          </label>
        </section>
        <button
          onClick={() => onDelete(todo.id)}
          className="py-2 px-3 rounded bg-red-400 hover:bg-red-500 text-red-800 hover:text-white font-normal cursor-pointer"
        >
          Delete
        </button>
      </main>
    </>
  );
};

export default OutputTodo;
