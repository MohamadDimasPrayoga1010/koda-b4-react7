import React from "react";

const InputTodo = ({ inputRef, handleAdd }) => {
  return (
    <form className="flex gap-3" onSubmit={handleAdd}>
      <input
        ref={inputRef}
        type="text"
        autoComplete="off"
        placeholder="Masukan Nama Tugas"
        name="todo-name"
        className="border border-gray-700 text-white w-lg rounded pl-3 bg-transparent"
      />
      <button
        type="submit"
        className="py-2 px-3 rounded font-bold text-white bg-amber-400 hover:bg-amber-500 cursor-pointer"
      >
        ADD
      </button>
    </form>
  );
};

export default InputTodo;
