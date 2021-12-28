import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <motion.h1
        whileHover={{ scale: 1.2, transition: { duration: 0.4 } }}
        className="font-extrabold font-fathur text-transparent text-4xl bg-clip-text bg-gradient-to-r from-tertiary-400 to-primary-400 px-2 hover:bg-gradient-to-r hover:from-tertiary-100 hover:to-primary-100 cursor-pointer"
      >
        dolden.dev
      </motion.h1>
    </Link>
  );
};
