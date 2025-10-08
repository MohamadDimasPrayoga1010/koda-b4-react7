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
    <main
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center
                 gap-3 sm:gap-4 my-4 p-3 bg-[#024261] rounded-lg shadow-md transition-all duration-300
                 hover:shadow-xl hover:bg-[#035377]"
    >
      <section className="flex gap-4 items-center w-full sm:w-auto">
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
            className="flex-1 bg-transparent border-b border-gray-400 text-white focus:outline-none
                       placeholder-gray-300 text-base sm:text-lg"
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

      <div className="flex gap-2 w-full sm:w-auto justify-end">
        <button
          onClick={handleEdit}
          className="py-1.5 px-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white 
                     font-medium cursor-pointer transition-all duration-200 w-full sm:w-auto"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="py-1.5 px-4 rounded-md bg-red-400 hover:bg-red-500 text-red-800 hover:text-white font-medium cursor-pointer transition-all duration-200 w-full sm:w-auto"
        >
          Delete
        </button>
      </div>
    </main>
  );
};

export default OutputTodo;
