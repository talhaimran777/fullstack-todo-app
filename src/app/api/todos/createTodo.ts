import { getBaseUrl } from "@/lib/getBaseUrl";
import { notFound } from "next/navigation";
import { Todo } from "./todo";

export async function createTodo() {
  const res = await fetch(`${getBaseUrl()}/api/todos`, { method: "post" });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const todo = (await res.json()) as Todo;

  return todo;
}
