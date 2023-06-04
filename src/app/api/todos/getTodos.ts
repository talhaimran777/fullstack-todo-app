import { getBaseUrl } from "@/lib/getBaseUrl";
import { Todo } from "./todo";

export async function getTodos() {
  const res = await fetch(`${getBaseUrl()}/api/todos?delay=1000`);

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const todos = (await res.json()) as Todo[];

  return todos;
}
