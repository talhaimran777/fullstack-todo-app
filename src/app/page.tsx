import Header from "@/components/Header";
import TodoCreator from "@/components/TodoCreator";
import TodoFilter from "@/components/TodoFilter";
import Todos from "@/components/Todos";

export default function Home() {
  return (
    <>
      <Header />
      <TodoCreator />
      {/* @ts-expect-error Async Server Component */}
      <Todos />
      <TodoFilter />
    </>
  );
}
