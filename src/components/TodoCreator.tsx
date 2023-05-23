"use client";

import { createTodo } from "@/app/api/todos/createTodo";
import { useTodos } from "@/context/todos.provider";

const TodoCreator = () => {
  const { state, dispatch } = useTodos();

  return (
    <>
      <input
        className="p-2 border-2 w-full rounded-md mb-5 outline-none focus-visible:border-blue-300 focus-visible:border-2"
        type="text"
        placeholder="Create a todo item!"
      />
      <button
        onClick={async () => {
          const todosData = createTodo();
          const [todo] = await Promise.all([todosData]);
          dispatch({
            type: "SET_TODOS",
            payload: [...state.todos, todo],
          });
        }}
      >
        Create
      </button>
    </>
  );
};

export default TodoCreator;
