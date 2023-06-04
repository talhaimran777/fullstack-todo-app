import Header from "@/components/Header";
import HydratedTodos from "@/components/HydratedTodos";
import TodoCreator from "@/components/TodoCreator";
import TodoFilter from "@/components/TodoFilter";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const TodosLoader = () => {
  return <p className="mx-6 bg-white p-3 text-md shadow-lg">Loading Todos</p>;
};

export default async function Home() {
  const user = await currentUser();

  if (!user?.id) {
    redirect("/sign-in?redirectUrl=/");
  }

  return (
    <>
      <Header />
      <TodoCreator />
      <Suspense fallback={<TodosLoader />}>
        {/* @ts-expect-error */}
        <HydratedTodos />
      </Suspense>
      <TodoFilter />
    </>
  );
}
