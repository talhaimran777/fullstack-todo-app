import { getBaseUrl } from "@/lib/getBaseUrl";
import { Todo } from "./todo";

export async function createTodo(input: string) {
  const res = await fetch(`${getBaseUrl()}/api/todos`, {
    method: "post",
    body: JSON.stringify({ input }),
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const todo = (await res.json()) as Todo;

  return todo;
}
