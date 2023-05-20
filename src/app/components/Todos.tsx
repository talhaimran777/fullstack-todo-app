import Todo from "@/app/components/Todo";

const Todos = () => {
  return (
    <div className="p-4 border-2 rounded-md">
      <h1 className="uppercase font-bold text-md mb-2">Todos</h1>
      <Todo />
    </div>
  );
};

export default Todos;
