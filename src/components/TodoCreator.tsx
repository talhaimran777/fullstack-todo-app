"use client";

import { createTodo } from "@/app/api/todos/createTodo";
import todosAtom from "@/atoms/todos";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useState } from "react";

const TodoCreator = () => {
  const [input, setInput] = useState("");
  const [todosAtomValue, setTodosAtomValue] = useAtom(todosAtom);

  const createTodoMutaion = useMutation({
    mutationFn: createTodo,
  });

  // TODO: Update any to proper type
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (input.length > 0) {
      const todo = await createTodoMutaion.mutateAsync(input);
      setTodosAtomValue([...todosAtomValue, todo]);
      setInput("");
    } else {
      alert("Please enter a todo item!");
    }
  };

  return (
    <div className="mx-6 -mt-24 lg:max-w-4xl lg:mx-auto">
      <form onSubmit={handleSubmit}>
        <input
          className="text-xs py-[14px] px-5 border-2 w-full mb-5 border-none outline-none"
          placeholder="Create a todo item!"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoCreator;
