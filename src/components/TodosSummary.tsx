"use client";

import todosAtom from "@/atoms/todos";
import { useAtomValue } from "jotai";

const TodosSummary = () => {
  const todos = useAtomValue(todosAtom);

  if (todos && todos.length < 1) return null;

  return (
    <div className="py-4 px-5 bg-white flex justify-between items-center text-xs text-gray-600">
      <p>5 items left</p>
      <button>Clear Completed</button>
    </div>
  );
};

export default TodosSummary;
