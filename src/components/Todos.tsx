import { getTodos } from "@/app/api/todos/getTodos";
import TodosDisplayer from "@/components/TodosDisplayer";
import TodosSummary from "./TodosSummary";

const Todos = async () => {
  const todos = await getTodos();

  return (
    <div className="shadow-lg mx-6">
      <TodosDisplayer todos={todos} />
      <TodosSummary />
    </div>
  );
};

export default Todos;
