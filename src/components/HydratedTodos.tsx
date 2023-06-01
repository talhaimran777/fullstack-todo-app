import { getTodos } from "@/app/api/todos/getTodos";
import getQueryClient from "@/app/getQueryClient";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import { Session } from "next-auth";
import Todos from "./Todos";

const HydratedTodos = async ({ session }: { session: Session }) => {
  if (Object.keys(session).length > 0) {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery({
      queryKey: ["todos"],
      queryFn: getTodos,
    });

    const dehydratedState = dehydrate(queryClient);

    return (
      <Hydrate state={dehydratedState}>
        <Todos />
      </Hydrate>
    );
  }

  return null;
};

export default HydratedTodos;
