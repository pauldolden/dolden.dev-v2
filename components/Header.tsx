import React, { Dispatch, SetStateAction } from "react";
import { Logo } from "@/components/Logo";
import { motion } from "framer-motion";
import { Menu } from "./Menu";

interface Props {
  setToggleMenu?: Dispatch<SetStateAction<boolean>>;
}

export const Header = () => {
  return (
    <header className="mx-auto py-5 px-10 min-h-[10vh]">
      <Logo />
      <Menu />
    </header>
  );
};
