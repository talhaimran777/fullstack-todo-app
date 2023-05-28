"use client";

import { getTodos } from "@/app/api/todos/getTodos";
import TodosDisplayer from "@/components/TodosDisplayer";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import TodosSummary from "./TodosSummary";

const Todos = () => {
  // const auth = useAtomValue(authAtom);
  const { data: sessionData } = useSession();
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    enabled: !!sessionData?.user?.email,
  });

  return (
    <div className="shadow-lg mx-6">
      <TodosDisplayer todos={todos} />
      <TodosSummary />
    </div>
  );
};

export default Todos;
