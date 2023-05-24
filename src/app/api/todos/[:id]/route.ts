import data from "../data";
import { DeletedTodoResponse } from "../todo";

export async function DELETE(
  request: Request,
  { params }: { params: { ":id": string } }
) {
  const id = params[":id"];
  const todos = data.filter((todo) => todo.id === id);

  if (todos.length > 0) {
    const todo = todos[0];
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
}
