"use client";

import { createTodo } from "../api/todos/createTodo";
import { useCounter } from "../context/provider";

const TodoCreator = () => {
  const [count, setCount] = useCounter();

  return (
    <>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100 hover:bg-gray-500 hover:text-white"
        >
          {count} Clicks
        </button>
      </div>
      <input
        className="p-2 border-2 w-full rounded-md mb-5 outline-none focus-visible:border-blue-300 focus-visible:border-2"
        type="text"
        placeholder="Create a todo item!"
      />
      <button
        onClick={async () => {
          const todosData = createTodo();
          const [todo] = await Promise.all([todosData]);
          console.log(todo);
        }}
      >
        Create
      </button>
    </>
  );
};

export default TodoCreator;
