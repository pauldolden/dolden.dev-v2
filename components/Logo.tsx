import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-left font-extrabold font-fathur text-2xl sm:text-3xl md:text-4xl text-primary-400 md:px-2 cursor-pointer">
        dolden.dev
      </h1>
    </Link>
  );
};
