import React from "react";
import { motion } from "framer-motion";

interface Props extends React.HTMLProps<HTMLButtonElement> {}

export const Button = (props: Props) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        content: "Let's Go",
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
      // @ts-ignore
      type="button"
      {...props}
      className="w-[400px] mt-10 bg-gradient-to-r from-primary-400 to-secondary-400 px-6 py-6 text-white font-extrabold text-4xl rounded-md flex flex-col items-center justify-center"
    >
      {props.children}
    </motion.button>
  );
};
