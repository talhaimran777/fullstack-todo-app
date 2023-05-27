"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <JotaiProvider>{children}</JotaiProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
