import { getTodos } from "@/app/api/todos/getTodos";
import TodosDisplayer from "@/components/TodosDisplayer";

const Todos = async () => {
  const todos = await getTodos();

  return <TodosDisplayer todos={todos} />;
};

export default Todos;
