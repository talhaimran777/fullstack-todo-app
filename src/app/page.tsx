"use client";

import authAtom from "@/atoms/auth";
import Header from "@/components/Header";
import HydratedTodos from "@/components/HydratedTodos";
import TodoCreator from "@/components/TodoCreator";
import TodoFilter from "@/components/TodoFilter";
import { useAtomValue } from "jotai";
import { Suspense } from "react";

const TodosLoader = () => {
  return <p className="mx-6 bg-white p-3 text-md shadow-lg">Loading Todos</p>;
};

export default function Home() {
  const auth = useAtomValue(authAtom);

  return (
    <>
      <Header />
      {auth.status === "loading" && (
        <div className="mx-6 text-base my-4">Checking User</div>
      )}

      {auth.status === "authenticated" && (
        <>
          <TodoCreator />
          <Suspense fallback={<TodosLoader />}>
            {/* @ts-expect-error */}
            <HydratedTodos />
          </Suspense>
          <TodoFilter />
        </>
      )}

      {auth.status === "unauthenticated" && (
        <div className="mx-6 text-base my-4">Please Sign In!</div>
      )}
    </>
  );
}
