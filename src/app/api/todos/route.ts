import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const delay = searchParams.get("delay");

  if (delay) {
    await new Promise((resolve) => setTimeout(resolve, Number(delay)));
  }

  const todos = await prisma.todo.findMany({
    // TODO: Remove hard coded user id
    where: { userId: "cli1a76eu0000g3g7e04ts9ay" },
  });

  return new Response(JSON.stringify(todos ?? []), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  const { input } = (await request.json()) as { input: string };

  const todo = await prisma.todo.create({
    data: {
      name: input,
      // TODO: Remove hard coded user id
      userId: "cli1a76eu0000g3g7e04ts9ay",
    },
  });

  return new Response(JSON.stringify(todo ?? null), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
