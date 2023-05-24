import { getBaseUrl } from "@/lib/getBaseUrl";

import { DeletedTodoResponse, Todo } from "@/app/api/todos/todo";

export async function deleteTodo(todo: Todo) {
  const res = await fetch(`${getBaseUrl()}/api/todos/${todo.id}`, {
    method: "delete",
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return (await res.json()) as DeletedTodoResponse;
}
