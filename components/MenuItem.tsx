import * as React from "react";
import { motion } from "framer-motion";

interface Props {
  data: any;
  i: number;
  isOpen: boolean;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ data, isOpen }: Props) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`flex gap-2 items-center ${!isOpen ? "hidden" : ""} menu-li`}
    >
      {data.icon && data.icon}
      <a
        className={`font-extrabold text-transarent text-2xl bg-clip-text bg-gradient-to-r from-tertiary-400 to-primary-400 cursor-pointer`}
        href={data.link}
        target="_blank"
      >
        {data.name}
      </a>
    </motion.li>
  );
};
