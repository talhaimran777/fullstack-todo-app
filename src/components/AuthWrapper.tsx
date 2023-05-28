"use client";

import authAtom from "@/atoms/auth";
import { useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const { data } = useSession();
  const setAuth = useSetAtom(authAtom);
  const resetAuth = useResetAtom(authAtom);

  useEffect(() => {
    if (data?.user?.email) {
      setAuth({ isAuthenticated: true, user: data.user });
    } else {
      resetAuth();
    }
  }, [data?.user]);

  return <div>{children}</div>;
};

export default AuthWrapper;
