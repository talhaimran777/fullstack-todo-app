import Todos from "@/components/Todos";
import TodoCreator from "@/components/TodoCreator";
import TodoFilter from "@/components/TodoFilter";
import { Suspense } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <TodoCreator />
      <Suspense fallback={<h1>Loading todo items!</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <Todos />
      </Suspense>
      <TodoFilter />
      <Link href={"/jotai"}>Go to jotai page</Link>
    </>
  );
}
