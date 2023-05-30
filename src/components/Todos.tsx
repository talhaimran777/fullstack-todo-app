"use client";

import { getTodos } from "@/app/api/todos/getTodos";
import TodosDisplayer from "@/components/TodosDisplayer";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import TodosSummary from "./TodosSummary";

const Todos = () => {
  const { data: sessionData } = useSession();
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    enabled: !!sessionData?.user?.email,
  });

  return (
    <div className="shadow-lg mx-6">
      {todos && todos.length > 0 ? (
        <>
          <TodosDisplayer todos={todos} />
          <TodosSummary />
        </>
      ) : (
        <div className="bg-white px-6 py-4">
          <p>No todo items found!</p>
        </div>
      )}
    </div>
  );
};

export default Todos;
