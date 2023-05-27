"use client";

import { createTodo } from "@/app/api/todos/createTodo";
import { useTodos } from "@/context/todos.provider";

const TodoCreator = () => {
  const { state, dispatch } = useTodos();

  // TODO: Update any to proper type
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const todosData = createTodo();
    const [todo] = await Promise.all([todosData]);
    dispatch({
      type: "SET_TODOS",
      payload: [...state.todos, todo],
    });
  };

  return (
    <div className="mx-6 -mt-24">
      <form onSubmit={handleSubmit}>
        <input
          className="text-xs py-[14px] px-5 border-2 w-full mb-5 border-none outline-none"
          placeholder="Create a todo item!"
          type="text"
        />
      </form>
    </div>
  );
};

export default TodoCreator;
