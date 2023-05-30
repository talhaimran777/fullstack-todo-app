import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NEXTAUTH_OPTIONS } from "../auth/[...nextauth]/route";
import data from "./data";

export async function GET(request: Request) {
  const session = await getServerSession(NEXTAUTH_OPTIONS);

  if (session?.user?.email) {
    const { searchParams } = new URL(request.url);

    const delay = searchParams.get("delay");

    if (delay) {
      await new Promise((resolve) => setTimeout(resolve, Number(delay)));
    }

    const todos = await prisma.todo.findMany({
      where: { userId: session.user.id },
    });

    return new Response(JSON.stringify(todos ?? []), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify([]), {
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
