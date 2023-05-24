"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { status, data } = useSession();

  switch (status) {
    case "loading":
      return <p>Checking your Session...</p>;

    case "unauthenticated":
      return (
        <div>
          <p>You are not signed in!</p>
          <button onClick={() => signIn()}>Sign In</button>
        </div>
      );

    case "authenticated":
      return (
        <div>
          <p>Hello, {data.user?.name}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      );

    default:
      return null;
  }
};

export default Navbar;
