"use client";

import { getTodos } from "@/app/api/todos/getTodos";
import getQueryClient from "@/app/getQueryClient";
import authAtom from "@/atoms/auth";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import Todos from "./Todos";

const HydratedTodos = async () => {
  const auth = useAtomValue(authAtom);

  if (auth.status === "authenticated") {
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
