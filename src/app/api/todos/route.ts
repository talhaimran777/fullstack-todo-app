import type { Todo } from "./todo";

export async function GET(request: Request) {
  return new Response(JSON.stringify(data ?? null), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}

const data: Todo[] = [
  {
    id: "1",
    name: "Play basketball!",
    status: "completed",
  },
  {
    id: "2",
    name: "Play Cricket",
    status: "active",
  },
  {
    id: "3",
    name: "Play Guitar",
    status: "active",
  },
  {
    id: "4",
    name: "Do exercise!",
    status: "completed",
  },
];
