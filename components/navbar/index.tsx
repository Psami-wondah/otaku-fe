import React from "react";
import icon from "public/assets/svgs/icon.svg";
import Image from "next/image";
import { StyledNav } from "./styles";

const NavBar = () => {
  return (
    <StyledNav className="flex justify-between items-center w-[84vw] left-[8vw] z-[1] py-6 px-10 absolute top-20">
      <Image src={icon} alt={"icon"} />

      <div className=" flex w-max font-[600] text-2xl gap-x-8">
        <p>Home</p>
        <p>Events</p>
        <p>Blog</p>
        <p>Community</p>
      </div>

      <button className=" border-[3px] border-otaku-blue-1 text-otaku-red-1 font-bold text-[1.75rem] px-6 py-[15px]">
        Sign Up
      </button>
    </StyledNav>
  );
};

export default NavBar;
