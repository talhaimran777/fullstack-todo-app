import Todos from "@/app/components/Todos";
import TodoCreator from "@/app/components/TodoCreator";
import TodoFilter from "@/app/components/TodoFilter";

export default function Home() {
  return (
    <>
      <TodoCreator />
      <Todos />
      <TodoFilter />
    </>
  );
}
