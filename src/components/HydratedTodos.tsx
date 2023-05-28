import { NEXTAUTH_OPTIONS } from "@/app/api/auth/[...nextauth]/route";
import { getTodos } from "@/app/api/todos/getTodos";
import getQueryClient from "@/app/getQueryClient";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import { getServerSession } from "next-auth";
import Todos from "./Todos";

const HydratedTodos = async () => {
  const session = await getServerSession(NEXTAUTH_OPTIONS);
  if (session?.user?.email) {
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
