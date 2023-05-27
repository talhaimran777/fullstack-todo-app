import Header from "@/components/Header";
import HydratedTodos from "@/components/HydratedTodos";
import TodoCreator from "@/components/TodoCreator";
import TodoFilter from "@/components/TodoFilter";
import { Suspense } from "react";

const TodosLoader = () => {
  return <p className="mx-6 bg-white p-3 text-md shadow-lg">Loading Todos</p>;
};

export default function Home() {
  return (
    <>
      <Header />
      <TodoCreator />
      <Suspense fallback={<TodosLoader />}>
        {/* @ts-expect-error Async Server Component */}
        <HydratedTodos />
      </Suspense>
      <TodoFilter />
    </>
  );
}
