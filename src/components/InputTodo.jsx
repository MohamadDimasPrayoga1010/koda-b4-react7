import React from "react";

const InputTodo = ({ inputRef, handleAdd }) => {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full"
      onSubmit={handleAdd}
    >
      <input
        ref={inputRef}
        type="text"
        autoComplete="off"
        placeholder="Masukan Nama Tugas"
        name="todo-name"
        className="flex-1 border border-gray-600 text-white rounded-lg px-3 py-2 bg-transparent placeholder-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200"
      />
      <button
        type="submit"
        className="py-2 px-3 rounded font-bold text-white bg-amber-400 hover:bg-amber-500 cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
      >
        ADD
      </button>
    </form>
  );
};

export default InputTodo;
