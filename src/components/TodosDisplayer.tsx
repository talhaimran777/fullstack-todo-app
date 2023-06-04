"use client";

import todosAtom from "@/atoms/todos";
import Todo from "@/components/Todo";
import { useAtom } from "jotai";
import { useEffect } from "react";

const TodosDisplayer = ({ todos }: { todos: Todo[] | undefined }) => {
  const [todosAtomValue, setTodosAtomValue] = useAtom(todosAtom);

  useEffect(() => {
    if (todos && todos.length < 0) return;
    setTodosAtomValue(todos as Todo[]);
  }, [todos]);

  return (
    <div>
      {todosAtomValue.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosDisplayer;
