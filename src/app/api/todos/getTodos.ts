import { getBaseUrl } from "@/lib/getBaseUrl";
import { notFound } from "next/navigation";

import { Todo } from "./todo";

export async function getTodos() {
  const res = await fetch(`${getBaseUrl()}/api/todos?delay=2000`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const todos = (await res.json()) as Todo[];

  if (todos.length === 0) {
    notFound();
  }

  return todos;
}
