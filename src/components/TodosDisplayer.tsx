"use client";

import Todo from "@/components/Todo";
import { FC, Suspense, useEffect } from "react";
import { useTodos } from "@/context/todos.provider";

const TodosDisplayer: FC<{ todos: Todo[] }> = ({ todos }) => {
  const { dispatch, state } = useTodos();

  useEffect(() => {
    if (todos.length < 0) return;
    dispatch({ type: "SET_TODOS", payload: todos });
  }, [todos]);

  return (
    <div className="p-4 border-2 rounded-md">
      <h1 className="uppercase font-bold text-md mb-2">Todos</h1>
      {state.todos?.map((todo) => (
        <Suspense fallback="Loading...">
          <Todo key={todo.id} todo={todo} />
        </Suspense>
      ))}
    </div>
  );
};

export default TodosDisplayer;
