import { getTodos } from "@/app/api/todos/getTodos";
import getQueryClient from "@/app/getQueryClient";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import Todos from "./Todos";

const HydratedTodos = async () => {
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
};

export default HydratedTodos;
