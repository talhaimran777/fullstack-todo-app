"use client";

import Todo from "@/components/Todo";
import { useTodos } from "@/context/todos.provider";
import { useEffect } from "react";

const TodosDisplayer = ({ todos }: { todos: Todo[] | undefined }) => {
  const { dispatch, state } = useTodos();

  useEffect(() => {
    if (todos && todos.length < 0) return;
    dispatch({ type: "SET_TODOS", payload: todos });
  }, [todos]);

  return (
    <div>
      {state.todos?.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosDisplayer;
