import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-center md:text-left font-extrabold font-fathur text-transparent text-4xl bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 px-2 cursor-pointer">
        dolden.dev
      </h1>
    </Link>
  );
};
