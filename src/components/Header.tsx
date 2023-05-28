"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Moon from "public/icon-moon.svg";

const Header = () => {
  const { status, data } = useSession();

  return (
    <div className="px-[26px] pt-[48px] flex justify-between items-start h-[200px] w-full bg-[url('/bg-mobile-light.jpg')] bg-no-repeat bg-cover bg-left-top">
      <h1 className="font-black text-3xl uppercase tracking-widest text-white">
        Todo
      </h1>
      <div className="flex gap-3 justify-between items-start">
        {status === "authenticated" && (
          <Image
            onClick={() => signOut()}
            className="w-7 h-7 rounded-full"
            src={data?.user?.image as string}
            alt="Profile Image"
            width={10}
            height={10}
          />
        )}
        {status === "unauthenticated" && (
          <button className="text-white font-black" onClick={() => signIn()}>
            Login
          </button>
        )}
        <Image src={Moon} alt="Moon Icon" />
      </div>
    </div>
  );
};

export default Header;
