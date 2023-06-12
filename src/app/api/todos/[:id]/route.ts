import { prisma } from "@/lib/prisma";
import { DeletedTodoResponse } from "../todo";

export async function DELETE(
  request: Request,
  { params }: { params: { ":id": string } }
) {
  const id = params[":id"];
  const todo = await prisma.todo.delete({ where: { id } });

  const deletedTodoResponse: DeletedTodoResponse = {
    status: 200,
    message: "Successfully Deleted",
    deletedTodoId: todo.id,
  };

  return new Response(JSON.stringify(deletedTodoResponse ?? null), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
