"use client";

import authAtom from "@/atoms/auth";
import { useAtomValue, useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const { data, status } = useSession();
  const auth = useAtomValue(authAtom);
  const setAuth = useSetAtom(authAtom);
  const resetAuth = useResetAtom(authAtom);

  useEffect(() => {
    if (data?.user?.email) {
      setAuth({
        ...auth,
        isAuthenticated: true,
        user: data.user,
        status,
      });
    } else {
      resetAuth();
    }
  }, [data?.user]);

  useEffect(() => {
    setAuth({ ...auth, status });
  }, [status]);

  return <div>{children}</div>;
};

export default AuthWrapper;
