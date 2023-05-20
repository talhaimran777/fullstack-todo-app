import { FC } from "react";
import { Todo } from "../api/todos/todo";

type TodoProps = {
  todo: Todo;
};

const Todo: FC<TodoProps> = ({ todo }) => {
  return (
    <div className="flex justify-between items-center border-2 p-3 rounded-md my-2">
      <input type="checkbox" defaultChecked={todo.status == "completed"} />
      <p>{todo.name}</p>
      <button>Delete</button>
    </div>
  );
};

export default Todo;
