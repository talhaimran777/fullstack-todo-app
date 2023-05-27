"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "jotai";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <Provider>{children}</Provider>
    </SessionProvider>
  );
};

export default Providers;
