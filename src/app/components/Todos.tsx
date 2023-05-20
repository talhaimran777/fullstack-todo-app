import Todo from "@/app/components/Todo";
import { Todo as TodoItem } from "../api/todos/todo";

const getTodos = async (): Promise<TodoItem[]> => {
  const res = await fetch(`http://localhost:3000/api/todos`, {
    cache: "no-store",
  });

  return res.json();
};

const Todos = async () => {
  const todosData = getTodos();
  const [todos] = await Promise.all([todosData]);

  return (
    <div className="p-4 border-2 rounded-md">
      <h1 className="uppercase font-bold text-md mb-2">Todos</h1>
      {todos?.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
