import { prisma } from "@/lib/prisma";
import data from "./data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const delay = searchParams.get("delay");

  if (delay) {
    await new Promise((resolve) => setTimeout(resolve, Number(delay)));
  }

  const todos = await prisma.todo.findMany();

  return new Response(JSON.stringify(todos ?? []), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  return new Response(JSON.stringify(data[data.length - 1] ?? null), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
