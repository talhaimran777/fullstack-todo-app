"use client";

import Image from "next/image";
import Moon from "public/icon-moon.svg";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="px-[26px] pt-[48px] flex justify-between items-start h-[200px] w-full bg-[url('/bg-mobile-light.jpg')] bg-no-repeat bg-cover bg-left-top">
      <h1 className="font-black text-3xl uppercase tracking-widest dark:text-white">
        Todo
      </h1>
      <Image
        src={Moon}
        alt="Moon Icon"
        onClick={() => (localStorage.theme = "dark")}
      />
    </div>
  );
};

export default Header;
