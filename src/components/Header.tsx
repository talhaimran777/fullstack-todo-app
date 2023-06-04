"use client";

import { UserButton } from "@clerk/clerk-react";
import Image from "next/image";
import Moon from "public/icon-moon.svg";

const Header = () => {
  return (
    <div className="px-[26px] pt-[48px] flex justify-between items-start h-[200px] w-full bg-[url('/bg-mobile-light.jpg')] bg-no-repeat bg-cover bg-left-top">
      <h1 className="font-black text-3xl uppercase tracking-widest text-white">
        Todo
      </h1>
      <div className="flex gap-3 justify-between items-start">
        <UserButton afterSignOutUrl="/sign-in?redirectUrl=/" />
        <Image src={Moon} alt="Moon Icon" />
      </div>
    </div>
  );
};

export default Header;
