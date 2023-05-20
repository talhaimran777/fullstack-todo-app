export type Todo = {
  id: string;
  name: string;
  status: TodoStatus;
};

type TodoStatus = "active" | "completed";
