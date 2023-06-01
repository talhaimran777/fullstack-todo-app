import Header from "@/components/Header";
import HydratedTodos from "@/components/HydratedTodos";
import TodoCreator from "@/components/TodoCreator";
import TodoFilter from "@/components/TodoFilter";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { NEXTAUTH_OPTIONS } from "./api/auth/[...nextauth]/route";

const TodosLoader = () => {
  return <p className="mx-6 bg-white p-3 text-md shadow-lg">Loading Todos</p>;
};

export default async function Home() {
  const session = await getServerSession(NEXTAUTH_OPTIONS);
  if (!session) redirect("/auth/signin?callbackUrl=/");

  return (
    <>
      <Header />
      <TodoCreator />
      <Suspense fallback={<TodosLoader />}>
        {/* @ts-expect-error */}
        <HydratedTodos session={session} />
      </Suspense>
      <TodoFilter />
    </>
  );
}
