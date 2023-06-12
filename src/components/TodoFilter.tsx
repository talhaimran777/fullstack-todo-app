"use client";

import todosAtom from "@/atoms/todos";
import { useAtomValue } from "jotai";

const TodoFilter = () => {
  const todosAtomValue = useAtomValue(todosAtom);

  if (todosAtomValue && todosAtomValue.length < 1) return null;

  return (
    <div className="flex justify-center font-medium items-center gap-6 text-sm mx-6 bg-white mt-4 shadow-lg py-4 lg:max-w-4xl lg:mx-auto">
      <p>All</p>
      <p>Active</p>
      <p>Completed</p>
    </div>
  );
};

export default TodoFilter;
