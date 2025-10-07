import React, { useState } from "react";

const OutputTodo = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <main className="flex justify-between my-5">
      <section className="flex gap-4 items-center">
        <input
          type="checkbox"
          id={`todo-${todo.id}`}
          className="w-5 h-5 accent-amber-400 cursor-pointer"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />

        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="bg-transparent border-b border-gray-400 text-white focus:outline-none"
            autoFocus
          />
        ) : (
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
        )}
      </section>

      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="py-1 px-3 rounded bg-blue-400 hover:bg-blue-500 text-white font-normal cursor-pointer"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="py-1 px-3 rounded bg-red-400 hover:bg-red-500 text-red-800 hover:text-white font-normal cursor-pointer"
        >
          Delete
        </button>
      </div>
    </main>
  );
};

export default OutputTodo;
