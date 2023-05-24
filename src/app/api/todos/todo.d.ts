export type Todo = {
  id: string;
  name: string;
  status: TodoStatus;
};

type TodoStatus = "active" | "completed";

export type DeletedTodoResponse = {
  status: number;
  message: string;
  deletedTodoId: string;
};
