"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const SignInPage = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") as string;

  return (
    <div>
      <h1>This is a login page</h1>
      <button onClick={() => signIn("google", { callbackUrl })}>Sign In</button>
    </div>
  );
};

export default SignInPage;
