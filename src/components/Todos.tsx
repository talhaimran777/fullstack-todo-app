"use client";

import { getTodos } from "@/app/api/todos/getTodos";
import TodosDisplayer from "@/components/TodosDisplayer";
import { useQuery } from "@tanstack/react-query";
import TodosSummary from "./TodosSummary";

const Todos = () => {
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return (
    <div className="shadow-lg mx-6 lg:max-w-4xl lg:mx-auto">
      <>
        <TodosDisplayer todos={todos} />
        <TodosSummary />
      </>
    </div>
  );
};

export default Todos;
